import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu, NotFound } from "./pages";
import Header from "./components/shared/Header";
import BottomNav from "./components/shared/BottomNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/tables" element={<Tables />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
