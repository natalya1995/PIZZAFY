import { Link } from "react-router-dom";
import { PRODUCT_UPDATE, PRODUCT_DELETE, PRODUCT_READ } from "../../utils/consts";

function ProductItem({ product, index }) {
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.name}</td>
            <td colSpan="3" className="actions-products" style={{ border: "none" }}>
                <Link
                    to={PRODUCT_UPDATE.replace(":id", product.id)}
                    className="btn bg-warning"
                >
                    Изменить
                </Link>
                <Link
                    to={PRODUCT_DELETE.replace(":id", product.id)}
                    className="btn bg-danger"
                >
                    Удалить
                </Link>
                <Link
                    to={PRODUCT_READ.replace(":id", product.id)}
                    className="btn bg-info"
                >
                    Подробнее...
                </Link>
            </td>
        </tr>
    );
}

export default ProductItem;
