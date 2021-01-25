import styles from '../styles/App.module.css';
import Navbar from './Navbar';
import SearchResults from './Sidebar';
import Recipe from './RecipeContainer';

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
