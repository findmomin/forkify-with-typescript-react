import { ResultsProvider } from '../contexts/Results.context';
import styles from '../styles/App.module.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RecipeContainer from './RecipeContainer';

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <ResultsProvider>
        <Sidebar />
      </ResultsProvider>
      <RecipeContainer />
    </div>
  );
};

export default App;
