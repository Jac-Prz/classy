import Dashboard from "./pages/Dashboard";
import LogIn from "./pages/LogIn";
import Detail from "./pages/Detail";
import NewClass from "./pages/NewClass";
import Layout from "./components/Layout";
import RequireAuth from "./components/RequireAuth";
import { Routes, Route, Navigate } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

function App() {
  const { user } = useContext(UserContext);

  return (
    <Routes >
      <Route path="/" element={<Layout />} >

        {/* public */}
        <Route path="/login" element={<LogIn type="signin" />} />
        <Route path="/signup" element={<LogIn type="signup" />} />
        <Route path="/pagedown" element={<LogIn type="404" />} />

        {/* protected */}
        <Route element={<RequireAuth />} >
          <Route path="/" element={<Dashboard />} />
          <Route path="/detail/:classId" element={<Detail edit={false} />} />
          <Route path="/newclass" element={<NewClass />} />
          <Route path="/editclass/:classId" element={<Detail edit={true} />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<LogIn />} />
      </Route>


    </Routes>
  );
}

export default App;
