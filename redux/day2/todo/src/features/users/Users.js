import {useSelector, useDispatch} from 'react-redux'
import {fetchAsyncUsers, addUser, addUserPrepare} from './usersSlice'
import { useEffect, useRef, useState } from 'react';
const Users = (props) => {
    const userNameRef = useRef();
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    console.log(users);

    useEffect(() => {
        dispatch(fetchAsyncUsers())
    },[])
    return(
        <div>
            <h2>Users</h2>
            <div>
                <input ref={userNameRef}/>
                <button onClick={() => dispatch(addUser(userNameRef.current?.value))}>Add User</button>
                <button onClick={() => dispatch(addUserPrepare(userNameRef.current?.value))}>Add Prepare User</button>
            </div>
            <select>
                <option value={-1}>Select Author</option>
                {
                    users.map(user => {
                        return(
                            <option value={user.id} key={user.id}>{user.name}</option>
                        )
                    })
                }
            </select>
        </div>
    );
}

export default Users