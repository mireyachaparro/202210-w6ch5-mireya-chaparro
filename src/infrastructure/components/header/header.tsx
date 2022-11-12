import { Menu } from '../menu/menu';

export function Header() {
    const title = 'Gnomes & Cones';
    return (
        <header className="header">
            <h1 className="header__h1">{title}</h1>
            <Menu></Menu>
        </header>
    );
}
