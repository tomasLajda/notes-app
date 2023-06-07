import CardsContainer from './components/cards-container/cards-container.component';
import SearchBar from './components/search-bar/search-bar.component';

const App = () => {
  const themeChangeHandler = () => {
    if (localStorage.theme === 'light') {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="h-screen dark:bg-gray-900">
      <div className="w-10/12 sm:w-4/6 m-auto">
        <div className="flex justify-between items-center pt-2">
          <h1 className="text-4xl font-bold dark:text-gray-100">Notes</h1>
          <button
            onClick={themeChangeHandler}
            className="p-1 h-7 text-sm rounded-lg bg-gray-200"
          >
            Toggle mode
          </button>
        </div>
        <SearchBar />
        <CardsContainer />
      </div>
    </div>
  );
};

export default App;
