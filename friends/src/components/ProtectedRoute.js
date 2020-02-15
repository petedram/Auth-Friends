import React from "react";
import { Route, Redirect } from 'react-router-dom';
import FriendsList from "./FriendsList";


const ProtectedRoute = () => {
    console.log('localstorage from protected', localStorage);


    return ( 
    <Route render={() => {
        if (localStorage.getItem("token")) {
            return <FriendsList />;
          } else {
            return <Redirect to="/login" />;
          }
    }}
    />
    );
};

export default ProtectedRoute

//once token in local storage, it will render component

