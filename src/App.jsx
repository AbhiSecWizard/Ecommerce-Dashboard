import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/Layout/MainLayout";
import { Dashboard } from "./pages/Dashboard";
import { Product } from "./pages/Product";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout/>}>
       <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="product" element={<Product />} />
      </Route>
    </Routes>
  );
};
