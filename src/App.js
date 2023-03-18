import './App.css';
import IdeasBy from './components/IdeasBy';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <IdeasBy />
      <a href="/GlobalNetwork">Global Network</a>
    </div>
  );
}

export default App;
