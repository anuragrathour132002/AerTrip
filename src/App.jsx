import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PublicRoutes from "./routes/PublicRoutes";
import { publicRoutes } from "./route-config/PublicRoutes";

const App = () => {

  return (
    <>
      <Routes>
        <Route element={<PublicRoutes />}>
          {publicRoutes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              Component={route.component}
            />
          ))}
        </Route>
      </Routes>
      <ToastContainer
        autoClose={3000}
        toastStyle={{ color: "#0089C6" }}
        position="bottom-center"
        hideProgressBar
      />
    </>
  );
};

export default App;
