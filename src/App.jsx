import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayout } from "./components/Layout/MainLayout";
// import { DashboardDrop } from "./components/MainContents/DashboardDrop/index.jsx";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
      {index: true},
      ],
    },
  ]);

  return <>

  {/* <MainLayout /> */}
  <RouterProvider router={router} />;
  </>
};
