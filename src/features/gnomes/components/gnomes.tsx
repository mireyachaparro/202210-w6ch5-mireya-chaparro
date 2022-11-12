import { useProduct } from '../../../infrastructure/hooks/custom.hooks';

export function Gnomes() {
    const title = 'Gnomes';
    const { products } = useProduct();
    const result = products.filter((item) => item.section === 'Gnomes');
    console.log(result);
    return (
        <>
            <header className="gnomes">
                <h1 className="header__h1">{title}</h1>
            </header>

            {result.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
        </>
    );
}
