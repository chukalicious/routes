import React from "react";
import MainLayout from "./layouts/MainLayout";
import Home from "./components/Home"
import About from "./pages/About";
import RegisterContainer from "./components/register";
import LoginContainer from "./components/login";
import DashboardWrapper from "./components/dashboard/index"
import ProfileWrapper from "./components/profile";
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="register" element={<RegisterContainer />} />
        <Route path="login" element={<LoginContainer />} />
        <Route path="/dashboard" element={<DashboardWrapper />} />
        <Route path="profile/:id" element={<ProfileWrapper />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>)
  );
  return (
    <>

      <RouterProvider router={router} />

    </>
  );
};

export default App;
