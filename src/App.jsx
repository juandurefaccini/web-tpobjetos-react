import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./components/ProtectedRoute";

const App = () => {
  return (
    // Estilado que ya venia en el template
    <div className=" font-sans h-screen flex flex-col">
      <AuthProvider>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="*" element={<Navigate to="/login" replace />} /> */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;
