import './styles.css';
import { AiFillHome, AiFillHeart, AiOutlineCheck } from 'react-icons/ai'


export function Navbar() {
    return (
        <div className="container-search">
            <a href="/">Home<AiFillHome className="icons-navbar" /></a>
            <a href="/favorites">Favoritos<AiFillHeart className="icons-navbar" /></a>
            <a href="/completed">Completados<AiOutlineCheck className="icons-navbar"/></a>
        </div>
    );
}