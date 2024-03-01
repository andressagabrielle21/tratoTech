import { BrowserRouter, Routes, Route } from "react-router-dom"
import InitialPage from './components/InitialPage';
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Cart from "./pages/Cart";
import Advertise from "./pages/Advertise";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />}> 
          <Route index element={<Home />}/>
          <Route path="/category/:nomeCategoria" element={<Categories />}/>
          <Route path="/cart/" element={<Cart />}/>
          <Route path="/advertise/" element={<Advertise />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router