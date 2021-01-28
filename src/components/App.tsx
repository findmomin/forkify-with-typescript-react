import { BookmarksProvider } from '../contexts/Bookmarks.context';
import styles from '../styles/App.module.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import RecipeContainer from './RecipeContainer';
import UploadRecipeOverlay from './UploadRecipeOverlay';
import { UploadRecipeFormProvider } from '../contexts/UploadRecipeForm.context';

const App = () => {
  return (
    <div className={styles.App}>
      <BookmarksProvider>
        <UploadRecipeFormProvider>
          {/* The navbar */}
          <Navbar />

          {/* The sidebar or search results area */}
          <Sidebar />

          {/* The recipe area */}
          <RecipeContainer />

          {/* Add recipe overlay */}
          <UploadRecipeOverlay />
        </UploadRecipeFormProvider>
      </BookmarksProvider>
    </div>
  );
};

export default App;
