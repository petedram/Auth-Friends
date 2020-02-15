import React, { useState, useEffect } from "react";
import { axiosWithAuth } from '../api/axiosAuth';


// import Loader from 'react-loader-spinner';


const FriendsList = () => {


    let styles = {
        margin: '20px',
        padding: '20px',
        width: '1000px',
        height: '180px',
        backgroundColor: '#665b8c',
      };

    const [friendArray, setFriendArray] = useState([]);
    const [friendState, setFriendState] = useState({
        newName: '',
        newAge: '',
        newEmail: ''
      })


    useEffect(() => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
        .then(res => {
            console.log('friendlist res with auth', res);
            setFriendArray(res.data)
    })

      }, []);


      const handleChangesName = e => {
        setFriendState({
            ...friendState,
          newName: e.target.value
        });
        console.log('Name: ',friendState.newName);
      };
    
      const handleChangesAge = e => {
        setFriendState({
            ...friendState, 
          newAge: e.target.value
        });
        console.log('Age: ',friendState.newAge);
    
      };
    
      const handleChangesEmail = e => {
        setFriendState({ 
            ...friendState,
          newEmail: e.target.value
        });
        console.log('Email: ',friendState.newEmail);
    
      };

      const handleAddFriend = e => {
        e.preventDefault();
        console.log('add friend', friendState.newName, friendState.newAge, friendState.newEmail)
        const newFriend = {
            name: friendState.newName,
            age: friendState.newAge,
            email: friendState.newEmail
        }
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
        .then(res => {
            console.log('updated friendlist res with auth', res);
            setFriendArray(res.data)
    })

    };


    return (
    <div className='app'>
        <h1>Friend List</h1>
        <div className='input'>
        <input
          type="text"
          value={friendState.newName}
          onChange={handleChangesName}
          placeholder="name"
        />
        <input
          type="text"
          value={friendState.newAge}
          onChange={handleChangesAge}
          placeholder="age"
        />
        <input
          type="text"
          value={friendState.newEmail}
          onChange={handleChangesEmail}
          placeholder="email"
        />
        <button onClick={handleAddFriend}>Add Friend</button>
        </div>
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
