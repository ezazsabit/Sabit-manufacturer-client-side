import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

function useAdmin() {
    const [user] = useAuthState(auth)
    const [data, setData] = useState({})
    let isAdmin = false

    useEffect(() => {
        fetch(`https://intense-brook-81804.herokuapp.com/user?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    if (data.role) {
        isAdmin = true
        return isAdmin
    }
    else {
        return isAdmin
    }

}
export default useAdmin