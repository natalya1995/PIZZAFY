import { Link } from "react-router-dom";
import CategoryList from "../../components/Categories/CategoryList";
import { CATEGORY_CREATE } from "../../utils/consts";

function Categories() {
  
    return (
        <section className="block">
            <div className="container">
                <div className="block-header">
                    <h1 className="title">Категории</h1>
                    <Link to={CATEGORY_CREATE} className="btn bg-primary">
                        Создать
                    </Link>
                </div>
                <CategoryList />
            </div>
        </section>
    );
}

export default Categories;
