import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <p>Test</p>
      <Outlet />
    </>
  );
}

export default App;
