import React, { useState } from 'react';
import Header from './Header'

// Componente: Bloco isolado de HTML, CSS e JS, o qual nao interfere no restante da aplicação
// Propriedade: Informações que o componente pai passa para o componente filho
// Estado: Informações mantidas pelo componente (lembrar: imutabilidade)

function App() {
  const [counter, setCounter] = useState(0);

  function incCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
      <Header title="Isso aí" />
      <h1>Contador: {counter}</h1>
      <button onClick={incCounter} >Incrementar</button>
    </>
  );
}

export default App;
