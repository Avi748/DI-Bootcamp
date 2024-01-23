
const GetUsersButton = (props) => {
    console.log(props);
    return(
        <div>
            <button onClick={props.getUserFunc}>Get Users</button>
        </div>
    );
}

export default GetUsersButton;