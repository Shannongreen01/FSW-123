import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import './App.css';
import MovieList from './components/MovieList';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';
import StarMovie from './components/starMovie';
import RemoveStar from './components/RemoveStar';
import Welcome from './components/welcome';

//apikey=469a611a
const App = () => {
	const [movies, setMovies] = useState([]);
	const [Favorites, setFavorites] = useState([]);
	const [searchValue, setSearchValue] = useState('');

	const getMovieRequest = async (searchValue) => {
		const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=469a611a`;

		const response = await fetch(url);
		const responseJson = await response.json();

		if (responseJson.Search) {
			setMovies(responseJson.Search);
		}
	};

	useEffect(() => {
		getMovieRequest(searchValue);
	}, [searchValue]);

	useEffect(() => {
		const movieFavorites = JSON.parse(
			localStorage.getItem('movie-app-Favorites')
		);

		if (movieFavorites) {
			setFavorites(movieFavorites);
		}
	}, []);

	const saveToLocalStorage = (items) => {
		localStorage.setItem('movie-app-Favorites', JSON.stringify(items));
	};

	const addFavouriteMovie = (movie) => {
		const newFavouriteList = [...Favorites, movie];
		setFavorites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	const removeFavouriteMovie = (movie) => {
		const newFavouriteList = Favorites.filter(
			(favourite) => favourite.imdbID !== movie.imdbID
		);

		setFavorites(newFavouriteList);
		saveToLocalStorage(newFavouriteList);
	};

	return (
		<div className=''>
			<Router>
				<header className='header'>
					<Link to='/' className='links'>WELCOME</Link>
					<Link to='/movies' className='links'>SEARCH FOR A MOVIE</Link>
					<Link to='/Favorites' className='links'>YOUR STAR MOVIES</Link>
				</header>
				<main>
					<Switch>
						<Route exact={true} path='/'>
							<Welcome />
						</Route>
						<Route path='/movies'>
						<div className=''>
							<MovieListHeading heading='Movies' />
							<SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
						</div>
						<div className='flex-box'>
							<MovieList
								movies={movies}
								handleFavoritesClick={addFavouriteMovie}
								favouriteComponent={StarMovie}
							/>
						</div>
						</Route>
						<Route path='/Favorites'>
						<div className=''>
							<MovieListHeading heading='Favorites' />
						</div>
						<div className='flex-box'>
							<MovieList
								movies={Favorites}
								handleFavoritesClick={removeFavouriteMovie}
								favouriteComponent={RemoveStar}
							/>
						</div>
						</Route>
					</Switch>
				</main>
			</Router>
		</div>
	);
};

export default App;