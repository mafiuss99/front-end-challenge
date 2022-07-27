import { Link } from 'react-router-dom';
import Logo from '../../images/logo.webp';

export const Header = () => (
    <header>
        <Link to={`/`} title="Início" className='logo'>
            <img src={Logo} alt="Logo Blog" />
        </Link>
    </header>
)