import Components from "./components/Compapent/Components";
import "./App.css";
import Header from "./components/Header/Header";
import { BrowserRouter } from "react-router-dom";

function App() {
 
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Components />
      </div>
    </BrowserRouter>
  );
}

export default App;

