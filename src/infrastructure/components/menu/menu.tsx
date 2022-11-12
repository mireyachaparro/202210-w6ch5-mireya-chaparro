import { Link } from 'react-router-dom';

export function Menu() {
    const menuOptions = [
        { id: '1', path: '', label: 'Home' },
        { id: '2', path: 'gnomes', label: 'Gnomes' },
        { id: '2', path: 'cones', label: 'Cones' },
        { id: '2', path: 'carrito', label: 'Carrito' },
    ];
    return (
        <nav className="nav">
            <ul className="nav__list">
                {menuOptions.map((item) => (
                    <li className="nav__listitem" key={item.id}>
                        <Link to={item.path}>{item.label}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
