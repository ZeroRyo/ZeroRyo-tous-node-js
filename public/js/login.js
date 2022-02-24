/* eslint-disable */
// const axios = require('axios').default;

import axios from 'axios';
export const login = async (email,password) => {
    console.log(email,password);
    try{
        const res = await axios({
            method: 'POST',
            url: 'http://localhost:3000/api/v1/users/login',
            data: {
                email,
                password
            }
        });
        console.log(res);
        alert('thanh cong')
    }
    catch(err) {
        console.log(err.response.data.message)
     }
  };
  
