import { Route, Routes, BrowserRouter } from "react-router-dom";

import LoginPage from "./page/Login/LoginPage";
import Home from "./page/Home/Home";
import "./App.scss";
import { AuthProvider } from "./utils/auth";
import RequireAuth from "./components/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
