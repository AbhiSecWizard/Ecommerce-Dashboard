import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { MainLayout } from "./components/Layout/MainLayout";


export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <>
  {/* <MainLayout /> */}
  <RouterProvider router={router} />;
  </>
};
