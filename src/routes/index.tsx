import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "../components/baseLayout";
import Login from "../pages/login/login";
import Register from "../pages/register/register";
import { PrivateRoute } from "../components/auth/PrivateRoute";

export default function Router() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<PrivateRoute redirectTo="/"><BaseLayout /></PrivateRoute>}>
          {/* <Route path="/home/dashboard" element={<Dashboard />} />*/}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
