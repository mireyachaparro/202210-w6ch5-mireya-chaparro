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
            <div className="product__list">
                {result.map((item) => (
                    <div className="product__card" key={item.id}>
                        <div className="product__card img">
                            <img src={item.image} alt="Imagen" width="150px" />
                        </div>
                        <div className="product__card name">{item.name}</div>
                    </div>
                ))}
            </div>
        </>
    );
}
