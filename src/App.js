import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./views/Login/Login";

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">Cithara App</header>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
