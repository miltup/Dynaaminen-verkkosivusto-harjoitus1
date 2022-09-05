import { useState } from 'react';
import './App.css';

function App() {
  const [pituus, setPituus] = useState(0)
  const [paino, setPaino] = useState(0)
  const [bmi, setBmi] = useState(0)

  const laske = (e) => {
    e.preventDefault()
    const tulos = paino / (pituus * pituus)
    setBmi(tulos)
  }

  return (
    <div className="tausta">
      <h3>Painoindeksilaskuri</h3>
      <form onSubmit={laske}>
        <div>
          <label>Pituus</label>
          <input type="number" value={pituus} onChange={e => setPituus(e.target.value)}></input>
        </div>
        <div>
          <label>Paino</label>
          <input type="number" value={paino} onChange={e => setPaino(e.target.value)}></input>
        </div>
        <div>
          <label>Painoindeksi</label>
          <output>{bmi.toFixed(1)}</output>
        </div>
        <button>Laske</button>
      </form>
    </div>
  );
}

export default App;
