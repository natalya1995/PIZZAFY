import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { a } from "../../services/axiosInstance";
import { CATEGORIES } from "../../utils/consts";

function CreateCategory() {

    const [categoryName, setCategoryName] = useState('');
    const navigate = useNavigate();

    function handleInputChange(event) {
        setCategoryName(event.target.value);
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            const newCategory = {
                'name': categoryName
            };
            await a.post('/categories', newCategory);
            alert("Категория добавлена!");
            navigate(CATEGORIES);
        } catch(error) {
            console.log("Error: ", error);
        }
    }


    return (
        <section class="block">
            <div class="container">
                <Link to={CATEGORIES} class="btn bg-danger">Назад</Link>
                <h1 class="title">Создать категорию</h1>
                <form class="form" onSubmit={handleSubmit}>
                    <div class="form-control">
                        <label form="name">Название категории</label>
                        <input 
                            value={categoryName}
                            onChange={handleInputChange}
                            id="name" 
                            type="text" 
                            placeholder="Введите категорию" 
                            required 
                        />
                    </div>
                    <button class="btn bg-primary" type="submit">Создать</button>
                </form>
            </div>
        </section>
    );
}

export default CreateCategory;
