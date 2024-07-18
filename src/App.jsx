import { useContext, useEffect, useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import HeaderComponent from "./components/Header/HeaderComponent";
import FooterComponent from "./components/Footer/FooterComponent";
import "./App.css";
import Home from "./pages/Home/Home";
import Cartpage from "./pages/cart/Cartpage";
import ProductPage from "./pages/Product/ProductPage";
import WishListPage from "./pages/Wishlist/WishListPage";
import LoginPage from "./pages/Login/login";
import ProductDetailPage from "./pages/productDetail/ProductDetailPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import Sidebar from "./components/Sidebar/sidebar";
import { toogleContext } from "./context/ToogleProvider";
import {
  createBrowserRouter,
  NavLink,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { authContext } from "./context/authContext";
import ProfilePage from "./pages/Profile/profilePage";
import Address from "./pages/Profile/address";
import UserInfo from "./pages/Profile/userInfo";

const Layout = () => {
  const cart = useSelector((state) => state.eShopeReducer?.user.cart.cartItems);
  const { toogle, setToogle } = useContext(toogleContext);

  useEffect(() => {
    if (cart.length !== 0) {
      setToogle(true);
    }
  }, [cart.length]);

  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
      <Sidebar {...{ isOpen: toogle }} />
    </>
  );
};

const RouteAuthorization = () => {
  const { auth } = useContext(authContext);
  const location = useLocation();
  const navigate = useNavigate();
  const navigatetoPage = () => {
    navigate("/login");
  };

  let isAllowed = !!auth.accesstoken;

  return (
    <>
      {isAllowed ? <Outlet /> : <p onClick={() => navigatetoPage()}>sadasd</p>}{" "}
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
        path: "/ProductListPage/:category",
        element: <ProductPage />,
      },
      {
        path: "/Product/:productId",
        element: <ProductDetailPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },

      //ProtectedRuotes

      {
        element: <RouteAuthorization />,
        children: [
          {
            path: "/checkout",
            element: <CheckoutPage />,
          },
          {
            path: "/wishlist",
            element: <WishListPage />,
          },
          {
            path: "/cart",
            element: <Cartpage />,
          },
          {
            path: "/profile",
            element: <ProfilePage />,
            children: [
              { path: "/profile/userInfo", element: <UserInfo /> },
              { path: "/profile/address", element: <Address /> },
            ],
          },
        ],
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
