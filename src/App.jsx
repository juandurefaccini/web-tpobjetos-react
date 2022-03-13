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

const App = () => {
  return (
    // Estilado que ya venia en el template
    <AuthProvider>
      <ServicesProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </ServicesProvider>
    </AuthProvider>
  );
};

export default App;
