import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../api/axiosAuth';


// import Loader from 'react-loader-spinner';


const FriendsList = () => {

    let styles = {
        margin: '20px',
        padding: '20px',
        width: '1000px',
        height: '180px',
        backgroundColor: '#88CCFF',
      };

    const [friendArray, setFriendArray] = useState([]);

    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log('friendlist res with auth', res);
            setFriendArray(res.data)
    })

      }, []);

    // function loadFriends() {

    //         console.log('friendArray from loadFriends', friendArray);

    //         var result = friendArray.map(item => (
    //             <div className="friend">
    //             <h2>{item.name}</h2>
    //             <h3>Age: {item.age}</h3>
    //             <h3>Email: {item.email}</h3>
    //             </div>
    //         ))
    //         return result
    // }

    return (
    <div className='app'>
        <h1>Friend List</h1>
        <div className='content'>
        {friendArray.map(item=>(
            <div className='friend-item' style={styles}>
            <h2>Name: {item.name}</h2>
            <h3>Age: {item.age}</h3>
            <h3>Email: {item.email}</h3>
            </div>
        ))}
        </div>
    </div>
    )
}


export default FriendsList;
