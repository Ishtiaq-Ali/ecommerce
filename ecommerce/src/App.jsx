import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BillingDetail from "./components/bllingdetail/BillingDetail";
import Cart from "./components/cart/Cart";
import CreateAccount from './components/createaccount/CreateAccount'
import Login from './components/login/Login'
import Footer from "./components/footer/Footer";
import ManageAccount from "./components/manageaccount/ManageAccount";
import Navbar from "./components/Navbar";
import WishList from "./components/wishlist/WishList";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Page404 from "./components/404page/Page404";
import Pdetail from "./components/pdetail/Pdetail";
import Home from "./components/home/Home";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
   
   <Route path="/" element={<Home />} />
        <Route path="/create-account" element={<CreateAccount  />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/billing-detail" element={<BillingDetail />} />
        <Route path="/manage-account" element={<ManageAccount />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product-detail" element={<Pdetail />} />
        <Route path="/error" element={<Page404 />} />
      </Routes>
      <Footer />
    </Router>
  );
}