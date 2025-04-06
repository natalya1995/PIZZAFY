import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { a } from "../../services/axiosInstance";
import { PRODUCTS } from "../../utils/consts";

function UpdateProduct() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchProduct() {
            try {
                const res = await a.get(`/products/${id}`);
                const product = res.data;
                setName(product.name);
                setPrice(product.price);
                setDescription(product.description);
                setImage(product.image);
                setCategoryId(product.categoryId);
            } catch (err) {
                console.error("Ошибка при загрузке товара:", err);
            }
        }

        async function fetchCategories() {
            try {
                const res = await a.get("/categories");
                setCategories(res.data);
            } catch (err) {
                console.error("Ошибка при загрузке категорий:", err);
            }
        }

        fetchProduct();
        fetchCategories();
    }, [id]);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const updatedProduct = { name, price, description, image, categoryId };
            await a.patch(`/products/${id}`, updatedProduct);
            alert("Товар обновлён!");
            navigate(PRODUCTS);
        } catch (err) {
            console.error("Ошибка при обновлении товара:", err);
        }
    }

    return (
 
            <div className="content">
                <section className="block">
                    <div className="container">
                        <span className="btn bg-danger" onClick={() => navigate(-1)}>Назад</span>
                        <h1 className="title">Изменить товар</h1>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label htmlFor="name">Название</label>
                                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                            </div>
                            <div className="form-control">
                                <label htmlFor="price">Цена</label>
                                <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                            </div>
                            <div className="form-control">
                                <label htmlFor="description">Описание</label>
                                <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                            </div>
                            <div className="form-control">
                                <label htmlFor="image">Фото (URL)</label>
                                <input id="image" type="url" value={image} onChange={(e) => setImage(e.target.value)} required />
                            </div>
                            <div className="form-control">
                                <label htmlFor="category">Категория</label>
                                <select id="category" value={categoryId} onChange={(e) => setCategoryId(e.target.value)} required>
                                    <option value="">Выберите категорию</option>
                                    {categories.map(cat => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                            <button className="btn bg-warning" type="submit">Сохранить</button>
                        </form>
                    </div>
                </section>
            </div>
    );
}

export default UpdateProduct;
