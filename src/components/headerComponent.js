import React from 'react';
import { Image } from 'antd';

import '../App.css'
import logo from '../assets/pokemon_logo.png'

export default function Header() {
    return (
        <div className="header-div">
            {/* <p className="header-text">Pokemon</p> */}
            <Image preview={false} width={156} height={71} src={logo} className='logo' />
        </div>
    )
}
