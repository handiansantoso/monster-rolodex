import './App.css';
import { useEffect, useState } from 'react';
import { CardList } from './components/card-list.component';
import { SearchBox } from './components/search.compenent';
function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchText, setSearchText] = useState('');
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => setMonsters(users));
  }, []);
  const filtered = monsters.filter(e => e.name.toLowerCase().includes(searchText));
  return (
    <div className="App" >
      <h1> Monsters Rolodex </h1>
      <SearchBox placeholder="search monster" setSearchText={setSearchText}></SearchBox>
      <CardList monsters={filtered} searchText={searchText}>
      </CardList>
    </div >
  )
}

export default App;
