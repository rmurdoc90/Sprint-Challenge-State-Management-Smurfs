import React, {useState} from 'react';

export const SmurfForm = () => {
    const [newNameText, setNewNameText] = useState('');
    const [newAgeText, setNewAgeText] = useState('');
    const [newHeightText, setNewHeightText] = useState('');
    
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
        <button>Submit</button>
     </>   
    )

}