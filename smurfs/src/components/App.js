import React, {useState , useEffect} from "react";
import "./App.css";
import axios from 'axios';
import {SmurfContext} from '../contexts';
import {SmurfList} from './SmurfList';
import {SmurfForm} from './SmurfForm';



export default function App() {
  const [smurfs, setSmurfs] = useState()
  
  useEffect (()=>{
  axios
  .get('http://localhost:3333/smurfs')
  .then(res =>{
    setSmurfs(res.data)
    console.log(res.data)
  })
  .catch(err=>{
    console.log(err)
  })
}, [])

    return (
      <div className="App">
        <section>
          <h1>Smurfs</h1>
          <SmurfForm/>
        </section>
          <SmurfContext.Provider value={smurfs}> 
            {smurfs &&  <SmurfList/>}
          </SmurfContext.Provider>
      </div>
    );
  }



