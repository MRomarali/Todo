import React, { useContext, useState } from 'react'
import { Context } from '../../App'

const Item = (props) => {
    const store = useContext(Context)

    const [toggleAddress, setToggleAddress] = useState(false)

    const deleteUser = (e) => {
        e.preventDefault()
        const url = 'http://localhost:5000/users' + props.children._id
        const otherParams = {
            method: "DELETE",
        }

        fetch(url, otherParams)
            .then(data => { return data.json() })
            .then(res => { console.log(res) })
            .catch(error => console.log(error))
        store.reloadUsers.set(true)
    }


    const infoList = () => {
        setToggleAddress(!toggleAddress)
    }

    return (
        <div classwork="">
                <div>
                    <h4>Todo-List {props.user.id}</h4>
                    <p> {props.user.Todo}</p>
                </div>
        </div>
    )
}

export default Item;