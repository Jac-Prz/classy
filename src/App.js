import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import PageDown from "./pages/PageDown";
import Detail from "./pages/Detail";
import NewClass from "./pages/NewClass";
import EditClass from "./pages/EditClass";
import {Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes >
    <Route path="/" element={<Dashboard />} />
    <Route path="/login" element={<LogIn type="signin"/>} />
    <Route path="/signup" element={<LogIn type="signup"/>} />
    <Route path="/pagedown" element={<PageDown />} />
    <Route path="/detail" element={<Detail />} />
    <Route path="/newclass" element={<NewClass />} />
    <Route path="/editclass" element={<EditClass />} />
    </Routes>
  );
}

export default App;
