import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;