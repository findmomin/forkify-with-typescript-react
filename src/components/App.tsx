import styles from '../styles/App.module.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RecipeContainer from './RecipeContainer';

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Sidebar />
      <RecipeContainer />
    </div>
  );
};

export default App;
