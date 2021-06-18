import React from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import { auth } from './firebase';
import useState from './StateProvider.js'

function Login(){
    return (
        <div className='login'>
            <img src="https://upload.wikipedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"/>
        </div>
    )
}
       export default Login