import './App.css';
import hideouts from './hideouts.json';

function App() {
  return (
    <div>
      {hideouts.map((ho) => (
        <a href={ho.link}>
          <img src={ho.image} alt="new" />
        </a>
      ))}
    </div>
  );
}

export default App;
