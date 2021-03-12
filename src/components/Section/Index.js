import './index.css';

export function Section({ title, sinopse, color, url, genero }) {
    return (
        <div className="container" style={{ background: color }}>
            <div className="anime-autor">
                <strong>{title}</strong>
                <p>{sinopse}</p>
                <p>{genero}</p>
            </div>
            <img src={url} alt='Capa do anime' />
        </div>
    )
}