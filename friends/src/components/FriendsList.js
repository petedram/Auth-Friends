import React from 'react';
import { axiosWithAuth } from '../api/axiosAuth';


// import Loader from 'react-loader-spinner';

const FriendsList = () => {

    axiosWithAuth().get('http://localhost:5000/api/friends').then(res => console.log('friendlist res with auth', res));


        // axios
        //     .get('http://localhost:5000/api/friends', token)
        //     .then(res => {
        //         console.log('friends response',res);
        //       })
        //       .catch(err => {
        //         console.log("invalid login: ", err);
        //       });

    return (
    <div className='friendlist'>
        <h1>Friend List</h1>


    </div>
    )
}


export default FriendsList;
