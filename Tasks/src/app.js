import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
import Profile from "./components/ProfileComponent";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense>
            <About name={"Albert"} />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
