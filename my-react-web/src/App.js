import logo from './logo.svg';
import './App.css';
import Home from './sections/home';
import Cv from './sections/cv';
import Tools from './sections/tools';
import About from './sections/about';
function App() {
  return (
    <div className="Kim_App">
      <Home />
      <hr />
      <Cv />
      <hr />
      <Tools />
      <hr />
      <About />
    </div>
  );
}

export default App;
