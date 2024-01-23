import { useState } from "react";

const SearchUsers = (props) => {
    const [searchText, setSearch] = useState('')
    return(
        <div>
            <input onChange={(e) => searchText(e.target.value)}/>
            <button onClick={props.search(searchText)}>Search</button>
        </div>
    );
};

export default SearchUsers;