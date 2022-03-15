import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import DashBoard from "./components/Admin/DashBoard";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ServicesProvider } from "./context/servicesContext";
import Perfil from "./components/Perfil";
import Catedras from "./components/Admin/Catedra/Catedras";
import Index from "./components/Admin/Catedra/Index";
import Edit from "./components/Admin/Catedra/Edit";
import Add from "./components/Admin/Catedra/Add";

const App = () => {
  return (
    // Estilado que ya venia en el template
    <AuthProvider>
      <ServicesProvider>
        <Routes>
          <Route path="register" element={<Register />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<Navigate to="login" replace />} />
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="dashboard/*"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          >
            <Route path="catedras" element={<Catedras />}>
              <Route path=":id" element={<Edit />} />
              <Route path="new" element={<Add />} />
              <Route path="*" element={<Index />} />
            </Route>
          </Route>
          {/* TODO : REFACTORIZAR EN NESTED ROUTES */}
        </Routes>
      </ServicesProvider>
    </AuthProvider>
  );
};

export default App;
