import{
DASHBOARD,
CATEGORIES,
CATEGORY_CREATE,
CATEGORY_DELETE,
CATEGORY_UPDATE,
PRODUCTS,
PRODUCT_CREATE,
PRODUCT_DELETE,
PRODUCT_UPDATE,


}from "./consts";

import CreateCategory from "../pages/Categories/CreateCategory"; 
import Dashboard from "../pages/Dashboard";
import Categories from "../pages/Categories/Categories";
import DeleteCategory from "../pages/Categories/DeleteCategory";
import UpdateCategory from "../pages/Categories/UpdateCategory";
import Products from "../pages/Products/Products";
import CreateProduct from "../pages/Products/CreateProduct";
import DeleteProduct from "../pages/Products/DeleteProduct";
import UpdateProduct from "../pages/Products/UpdateProduct";


export const routes = [
  {
    path: DASHBOARD,
    element: Dashboard,
  },
  {
    path: CATEGORIES,
    element: Categories,
  },
  {
    path: CATEGORY_CREATE,
    element: CreateCategory,
  },
  {
    path: CATEGORY_DELETE,
    element: DeleteCategory,
  },
  {
    path: CATEGORY_UPDATE,
    element: UpdateCategory,
  },
  {
    path: PRODUCTS,
    element: Products,
  },
  {
    path: PRODUCT_CREATE,
    element: CreateProduct,
  },
  {
    path: PRODUCT_DELETE,
    element: DeleteProduct,
  },
  {
    path:PRODUCT_UPDATE,
    element:UpdateProduct,
  },

];