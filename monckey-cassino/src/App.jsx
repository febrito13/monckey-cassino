// src/App.jsx

import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Monckey´s Luck</h1>
      </header>
      <main>
        <section>
          <h2>Fortune Tiger</h2>
          {/* <ul>
            <li>Jogo 1</li>
            <li>Jogo 2</li>
            <li>Jogo 3</li>
          </ul> */}
        </section>
        <section>
          <h2>Sobre Nós</h2>
          <p>Descrição do cassino e seus serviços.</p>
        </section>
      </main>
      <footer>
        <p>&copy; Cassino Club</p>
      </footer>
    </div>
  );
}

export default App;