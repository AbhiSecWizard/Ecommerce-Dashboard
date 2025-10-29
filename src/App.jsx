import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/Layout/MainLayout";
// import { DashboardDrop } from "./components/MainContents/DashboardDrop/index.jsx"; // your main page component

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
    },
  ]);

  return <RouterProvider router={router} />;
};
