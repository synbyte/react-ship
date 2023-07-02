import { useState } from 'react';
import { create } from '../services/package.mjs';
import { Button } from 'flowbite-react';
function AddItem(props) {

    const [itemName, setItemName ] = useState("")
    const [itemFrom, setItemFrom ] = useState("")
    const [itemTo, setItemTo ] = useState("")
    const [itemNotes, setItemNotes ] = useState("")

  
    const submit = (e) => {
        
        create({name: itemName, from: itemFrom, to: itemTo, notes: itemNotes})
        setItemFrom("")
        setItemName("")
        setItemTo("")
        setItemNotes("")
    }

    return (
        <div className='additem'>
           <div ><h3>Name</h3> <input className='input' type="text" value={itemName} onChange={(e) => setItemName(e.target.value)} /></div>
           <div ><h3>From</h3> <input className='input' type="text" value={itemFrom} onChange={(e) => setItemFrom(e.target.value)} /></div>
           <div ><h3>To</h3> <input className='input' type="text" value={itemTo} onChange={(e) => setItemTo(e.target.value)} /></div>
           <div ><h3>Notes</h3> <input className='input' type="text" value={itemNotes} onChange={(e) => setItemNotes(e.target.value)} /></div>
            <Button onClick={submit}>Add Item</Button>
        </div>
    )
}

export default AddItem;