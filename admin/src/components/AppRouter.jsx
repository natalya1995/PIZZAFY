import {Routes, Route} from "react-router-dom";
import { routes } from "../utils/routes";
function AppRouter() {
    return (
        <div className="content">
            <Routes>
                {routes.map((route, index) => (
                    <Route key={index} path={route.path} element={<route.element />} />
                ))}  
            </Routes>
        </div>
    );
}

export default AppRouter;
