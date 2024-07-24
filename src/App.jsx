import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default App;
