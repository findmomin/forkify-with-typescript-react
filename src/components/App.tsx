import styles from '../styles/App.module.css';
import Navbar from './Navbar';
import SearchResults from './SearchResults';
import Recipe from './Recipe';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <SearchResults />
      <Recipe />
    </div>
  );
}

export default App;
