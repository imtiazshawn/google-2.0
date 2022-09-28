import React, { useState } from 'react';
import './Search.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsFillMicFill} from 'react-icons/bs';
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../StateProvider.js";
import { actionTypes } from '../Reducer';


function Search({hidebuttons}) {

  const [{},dispatch] = useStateValue();

  const [input, setInput] = useState("");

  const navigate = useNavigate();

  const search =(e)=>{
    e.preventDefault();
    dispatch({
      type:actionTypes.SET_SEARCH_TERM, 
      term: input
    })
    navigate("/search");
  }

  return (
    <form className='Search'>
        <div className="search-input">
          <AiOutlineSearch className='search-icon'/>
          <input value={input} onChange={e=>setInput(e.target.value)} />
          <BsFillMicFill className='mic-icon'/>
        </div>

        {
          !hidebuttons ? (<div className="search-button">
          <button type='submit' onClick={search}>Google Search</button>
          <button type='submit'>I'm feeling lucky</button>
        </div>) : (
          <div className="search-button" style={{display: "none"}}>
          <button type='submit' onClick={search}>Google Search</button>
        </div>
        )
        }

    </form>
  )
}

export default Search;