import { useEffect,useState } from "react";
import CategoryItem from "./CategoryItem";
import { a } from "../../services/axiosInstance";

function CategoryList(){

    const [categories, setCategories] = useState([]);

    useEffect(()=>{
        async function fetchCategories(){
            try{
                const res=await a.get('/categories');
                setCategories(res.data);
            }
            catch(error){
                console.log("Error: ",error);
            }
        }
        fetchCategories();
    },[]);

    return(
        <table className="table">
        <thead>
            <th>№</th>
            <th>Название</th>
            <th>Действие</th>
        </thead>
        <tbody>
            {categories.map((category)=>(

                <CategoryItem key={category.id} category={category}/>
            ))}
        
        </tbody>
    </table>
    );
}
export default CategoryList;