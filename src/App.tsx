import "./App.css";
import { SpeakersGallery } from "./components/SpeakersGallery/SpeakersGallery";
import { MyFirstProvider } from "./state/MyFirstContext";
import { BrowserRouter } from "react-router-dom";
import { arrForNav } from "./components/NavBar/NavBarInfo";
import NavBar from "./components/NavBar/NavBar";
import { CompC } from "./components/DemoTheContext/CompC/CompC";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyFirstProvider>
          <NavBar theArr={arrForNav} />
          <hr />
          <CompC />
          <hr />
          <SpeakersGallery />
        </MyFirstProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
