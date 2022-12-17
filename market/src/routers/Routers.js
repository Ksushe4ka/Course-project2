import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Bookshelf from "../pages/Bookshelf";
import Cart from "../pages/Cart";
import BookDetails from "../pages/BookDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Checkout from "./../pages/Checkout";
import ProtectedRoute from "./ProtectedRoute";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/" />} />
      <Route path="home" element={<Home />} />
      <Route path="bookshelf" element={<Bookshelf />} />
      <Route path="bookshelf/:id" element={<BookDetails />} />
      <Route path="cart" element={<Cart />} />
      <Route
        path="checkout"
        element={
          <ProtectedRoute>
            <Checkout />
          </ProtectedRoute>
        }
      />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  );
};

export default Routers;
