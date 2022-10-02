import { SearchContextProvider } from './shared/contexts/SearchContext';
import { ThemeContextProvider } from './shared/contexts/ThemeContext';
import { Router } from './router';

const App = () => {
  return (
    <SearchContextProvider>
      <ThemeContextProvider>
        <div className="App">
          <Router />
        </div>
      </ThemeContextProvider>
    </SearchContextProvider>
  );
}

export default App;