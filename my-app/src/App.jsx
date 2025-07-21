// import { Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
// import Home from "./pages/Home";
// import Explore from "./pages/Explore";
// import Login from "./pages/Login";
// import Register from './pages/Register';
// import PropertyRental from "./pages/PropertyRental";
// import CreateProperty from "./pages/CreateProperty";

// import ProtectedRoute from "./utils/ProtectedRoute";
// import PublicRoute from "./utils/PublicRoute";

// export default function App() {
//   return (
//     <Layout>
//       <Routes>
//         {/* 🟢 Halaman bebas */}
//         <Route path="/" element={<Home />} />

//         {/* 🔓 PublicRoute hanya untuk yang belum login */}
//         <Route path="/login" element={
//           <PublicRoute>
//             <Login />
//           </PublicRoute>
//         } />
//         <Route path="/register" element={
//           <PublicRoute>
//             <Register />
//           </PublicRoute>
//         } />

//         {/* 🔒 ProtectedRoute hanya untuk user yang sudah login */}
//         <Route path="/explore" element={
//           <ProtectedRoute>
//             <Explore />
//           </ProtectedRoute>
//         } />
//         <Route path="/create" element={
//           <ProtectedRoute>
//             <CreateProperty />
//           </ProtectedRoute>
//         } />
//         <Route path="/rental/:id" element={
//           <ProtectedRoute>
//             <PropertyRental />
//           </ProtectedRoute>
//         } />
//       </Routes>
//     </Layout>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Login from "./pages/Login";
import Register from './pages/Register';
import PropertyRental from "./pages/PropertyRental";
import CreateProperty from "./pages/CreateProperty";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/create" element={<CreateProperty />} />
        <Route path="/rental/:id" element={<PropertyRental />} />
      </Routes>
    </Layout>
  );
}
