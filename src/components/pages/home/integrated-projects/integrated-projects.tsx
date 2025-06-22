import { useEffect, useRef, useState } from 'react';
import styles from './integrated-projects.module.scss';
import { projectsData } from './data';

const IntegratedProjects = () => {
    const blockRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (blockRef.current) {
            observer.observe(blockRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className={styles.projectsSection}>
            <h2 className={styles.title}>Projects integrated into the Arrakis AI Ecosystem</h2>
            <div
                ref={blockRef}
                className={`${styles.projectsBlock} ${isVisible ? styles.projectsBlockVisible : ''}`}
            >
                {projectsData.map((projectInfo, index) => (
                    <img
                        key={index}
                        src={projectInfo.img}
                        alt={`project-${index}`}
                        className={styles.projectImg}
                    />
                ))}
            </div>
        </div>
    );
};

export default IntegratedProjects;
