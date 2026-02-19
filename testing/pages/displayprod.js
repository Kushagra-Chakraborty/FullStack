import { fetch_product } from "../data/product";

export const display_product = async() => {
    const product = await fetch_product();
    return (
        <div>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
        </div>
    );
}
