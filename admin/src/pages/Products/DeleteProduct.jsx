import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { a } from "../../services/axiosInstance";
import { PRODUCTS } from "../../utils/consts";

function DeleteProduct() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [productName, setProductName] = useState("");

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await a.get(`/products/${id}`);
                setProductName(res.data.name);
            } catch (err) {
                console.error("Ошибка при загрузке товара:", err);
            }
        }
        fetchProduct();
    }, [id]);

    async function handleDelete(e) {
        e.preventDefault();
        try {
            await a.delete(`/products/${id}`);
            alert("Товар удалён!");
            navigate(PRODUCTS);
        } catch (err) {
            console.error("Ошибка при удалении товара:", err);
        }
    }

    return (

            <div className="content">
                <section className="block">
                    <div className="container">
                        <h1 className="title">Вы действительно хотите удалить товар "{productName}"?</h1>
                        <p className="mb-5">
                            Это действие необратимо. Подтвердите удаление.
                        </p>
                        <form className="actions-sm" onSubmit={handleDelete}>
                            <button type="submit" className="btn bg-danger">Да</button>
                            <Link to={PRODUCTS} className="btn bg-primary">Нет</Link>
                        </form>
                    </div>
                </section>
            </div>
     
    );
}

export default DeleteProduct;
