// import logo from './logo.svg';
import './App.css';
import { Fragment,useState } from 'react';
import data_arr from './data'
import List from './List'
function App() {
  let [people,setpeople]=useState(data_arr)
  return (
    <Fragment> 
    <div className="container">
    <h3>{people.length} birthdays today</h3>
    <List people={people}/>
    <button onClick={() => setpeople([])}>clear all</button>
    </div></Fragment>
  );
   
}

export default App;
