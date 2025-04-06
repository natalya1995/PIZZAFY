import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { a } from "../../services/axiosInstance";
import { PRODUCTS } from "../../utils/consts";

function CreateProduct() {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [categoryId, setCategoryId] = useState("");
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            try {
                const res = await a.get("/categories");
                setCategories(res.data);
            } catch (err) {
                console.error("Ошибка при загрузке категорий:", err);
            }
        }
        fetchCategories();
    }, []);

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const newProduct = { name, price, description, image, categoryId };
            await a.post("/products", newProduct);
            alert("Товар добавлен!");
            navigate(PRODUCTS);
        } catch (err) {
            console.error("Ошибка при добавлении товара:", err);
        }
    }

    return (
    
                <section className="block">
                    <div className="container">
                        <span className="btn bg-danger" onClick={() => navigate(-1)}>Назад</span>
                        <h1 className="title">Создать товар</h1>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label htmlFor="name">Название</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="price">Цена</label>
                                <input
                                    type="number"
                                    id="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="description">Описание</label>
                                <textarea
                                    id="description"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="image">Фото (URL)</label>
                                <input
                                    type="url"
                                    id="image"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label htmlFor="category">Категория</label>
                                <select
                                    id="category"
                                    value={categoryId}
                                    onChange={(e) => setCategoryId(e.target.value)}
                                    required
                                >
                                    <option value="">Выберите категорию</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                            <button className="btn bg-primary" type="submit">Создать</button>
                        </form>
                    </div>
                </section>
           
    );
}

export default CreateProduct;
