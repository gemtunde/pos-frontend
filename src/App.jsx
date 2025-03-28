import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home, Auth, Orders, Tables, Menu, NotFound } from "./pages";
import Header from "./components/shared/Header";
import BottomNav from "./components/shared/BottomNav";

function Layout() {
  const location = useLocation();
  const hideBottomNav = location.pathname === "/auth"; // Hide BottomNav for Auth page

  return (
    <>
      {!hideBottomNav && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {!hideBottomNav && <BottomNav />} {/* Conditionally render BottomNav */}
    </>
  );
}

// function App() {
//   const location = useLocation();
//   const hideBottomNav = location.pathname === "/auth";
//   return (
//     <>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/auth" element={<Auth />} />
//           <Route path="/orders" element={<Orders />} />
//           <Route path="/tables" element={<Tables />} />
//           <Route path="/menu" element={<Menu />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//         {!hideBottomNav && <BottomNav />}
//       </BrowserRouter>
//     </>
//   );
// }
function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
