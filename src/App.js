import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import Detail from "./pages/Detail";
import NewClass from "./pages/NewClass";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(UserContext);

  return (
    <Routes >
      <Route path="/" element={<LogIn type="signin" />} />
      <Route path="/home" element={<Dashboard />} />
      <Route path="/signup" element={<LogIn type="signup" />} />
      <Route path="/pagedown" element={<LogIn type="404" />} />
      <Route path="/error" element={<LogIn />} />
      <Route path="/detail/:classId" element={<Detail />} />
      <Route path="/newclass" element={<NewClass />} />
      {/* <Route path="/editclass/:classId" element={<EditClass />} /> */}
    </Routes>
  );
}

export default App;
