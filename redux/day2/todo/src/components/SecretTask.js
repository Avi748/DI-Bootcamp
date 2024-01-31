import {useSelector} from 'react-redux'

const SecretTasks = (props) => {
    const tasks = useSelector((state) => state.todos);

    return(
        <>
        <h1>Secret Tasks</h1>
        {
            tasks.map(task => {
                return (
                    <div>
                    {task.text}
                    </div>
                )
            })
        }
        </>
    );
}

export default SecretTasks