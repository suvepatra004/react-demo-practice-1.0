// This is the Component for the Movie Card

function MovieCard({ movie }) {

    function onFavoriteClick() {
        alert('clicked');
    }
    return(
        <div className="movie-card">
            <div className="movie-poster">
                <img src="{movie.url}" alt="{movie.title}" />
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>❤️</button>
                </div>
            </div>
            <div className="movie-info">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-release">{movie.release_date}</p>
            </div>
        </div>

    )
}

export default MovieCard;