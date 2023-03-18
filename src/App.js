import './App.css';
import IdeasBy from './components/IdeasBy';
import Navbar from './components/Navbar';
import The_end_part from './components/The_end_part';

function App() {
  return (
    <div className="App">
      <IdeasBy />
      <Navbar />
      <The_end_part />
      <IdeasBy />
      <a href="/GlobalNetwork">Global Network</a>
    </div>
  );
}

export default App;
