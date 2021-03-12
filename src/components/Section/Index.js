import './styles.css';
import { AiFillHeart, AiOutlineCheck } from 'react-icons/ai'


export function Section({ title, sinopse, color, url, genero }) {
    return (
        <div className="container-section" style={{ background: color }}>
            <div className="anime-autor">
                <strong>
                    {title}
                    <AiFillHeart />
                    <AiOutlineCheck />
                </strong>
                <p>{sinopse}</p>
                <p>{genero}</p>
            </div>
            <img src={url} alt='Capa do anime' />
        </div>
    )
}