import { useProduct } from '../../../../infrastructure/hooks/custom.hooks';

export function OnSale() {
    const title = 'On Sale';
    const { products } = useProduct();
    const result = products.filter((item) => item.onsale);
    return (
        <>
            <header className="onsale">
                <h1 className="header__h1">{title}</h1>
            </header>

            {result.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
        </>
    );
}
