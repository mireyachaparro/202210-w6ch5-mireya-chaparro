import { useProduct } from '../../../infrastructure/hooks/custom.hooks';

export function Cones() {
    const title = 'Cones';
    const { products } = useProduct();
    const result = products.filter((item) => item.section === 'Cones');
    console.log(result);
    return (
        <>
            <header className="cones">
                <h1 className="header__h1">{title}</h1>
            </header>
            {result.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
        </>
    );
}
