import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Login } from "./views/Login/Login";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>



    <div className="App">
      <header className="App-header">
        Cithara App
      </header>
    </div>
    </>
  );
}

export default App;
