import React, { useEffect, useContext } from 'react';
import { Context } from '../../App'


const GetUsers = () => {
    const store = useContext(Context)

    useEffect(() => {
        if (store.reloadUsers.get) {
            fetch('http://localhost:5000/users')
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    store.users.set(data)
                });
            setTimeout(() => {
                store.reloadUsers.set(false)
            }, 200);
            setTimeout(() => {
                store.buttonDisabled.set(false)
            }, 600);
        }
    })

    return <></>
};

export default GetUsers