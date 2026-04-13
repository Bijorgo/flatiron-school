/*

Phase 2 -> fetch()
By Sakib Rasul

Deliverables
1. Host our restaurant's menu with JSON Server.
2. Render a list of menu items on load, or display an error message.
3. Render a controlled form for adding new dishes to the list *and* in `db.json`.
4. (Bonus) Render some JSX for updating an item's metadata in the list *and* in `db.json`.
5. (Bonus) Render some JSX for removing an item from the list *and* `db.json`.

*/

import { useEffect, useState } from 'react';
import Form from './Form';
import Menu from './Menu';


export default function App() {
  const [ menuItems, setMenuItems ] = useState([ { name: "Cookie", price: "5" } ]);
  //this Effect will run a GET request and populate App with data from JSON Server
  useEffect(()=>{
    //this callback function is the actual functionality of the effect itself
    //ie some function that runs side effects that are caused by rendering 
    fetch("http://localhost:3001/menu")
    .then( r => r.json())
    .then(menuData => {
      //take menuData from API, updaye our state menuItems with that value
      //ie. tell our component about our external data
      setMenuItems(menuData);
    })
    .catch(error => console.error(error));
  },
  // the second argument od useEffect is the Effect's dependency array
  // it's an array of states and/or props, that when modified, should trigger this Effect
  // if we don't include this array, we're telling React to run this Effect on every single render of App
    []
  );
  return (
    <main>
      <h1>Chez Flatiron</h1>
      <Menu menuItems={menuItems}/>
      <section>
        <h2>[ADMIN AREA] Submit a New Dish!</h2>
        <Form setMenuItems={setMenuItems} menuItems={menuItems}/>
      </section>
    </main>
  );
}
