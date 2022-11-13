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
            <div className="onsale__list">
                {result.map((item) => (
                    <div className="onsale__card" key={item.id}>
                        <div className="onsale__card img">
                            <img src={item.image} alt="Imagen" />
                        </div>
                        <div className="onsale__card name">{item.name}</div>
                    </div>
                ))}
            </div>
        </>
    );
}
