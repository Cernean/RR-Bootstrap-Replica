import './App.css';
import TopBar from'./components/TopBar';
import StoreListings from './components/StoreListings';
import Backgound from './components/Background'

function App() {
  return (
    <div className="App">
      <h1>Instacart Copy</h1>
      <TopBar />
      < StoreListings />
      <Backgound />
    </div>
  );
}

export default App;