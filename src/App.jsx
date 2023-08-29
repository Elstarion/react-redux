import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import store from "./store/store";
import "./App.css";

function App() {
  console.log("render");
  return (
    <Provider store={store}>
      <Navbar />
      <Outlet />
    </Provider>
  );
}

export default App;
