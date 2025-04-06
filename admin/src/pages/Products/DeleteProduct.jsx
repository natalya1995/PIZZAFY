function DeleteProduct(){
    return(
        <section class="block">
        <div class="container">
            <h1 class="title">Вы действительно хотите удалить товар "name"?</h1>
            <p class="mb-5">
                Это действие приведет к потере всех данных, связанных с этими товарами. Пожалуйста, подтвердите свое решение.
            </p>
            <form class="actions-sm">
                <button type="submit" class="btn bg-danger">
                    Да
                </button>
                <span class="btn bg-primary">
                    Нет
                </span>
            </form>
        </div>
    </section>
    );
}
export default DeleteProduct;