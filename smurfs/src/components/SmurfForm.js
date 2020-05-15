import React, {useState} from 'react';
import axios from 'axios';

export const SmurfForm = () => {
    const [newNameText, setNewNameText] = useState('');
    const [newAgeText, setNewAgeText] = useState('');
    const [newHeightText, setNewHeightText] = useState('');
    
    const postingData = () => {
        
            axios
            .post('http://localhost:3333/smurfs', {
                name:newNameText,
                age:newAgeText,
                height:newHeightText
            })
            .then(res =>{
                console.log(res)
            })
            .catch(err=>{
                console.log(err)
            })
        
        }
    

    console.log(newNameText)
    console.log(newAgeText)
    console.log(newHeightText)

    const handleNameChanges = e =>{
        setNewNameText(e.target.value)
    }
    const handleAgeChanges = e =>{
        setNewAgeText(e.target.value)
    }
    const handleHeightChanges = e =>{
        setNewHeightText(e.target.value)
    }
    return(
      <>  
        <div>
           <input
           className='name-input'
           placeholder='Name'
           type="text"
           name='newNameText'
           value={newNameText}
           onChange={(handleNameChanges)}

            />
        </div>
        <div>    
             <input
           className='age-input'
           placeholder='Age'
           type="text"
           name='newAgeText'
           value={newAgeText}
           onChange={handleAgeChanges}

            />
        </div>
        <div>    
             <input
           className='height-input'
           placeholder='Height'
           type="text"
           name='newHeightText'
           value={newHeightText}
           onChange={handleHeightChanges}

            />
        </div>
        <button onClick={postingData}>Submit</button>
     </>   
    )

}