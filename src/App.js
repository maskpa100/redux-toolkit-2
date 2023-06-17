
import Header from './components/Header/Header';
import SearchContainer from './pages/Search/SearchContainer';
import Index from './pages/Index/Index';
import {Routes, Route} from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleDown, faMagnifyingGlass, faCheck } from "@fortawesome/free-solid-svg-icons";
import { funOrState, funOrValue, funOpState, funOpValue } from './reduxjs-toolkit/searchSlice.js';

library.add(faAngleDown, faMagnifyingGlass, faCheck);

function App() {


console.log("app")

  return (
    <div className="main">
      <Header/>
      <Routes>
      	<Route path='/' element={<Index/>}/>
        <Route path='/search' element={<SearchContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
