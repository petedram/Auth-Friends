import React, { useState } from "react";
import axios from 'axios';


const Login = props => {

    const [credentials, setCredentials] = useState({ username: '', password:''});


      const handleChange = e => {

        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
        console.log(credentials);
      };


    const login = e => {
        e.preventDefault();
        axios
            .post('http://localhost:5000/api/login', credentials )
            .then(res => {
                localStorage.setItem("token", res.data.payload);
                props.history.push("/protected");
                console.log('response',res);
                console.log('localstorage', localStorage);
              })
              .catch(err => {
                localStorage.removeItem("token");
                console.log("invalid login: ", err);
              });
    }

    return (
        <div>
          <form onSubmit={login}>
            <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
            <button>Log in</button>
          </form>
        </div>
      );
}

export default Login;
