import { Link } from "react-router-dom";
import homeIcon from "../assets/images/menu/home.svg";
import categoriesIcon from "../assets/images/menu/categories.svg";
import productsIcon from "../assets/images/menu/products.svg";
import ordersIcon from "../assets/images/menu/orders.svg";
import { CATEGORIES, DASHBOARD } from "../utils/consts";

function Dashboard() {
    return (
        <section className="block">
            <div className="container">
                <h1 className="title">Админ панель</h1>
                <div className="dashboard-list">
                    <Link to={DASHBOARD} className="dashboard-item bg-primary">
                        <img src={homeIcon} alt="Главная" />
                        <h3 className="dashboard-item__title">Главная</h3>
                    </Link>
                    <Link to={CATEGORIES} className="dashboard-item bg-warning">
                        <img src={categoriesIcon} alt="Категории" />
                        <h3 className="dashboard-item__title">Категории</h3>
                    </Link>
                    <Link to="/products" className="dashboard-item bg-danger">
                        <img src={productsIcon} alt="Товары" />
                        <h3 className="dashboard-item__title">Товары</h3>
                    </Link>
                    <Link to="/orders" className="dashboard-item bg-success">
                        <img src={ordersIcon} alt="Заказы" />
                        <h3 className="dashboard-item__title">Заказы</h3>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Dashboard;
