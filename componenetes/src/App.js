
import './App.css';
import Componentes from './Componentes';
import Botao from './Botao';
function App() {
  return (
    <div className='App'>
      <Componentes></Componentes>
      <Botao text='compre'></Botao>
      <Botao text='nao compre'></Botao>
      <Botao></Botao>
      <Botao></Botao>
    </div>
  );
}

export default App;
