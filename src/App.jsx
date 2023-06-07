import CardsContainer from './components/cards-container/cards-container.component';
import SearchBar from './components/search-bar/search-bar.component';
import NavBar from './components/nav-bar/nav-bar.component';

const App = () => {
  return (
    <div className="h-screen dark:bg-gray-900">
      <div className="w-10/12 sm:w-4/6 m-auto">
        <NavBar />
        <SearchBar />
        <CardsContainer />
      </div>
    </div>
  );
};

export default App;
