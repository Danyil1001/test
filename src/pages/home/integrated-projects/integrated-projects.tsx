import { useRef } from 'react';
import styles from './integrated-projects.module.scss';
import { ProjectDataType, projectsData } from './data';
import { useIntersectionObserver } from '../../../hooks/useIntersectionObserver';

const IntegratedProjects = () => {
  const blockRef = useRef<HTMLDivElement | null>(null);
  const isVisible = useIntersectionObserver(blockRef, 0.3);

  return (
    <div className={styles.projectsSection}>
      <h2 className={styles.title}>Projects integrated into the Arrakis AI Ecosystem</h2>
      <div
        ref={blockRef}
        className={`${styles.projectsBlock} ${isVisible ? styles.projectsBlockVisible : ''}`}
      >
        {projectsData.map((projectInfo: ProjectDataType, index) => (
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
