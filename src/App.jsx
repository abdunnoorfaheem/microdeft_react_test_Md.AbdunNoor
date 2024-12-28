import "./App.css";
import Registration from "./components/Registration";
import AllCards from "./pages/AllCards";
import Form from "./pages/Form";
import Home from "./pages/Home";
import LoginForm from "./pages/LoginForm";
import RegistrationPage from "./pages/RegistrationPage";
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from "react-router"

function App() {

  let myRoutes=createBrowserRouter(createRoutesFromElements(
    <>
      <Route path="/" element={<Home/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<LoginForm/>}/>
      <Route path="/form" element={<Form/>}/>
      <Route path="/cards" element={<AllCards/>}/>
    </>
  ))
  return (
    <>
      <RouterProvider router={myRoutes}/>
    </>
  );
}

export default App;
