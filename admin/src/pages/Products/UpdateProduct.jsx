function UpdateProduct(){
    return(

<section class="block">
                <div class="container">
                    <span class="btn bg-danger">Назад</span>
                    <h1 class="title">Изменить товар</h1>
                    <form class="form">
                        <div class="form-control">
                            <label for="name">Название товара</label>
                            <input 
                                value=""
                                id="name" 
                                type="text" 
                                placeholder="Введите товара" 
                                required 
                            />
                        </div>
                        <div class="form-control">
                            <label for="price">Цена</label>
                            <input 
                                value=""
                                id="price" 
                                type="number" 
                                placeholder="Введите цену" 
                                required 
                            />
                        </div>
                        <div class="form-control">
                            <label for="description">Описание</label>
                            <textarea 
                                value=""
                                id="description" 
                                placeholder="Введите описание" 
                                required 
                            ></textarea>
                        </div>
                        <div class="form-control">
                            <label for="image">Фото</label>
                            <input 
                                value=""
                                id="image" 
                                type="url" 
                                placeholder="Вставьте URL фото" 
                                required 
                            />
                        </div>
                        <div class="form-control">
                            <label for="image">Укажите категорию</label>
                            <select name="category" id="category">
                                <option value="category">category</option>
                            </select>
                        </div>

                        <button class="btn bg-warning" type="submit">Изменить</button>
                    </form>
                </div>
            </section>
    );
}
export default UpdateProduct;