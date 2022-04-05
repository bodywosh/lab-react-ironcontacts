// src/App.js
import "./App.css";
import { useState } from 'react'

const contactsJson = require('./contacts.json');
let remainingContacts = [...contactsJson]
let contacts = remainingContacts.splice(0,5)

function App() {
  const [data, setData] = useState(contacts)

  const addContact = () => {  
    contacts.push(remainingContacts.splice(Math.floor(Math.random()*remainingContacts.length),1)[0])
    setData([...contacts])
  }

  const sortName = () => {  
    contacts.sort(function (a, b) {
      return a.name.localeCompare(b.name)
    })   
    setData([...contacts])
  }

  const sortPopularity = () => {  
    contacts.sort(function (a, b) {
      return a.popularity - b.popularity;
    })
    setData([...contacts])
  }

  const deleteContact = (id) => {
    contacts = contacts.filter(item =>item.id !== id)
    setData([...contacts])
  }

  return <div className="App">
    <button onClick={addContact}>ADD RANDOM CONTACT</button>
    <button onClick={sortName}>SORT BY NAME</button>
    <button onClick={sortPopularity}>SORT BY POPULARITY</button>
    <table>
        <thead>
            <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won an Oscar</th>
                <th>Won an Emmy</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item)=>{ 
            return <tr key={item.id}>
                <td><img src={item.pictureUrl} alt="" height="120px"></img></td>
                <td>{item.name}</td>
                <td>{item.popularity}</td>
                <td>{(item.wonOscar) ? '🏆' : null}</td>
                <td>{(item.wonEmmy) ? '🏆' : null}</td>
                <td><button onClick={()=>deleteContact(item.id)}>❌</button></td>
            </tr>             
            })}
        </tbody>
    </table>
  </div>;
}

export default App;