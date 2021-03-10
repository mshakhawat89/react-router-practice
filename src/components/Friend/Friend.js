import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { name, email, id } = props.friend;
    const history = useHistory();
    const handleClick = (friendId) =>{
        const url = `/friend/${friendId}`;
        history.push(url);
    }
    const friendStyle = {
        border: '1px solid purple',
        margin: '10px',
        padding: '10px',
        borderRadius: '15px'
    }
    return (
        <div style={friendStyle}>
            <h1>Name: {name}</h1>
            <p>Email: {email}</p>

            {/* <Link to={`/friend/${id}`}>Show details of {id}</Link> */}
            <button onClick={()=>handleClick(id)}>Click me</button>

            {/* <Link to={`/friend/${id}`}>
                <button>Show details of {id}</button>
            </Link> */}

        </div>
    );
};

export default Friend;