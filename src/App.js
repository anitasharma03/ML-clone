import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.jsx';
import  FormComponent  from './components/Form/form.jsx';
import LocationComponent from './components/Locations/locations';


function App() {
  return (
    <div className="App">
      <Header/>
      <LocationComponent/>
      <FormComponent /> 
    </div>
  );
}

export default App;
