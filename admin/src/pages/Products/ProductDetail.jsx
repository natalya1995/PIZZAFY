import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { a } from "../../services/axiosInstance";

function ProductDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await a.get(`/products/${id}`);
                setProduct(res.data);

                if (res.data.categoryId) {
                    const catRes = await a.get(`/categories/${res.data.categoryId}`);
                    setCategoryName(catRes.data.name);
                }
            } catch (err) {
                console.error("Ошибка при загрузке товара:", err);
            }
        }

        fetchProduct();
    }, [id]);

    if (!product) {
        return (
            <main className="wrapper">
                <Sidebar />
                <div className="content">
                    <section className="block">
                        <div className="container">
                            <h1 className="title">Загрузка...</h1>
                        </div>
                    </section>
                </div>
            </main>
        );
    }

    return (
            <div className="content">
                <section className="block">
                    <div className="container">
                        <span className="btn bg-danger" onClick={() => navigate(-1)}>Назад</span>
                        <h1 className="title">Детали товара</h1>
                        <div className="product-detail">
                            <img
                                src={product.image || "https://fakeimg.pl/500x500"}
                                alt={product.name}
                                className="product-img"
                            />
                            <div className="product-detail__content">
                                <h2 className="product-detail__title">{product.name}</h2>
                                <p>Цена: {product.price} ₸</p>
                                <p>Описание: {product.description}</p>
                                <p>Категория: <span className="category-badge">{categoryName}</span></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
    );
}

export default ProductDetail;
