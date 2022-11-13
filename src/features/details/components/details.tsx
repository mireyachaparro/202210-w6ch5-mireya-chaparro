// import { useParams } from 'react-router-dom';
// import { useProduct } from '../../../infrastructure/hooks/custom.hooks';

export function Details() {
    const title = 'Details';
    // const { products } = useProduct();
    // const { id } = useParams();

    //     const data = await fetch(
    //         `https://gnomes-conesserver-production.up.railway.app/data/${id}`
    //     );
    //     const result = await data.json();
    // };

    // useEffect(() => {
    //     getCharactersById(id);
    // }, [id]);

    // const result = products.filter((item) => item.id === 'Gnomes');
    return (
        <>
            <header className="gnomes">
                <h1 className="header__h1">{title}</h1>
            </header>
            <p>Aqui aparecen los detalles</p>
            {/* <p className="profes">Mañana hago los test que faltan =D</p>
            <div className="product__list">
                {result.map((item) => (
                    <div className="product__card" key={item.id}>
                        <div className="product__card img">
                            <img src={item.image} alt="Imagen" width="150px" />
                        </div>
                        <div className="product__card name">{item.name}</div>
                    </div>
                ))}
            </div> */}
        </>
    );
}
