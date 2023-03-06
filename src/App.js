import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/header.jsx";
import FormComponent from "./components/Form/form.jsx";
import LocationComponent from "./components/Locations/locations";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LocationComponent />}></Route>
          <Route path="/contact-us" element={<LocationComponent />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <LocationComponent />
      <FormComponent /> */}
    </div>
  );
}

export default App;
