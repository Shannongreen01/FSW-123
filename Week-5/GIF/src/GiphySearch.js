import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';

function GiphySearch() {

    const [imgSearch, setImgSearch] = useState('cars');
    const [altImg, setAltImg] = useState([]);

    const API = 'lzOVGEqgjP4UfJjsG6qMlCyviLMDMAvh'; //* API key
    const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${imgSearch}&limit=1`; //* URL with API key and default state variable

    useEffect(() => {
        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${API}&q=goku&limit=1`)
            .then((res) => setAltImg(res.data.data[0].images.fixed_height.url))
            .catch((error) => console.warn(error))
    }, []);

    const getGiphs = () => {
        axios.get(URL)
            .then((res) => setAltImg(res.data.data[0].images.fixed_height.url))
            .catch((error) => console.warn(error))
    };

    const handleClick = () => {
        getGiphs();
    };

    const handleChange = (e) => {
        setImgSearch(e.target.value);
    };

    return (
        <>
            <header className = 'header'>
                <input className = 'input' type='text' value={imgSearch} onChange={handleChange} />
                <button onClick={handleClick}>Search Gif</button>
            </header>
            <main className = 'main'>
                <div>
                    <img className = 'gif' src = {altImg}/>
                </div>
            </main>
        </>
    );
};

export default GiphySearch;