import SolanaImg from '../../../assets/images/home/solana.png'
import ArweaveImg from '../../../assets/images/home/arweave.png'
import BittensorImg from '../../../assets/images/home/bittensor.png'
import TelegramImg from '../../../assets/images/home/telegram.png'
import lampImg from '../../../assets/images/home/lamp.png'

export type ProjectDataType = {
    img: string
}

export const projectsData: Array<ProjectDataType> = [
    {
        img: SolanaImg
    },

    {
        img: TelegramImg
    },
    {
        img: BittensorImg
    },
    {
        img: ArweaveImg
    },
    {
        img: lampImg
    },

]