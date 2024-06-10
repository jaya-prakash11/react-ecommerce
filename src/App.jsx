import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import "./App.css";
import Home from "./pages/Home/Home";
import Cartpage from "./pages/cart/Cartpage";
import ProductPage from "./pages/Product/ProductPage";
import WishListPage from "./pages/Wishlist/WishListPage";
import ProfilePage from "./pages/Profile/ProfilePage";
import ProductDetailPage from "./pages/productDetail/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
const Layout = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cartpage />,
      },
      {
        path: "/ProductListPage/:categoryId",
        element: <ProductPage />,
      },
      {
        path: "/Product/:id",
        element: <ProductDetailPage />,
      },
      {
        path: "/wishlist",
        element: <WishListPage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="flex  xs:w-[414px] sm:w-screen  h-auto flex-col relative">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
