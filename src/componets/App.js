import StatsBar from './statsBar';
import CharacterIcon from './characterIcon';
import ItemsBox from './itemsBox';
import MainBar from './abiltiesHealthBar';
function App() {
  return (
    <div className='container'>
    <div className="App d-flex justify-content-between">
     <StatsBar />
     <CharacterIcon />
     <MainBar />
     <ItemsBox />
    </div>
    </div>
  );
}

export default App;
