
import './App.css';
import {Data} from './Components/Data'
import {useState} from 'react'
import CardList from './Components/CardList';
import { Route, Switch } from 'react-router-dom';
import Trailer from './Components/Trailer';
import Errors from './Components/Errors.js';
function App() {
const [cats, setCats] = useState(Data);

  return (
    <div className="App">
      <Switch>
      <Route exact path='/' render={(props)=><CardList cats={cats} {...props} />} />
      {/* <CardList cats={cats} /> */}
      <Route exact path='/cat/:id' render={(props)=><Trailer cats={cats} {...props} />}/>
      <Route exact path='/*' component={Errors}/>
      </Switch>
      
    </div>
  );
}

export default App;
