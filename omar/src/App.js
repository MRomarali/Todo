import React, { useState } from 'react';

import './App.css';
import Item from './Components/item'
import GetUsers from './Components/getUsers'
import Formula from './Components/formComponent'


export const Context = React.createContext({})
function App() {

  const [users, setUsers] = useState([]);
  const [reloadUsers, setReloadUsers] = useState(true)
  const [disabled, setDisabled] = useState(false)

  const store = {
    users: { get: users, set: setUsers },
    reloadUsers: { get: reloadUsers, set: setReloadUsers },
    buttonDisabled: { get: disabled, set: setDisabled }
  }

  return (
    <div classwork="App">
            <Context.Provider value={store}>
        <Formula/>
        <GetUsers />
          {store.users.get.map((user, index) =>
            <Item key={index} user={user}>
              {user}
            </Item>
          )}
      </Context.Provider>
    </div>
  );
}

export default App;
