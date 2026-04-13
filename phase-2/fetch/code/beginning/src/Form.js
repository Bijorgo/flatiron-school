import { useState } from "react";

export default function Form({setMenuItems, menuItems}) {
    const [ name, setName ] = useState("");
    const [ price, setPrice] = useState(0);

    function handleSubmit(event) {
        event.preventDefault();
        // create object that contains values
        // create POST request to send to database 
        // render menu item object in Menu
        fetch("http://localhost:3001/menu", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: name,
                price: price
            })
        })
        .then(response => response.json())
        .then(newMenuItemData => {
            setMenuItems([...menuItems, newMenuItemData])
            // if you do [...MenuItems, newMenuItemData] it creates an array with the new info at end
            // if [newMenuItemData, ...MenuItems] it adds new info to beginning
        })
        .catch(error => console.error(error));
    }
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" 
                    value={name} onChange={event => setName(event.target.value)} />{` `}
            <input name="price" type="number" placeholder="0" min="0" 
                    value={price} onChange={event => setPrice(event.target.value)}/>{` `}
            <input type="submit" value="Submit" />
        </form>
    )
}