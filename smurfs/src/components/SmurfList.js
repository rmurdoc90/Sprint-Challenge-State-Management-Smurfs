import React, {useContext} from 'react';
import {SmurfContext} from '../contexts';

export const SmurfList = () => {
    
    const smurfy = useContext(SmurfContext)
    console.log(smurfy)

    return (
        <section className='smurfCardSection'>
           {smurfy.map(e => (
              <div className='smurfCard' key = {e.id}>
                  <h1>Name: {e.name}</h1>
                  <h2>Age: {e.age}</h2>
                  <h3>Height: {e.height}</h3>
              </div> 
           ))} 
        </section>
    )
}