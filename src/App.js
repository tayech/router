import logo from './logo.svg';
import './App.css';
import NavBar from './Componets/NavBar/NavBar';
import About from './Componets/AddMovie/About';
import { Route, Switch } from 'react-router-dom';
import Movie from './Componets/Movie/Movie'
import {data} from './Data'
import MoviesDatails from './Componets/MoviesDetails/MoviesDatails';
function App() {
  return (
    <div className="App">
      <NavBar/>
     
      <Route exact path="/about" component={About}/>
      <Route exact path="/" render={()=>(<Movie movies={data}/>)}/>
      <Route exact path="/movie/:id" render={(props)=>(<MoviesDatails movies={data} {...props}/>)}/>
    </div>
  );
}

export default App;
