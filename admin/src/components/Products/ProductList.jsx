import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { a } from "../../services/axiosInstance";

function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await a.get("/products");
                setProducts(res.data);
            } catch (error) {
                console.error("Ошибка при загрузке продуктов:", error);
            }
        }
        fetchProducts();
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>№</th>
                    <th>Название</th>
                    <th>Действие</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <ProductItem key={product.id} product={product} index={index} />
                ))}
            </tbody>
        </table>
    );
}

export default ProductList;
