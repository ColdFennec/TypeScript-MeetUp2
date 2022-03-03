import Grid from './components/Grid/Grid';
import Header from './components/Header';
import './App.css';
import { useState } from "react";

function App() {
  const [searchString, setSearchString] = useState<string>("");



  return (
    <div className="App">
      
      <Header searchText={searchString} setSearchText={setSearchString} />
      <Grid searchText={searchString}/>
    </div>
  );
}

export default App;
