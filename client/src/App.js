import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./views/Authentication/Login";
import { Registration } from "./views/Authentication/Registration";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
