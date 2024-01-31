import {useSelector, useDispatch} from 'react-redux'
import {fetchAsyncUsers} from './usersSlice'

const Users = (props) => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    // console.log(users);

    return(
        <div>
            <h2>Users</h2>
            <button onClick={() => dispatch(fetchAsyncUsers())}>Get Users</button>
            <ul>
                {
                    users.map(user => {
                        console.log(user);
                        return(
                            <li key={user.id}>
                                ID: {user.id}{", "} Name: {user.name}{", "}Username: {user.username}{", "}Email: {user.email}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default Users