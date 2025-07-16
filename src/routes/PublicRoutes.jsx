import { Outlet } from "react-router-dom";
import UserLayout from "../components/layouts/UserLayout";

const PublicRoutes = () => {
    return (
        <>
            <UserLayout>
                <Outlet />
            </UserLayout>
        </>
    );
};

export default PublicRoutes;
