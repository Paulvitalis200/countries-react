import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import useCountries from "./hooks/useCountries";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
