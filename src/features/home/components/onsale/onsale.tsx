import { useProduct } from '../../../../infrastructure/hooks/custom.hooks';

export function OnSale() {
    const title = 'On Sale';
    const { products } = useProduct();
    console.log(products);
    const result = products.filter((item) => item.onsale);
    console.log(result);
    return (
        <>
            <header className="onsale">
                <h1 className="header__h1">{title}</h1>
            </header>
            <p>aqui aparece la lista de onsale</p>

            {result.map((item) => (
                <p key={item.id}>{item.name}</p>
            ))}
        </>
    );
}
