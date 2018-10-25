import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SimilarFilm from '../SimilarFilm/SimilarFilm';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import Slider from "react-slick";
import './FilmCard.css';

import { movieInfoAsync } from '../redux/actions/movieInfoAction';
import { connect } from 'react-redux';
import { searchClear } from "../redux/actions/searchAction";
import { inputClear } from "../redux/actions/inputAction";

class FilmCard extends Component {
    static defaultProps = {};

    static propTypes = {};

    componentWillReceiveProps (nextProps) {
        if(this.props.match.params.id !== nextProps.match.params.id) {
            this.props.movieInfoAction(nextProps.match.params.id)
        }
    }

    componentDidMount() {
        {this.props.movieInfoAction(this.props.match.params.id)}
        {this.props.searchClear()}
    }

    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 3,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 2,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 320,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };

        console.log(this.props);
        return (
            <div className='film--card__container'>
                {this.props.isLoading ? <div className='loader'><Loader type="Plane" color="#00BFFF"/></div> :
                    <div className="film--card">
                        <div className="film--poster__box"
                             style={{backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url("https://image.tmdb.org/t/p/w300${this.props.movieInfo.backdrop_path}")`}}>
                        </div>

                        <div className="film--short__info">
                            <div className="film--small__box">
                                <img className="film--small__poster"
                                     src={`https://image.tmdb.org/t/p/w300${this.props.movieInfo.poster_path}`}
                                     alt="film small poster"/>
                            </div>

                            <div className="film--shotInfo__box">
                                <p className="film--year">{`${this.props.movieInfo.release_date}`.substring(0, 4)}</p>
                                <h2 className="film--title">{this.props.movieInfo.title}</h2>
                                <p className='film-tagline'>Tagline: <span
                                    className='film-tagline-span'>{this.props.movieInfo.tagline}</span></p>
                                <p className='film--genre'>Genre: {this.props.movieInfo.genres.map(el => <span
                                    className='film--genre__title'>{el.name}</span>)}</p>

                                <p className='film--vote'><span className='film--vote-span'>{this.props.movieInfo.vote_average}</span> <i className="fas fa-star yellow"></i> из {this.props.movieInfo.vote_count} голосов </p>
                            </div>
                        </div>

                        <div className="film--info">
                            <p className='film--homepage'>Home page: <a href={`${this.props.movieInfo.homepage}`}
                                                                        className='homepage-span'
                                                                        target='_blank'>{this.props.movieInfo.homepage}</a>
                            </p>
                            <h3 className="film--resume">Summaries</h3>
                            <p className="film--resume__info">
                                {this.props.movieInfo.overview}
                            </p>

                            <div className="film--trailer">
                                {this.props.movieInfo.trailers.length === 0 ? <img className='trailer-not-found' src="https://i.ytimg.com/vi/coD8Yem9K7I/hqdefault.jpg" alt="trailer not found"/> : <iframe className='trailer-iframe' src={`https://www.youtube.com/embed/${this.props.movieInfo.trailers[0].key}?autoplay=1`} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                                </iframe>
                                }
                            </div>

                            <div className='similar-film'>
                                <Slider {...settings}>
                                    {this.props.movieInfo.recommendation.map(el => <SimilarFilm title={el.title} poster={el.poster_path} id={el.id}/>)}
                                </Slider>
                            </div>
                        </div>
                    </div>
                }
            </div>
        );
    }

}

function mapStateToProps(state) {
    return {
        movieInfo: state.stateMovieInfo,
        isLoading: state.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        movieInfoAction: function (idurl) {
            dispatch(movieInfoAsync(idurl))
        },
        searchClear: function () {
            dispatch(searchClear())
        },
        inputClear: function () {
            dispatch(inputClear())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmCard);
