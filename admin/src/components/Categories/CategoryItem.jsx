import { Link } from "react-router-dom";
import { CATEGORY_DELETE, CATEGORY_UPDATE } from "../../utils/consts";

function CategoryItem({category}){
    return (
        <tr>
        <td>{category.id}</td>
        <td>{category.name}</td>
        <td colspan="3" className="actions-category" style={{border:"none"}}>
           <Link to={CATEGORY_UPDATE.substring(0, CATEGORY_UPDATE.length-3) + category.id}className="btn bg-warning">Изменить</Link>
            <Link to={CATEGORY_DELETE.substring(0, CATEGORY_DELETE.length-3) + category.id} class="btn bg-danger">Удалить</Link>
        </td>
    </tr>
    );
}
export default CategoryItem;