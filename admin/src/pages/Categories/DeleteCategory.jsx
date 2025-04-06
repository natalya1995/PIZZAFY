import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { a } from "../../services/axiosInstance";
import { CATEGORIES } from "../../utils/consts";

function DeleteCategory() {

    const { id } = useParams();
    const navigate = useNavigate();
    const [ categoryName, setCategoryName ] = useState('');
    useEffect(() => {
        async function fetchCategory() {
            try {
                const res = await a.get(`/categories/${id}`);
                setCategoryName(res.data.name);
            } catch (error) {
                console.log("Error: ", error);
            }
        }
        fetchCategory();
    }, [id]);

    async function handleDelete(event) {
        event.preventDefault();
        try {
            await a.delete(`/categories/${id}`);
            alert("Категория удалена");
            navigate(CATEGORIES);
        } catch (error) {
            console.log("Error: ", error);
        }
    }

    return (
        <section class="block">
            <div class="container">
                <h1 class="title">Вы действительно хотите удалить категорию "{categoryName}"?</h1>
                <p class="mb-5">
                    Это действие приведет к потере всех данных, связанных с этими категориями. Пожалуйста, подтвердите свое решение.
                </p>
                <form class="actions-sm" onSubmit={handleDelete}>
                    <button type="submit" class="btn bg-danger">
                        Да
                    </button>
                    <Link to={CATEGORIES} class="btn bg-primary">
                        Нет
                    </Link>
                </form>
            </div>
        </section>
    );
}

export default DeleteCategory;
