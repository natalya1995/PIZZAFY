import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { a } from "../../services/axiosInstance";
import { CATEGORIES } from "../../utils/consts";
import Sidebar from "../../components/Sidebar";

function UpdateCategory() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        async function fetchCategory() {
            try {
                const res = await a.get(`/categories/${id}`);
                setCategoryName(res.data.name);
            } catch (error) {
                console.error("Ошибка при загрузке категории:", error);
            }
        }
        fetchCategory();
    }, [id]);

    async function handleUpdate(event) {
        event.preventDefault();
        try {
            await a.patch(`/categories/${id}`, { name: categoryName });
            alert("Категория обновлена!");
            navigate(CATEGORIES);
        } catch (error) {
            console.error("Ошибка при обновлении категории:", error);
        }
    }

    return (
    
                <section className="block">
                    <div className="container">
                        <span className="btn bg-danger" onClick={() => navigate(-1)}>Назад</span>
                        <h1 className="title">Изменить категорию</h1>
                        <form className="form" onSubmit={handleUpdate}>
                            <div className="form-control">
                                <label htmlFor="name">Название категории</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Введите категорию"
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                    required
                                />
                            </div>
                            <button className="btn bg-warning" type="submit">Изменить</button>
                        </form>
                    </div>
                </section>
    );
}

export default UpdateCategory;
