import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios';

import Buku from './Buku';
import Navbar from '../component/Navbar';

const Member= () => {
    return (
        <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
            <Navbar />
        </div>
    )
}

export default Member
