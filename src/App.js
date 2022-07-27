import './App.css';
import NavBar from './components/NavBar';
import ListProducts from './components/ListProducts/ListProducts';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <ListProducts>
        <p className='titulo'>Nuestros productos</p>
      </ListProducts>
    </div>
  );
}
export default App;
