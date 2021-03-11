import './index.css';

export function Section({ title, sinopse, color, img }) {
    return (
        <div className="container" style={{ background: color }}>
            <div className="anime-autor">
                <strong>{title}</strong>
                <p>{sinopse}</p>
            </div>
            <img src={img} alt='Capa do anime' />
        </div>
    )
}