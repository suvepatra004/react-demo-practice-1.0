import MovieCard from '../components/MovieCard';
import './App.css';

function App() {
  const movies = [
    {
      title: 'Inception',
      release_date: '2010-07-16',
      url: 'https://image.tmdb.org/t/p/w500/8h58X2b1d3k4c5e6f7g8h9i0j1k2l3m4.jpg'
    },
    {
      title: 'Interstellar',
      release_date: '2014-11-07',
      url: 'https://image.tmdb.org/t/p/w500/2l5h6i7j8k9l0m1n2o3p4q5r6s7t8u9.jpg'
    }
  ];

  return (
    <div className="app">
      <header className="app-header">
        <h1>Movie Gallery</h1>
      </header>
      <main className="movie-gallery">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </main>
    </div>
  );
}

export default App;
