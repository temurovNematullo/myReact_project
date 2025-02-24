import Components from './components/Compapent/Components';
import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';



function App(props) {
  
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Components   
  MainPage={props.stateData.MainPage}  
  dispatch={props.dispatch}
  store = {props.store}
/>
    </div>
    </BrowserRouter>
  );
}

export default App;
