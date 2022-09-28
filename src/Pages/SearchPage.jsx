import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Pages/Search';
import {AiOutlineSearch} from 'react-icons/ai';
import {IoMdImages} from 'react-icons/io';
import {MdLocationOn} from 'react-icons/md';
import {AiFillTag, AiFillFileText} from 'react-icons/ai';
import {BiDotsVerticalRounded} from 'react-icons/bi';
import './SearchPage.css';
import { useStateValue } from '../StateProvider';
import useGoogleSearch from '../useGoogleSearch';



function SearchPage() {

    const [{term}] = useStateValue();
    
    const { data } = useGoogleSearch(term);
    console.log(data);

  return (
    <div className='SearchPage'>
        <div className="searchPage-header">
            <Link to="/">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" alt="" />
            </Link>

            <div className="searchPage-headerBody">
                <Search hidebuttons/>
                <div className='searchPage-options'>
                <div className="searchPage-optionsLeft">
                    <div className="searchPage-option">
                        <AiOutlineSearch className='ficon'/>
                        <p>All</p>
                    </div>
                    <div className="searchPage-option">
                        <AiFillFileText className='ficon'/>
                        <p>News</p>
                    </div>
                    <div className="searchPage-option">
                        <IoMdImages className='ficon'/>
                        <p>Images</p>
                    </div>
                    <div className="searchPage-option">
                        <AiFillTag className='ficon'/>
                        <p>Shop</p>
                    </div>
                    <div className="searchPage-option">
                        <MdLocationOn className='ficon'/>
                        <p>Map</p>
                    </div>
                    <div className="searchPage-option">
                        <BiDotsVerticalRounded className='ficon'/>
                        <p>More</p>
                    </div>
                </div>
                <div className="searchPage-optionRight">
                    <div className="searchPage-option">
                        <p>Setting</p>
                    </div>
                    <div className="searchPage-option">
                        <p>Tools</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {
            term && (
        <div className="searchPage-results">
            <p className="searchPage-resultsCount">
                About {data?.searchInformation.formattedTotalResults} ({data?.searchInformation.formattedSearchTime}) for {term}
            </p>
        {
            data?.items.map((item) => {
                return <div className="searchPage-result">
                <a href={item.link} className='searchPage-resultLink'>
                    
                    {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                        <img src={item.pagemap?.cse_image[0]?.src} className="searchPage_resultImage" />
                    )}

                    {item.displayLink}
                </a>

                <a href={item.link} className='searchPage-resultTitle'>
                    <h2>{item.title}</h2>
                </a>
                <p className='searchPage-resultDescription'>{item.snippet}</p>
            </div>
            })
}
        </div>)
        }
    </div>
  )
}

export default SearchPage;