import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import root from "./router/root";

function App() {
  return (
    <h1 className="text-3xl font-extrabold m-2 p-3 bg-green-500">
      Hello 월드!
      <RouterProvider router={root} />
    </h1>
  );
}

export default App;
