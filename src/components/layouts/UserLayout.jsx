import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Spinner } from "../ui/Spinner";
import Header from "../templates/Header";

const UserLayout = () => {
    return (
        <div className="flex flex-col flex-auto relative">
            <Header />
            <Suspense fallback={<Spinner />}>
                <main className="flex-1">
                    <Outlet />
                </main>
            </Suspense>
        </div>
    );
};

export default UserLayout;
