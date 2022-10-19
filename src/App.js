import { Route, Routes } from "react-router-dom";
import ForgotPassoword from "./pages/ForgotPassoword";
import Home from "./pages/Home"
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassoword />} />
      </Routes>
    </>
  );
}

export default App;
