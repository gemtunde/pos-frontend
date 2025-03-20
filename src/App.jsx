import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Auth, Orders, Tables } from "./pages";
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
        </Routes>
        <BottomNav />
      </BrowserRouter>
    </>
  );
}

export default App;
