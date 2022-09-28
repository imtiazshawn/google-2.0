import React from 'react';
import './Home.css';
import { IoMdApps } from 'react-icons/io'
import { RiAccountCircleFill } from 'react-icons/ri';
import Search from './Search';


function Home() {
  return (
    <div className='Home'>
        <div className="home-header">
            <div className="home-headerLeft">
                <p>About</p>
                <p>Store</p>
            </div>
            <div className="home-headerRight">
                <p>Gmail</p>
                <p>Images</p>
                <IoMdApps className='app-icon'/>
                <RiAccountCircleFill className='account-icon'/>
            </div>
        </div>
        <div className="home-body">
          <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="" />
          <div className="home-inputContainer">
            <Search/>
          </div>
        </div>
    </div>
  )
}

export default Home