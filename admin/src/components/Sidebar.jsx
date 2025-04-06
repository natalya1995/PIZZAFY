import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { CATEGORIES, DASHBOARD } from '../utils/consts';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="Logo" />
                <span className="logo-text">Pizzafy.</span>
            </div>
            <nav className="sidebar-nav">
                <Link to={DASHBOARD} className="sidebar-nav__link">Главная</Link>
                <Link to={CATEGORIES} className="sidebar-nav__link">Категории</Link>
                <Link to="/products" className="sidebar-nav__link">Товары</Link>
                <Link to="/orders" className="sidebar-nav__link">Заказы</Link>
            </nav>
            <p className="sm-text">&copy;2025, Pizzafy. Все права защищены</p>
        </div>
    );
}

export default Sidebar;
