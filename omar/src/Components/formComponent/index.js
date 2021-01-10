import React, { useState, useContext } from 'react'
import { Context } from '../../App'

const FormComponent = () => {
    const store = useContext(Context)

    const id = store.users.get.length

    const [value, setValue] = useState({
        Todo: 'whats your plan for the day..'
    })

    const handleChange = (e) => {
        setValue({ ...value, [e.target.name]: e.target.value })
    }

    const addUsert = (e) => {
        e.preventDefault()
        const url = 'http://localhost:5000/users'
        const otherParams = {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json;charset=UTF-8"
            },
            body: JSON.stringify({
                id: id + 1,
                Todo: value.Todo
            })
        }
        fetch(url, otherParams)
            .then(data => { return data.json() })
            .then(res => { console.log(res) })
            .catch(error => console.log(error))
        store.buttonDisabled.set(true)
        store.reloadUsers.set(true)
    }

    return (
        <div className="">
            <h4>Lägg till användare</h4>
            <form name="Student" onSubmit={addUsert}>
                <div>
                    <p>Namn</p>
                    <input type="text" name="Todo" onChange={handleChange} placeholder={value.Todo}></input>
                </div>
                <button disabled={store.buttonDisabled.get}>Add</button>
            </form>
        </div>
    )
}

export default FormComponent;