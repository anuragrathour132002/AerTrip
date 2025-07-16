import { lazy } from "react";

export const publicRoutes = [
    {
        title: "Flights",
        path: "/",
        component: lazy(() => import("../components/shared/Flights")),
    },
];
