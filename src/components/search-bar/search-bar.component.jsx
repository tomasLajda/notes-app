import { useState, useRef, useContext, useEffect } from 'react';

import { CardContext } from '../../contexts/cards/cards.context';

const SearchBar = () => {
  const [value, setValue] = useState('');
  const { filterCardsOnPage, cards } = useContext(CardContext);
  const inputRef = useRef(null);

  const inputChangeHandler = (event) => {
    const inputValue = event.target.value.toLowerCase();
    setValue(inputValue);
  };

  const iconClickHandler = () => {
    inputRef.current.focus();
  };

  const clearInputHandler = () => {
    setValue('');
  };

  useEffect(() => {
    filterCardsOnPage(value);
  }, [value, cards]);

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      action="get"
      className="flex my-4 sm:mx-auto"
    >
      <div className="flex w-full p-1 rounded-xl bg-gray-200 outline-none">
        <svg
          onClick={iconClickHandler}
          viewBox="0 0 30 30"
          className="w-5 mr-1 cursor-pointer"
        >
          <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z" />
        </svg>
        <input
          onChange={inputChangeHandler}
          ref={inputRef}
          value={value}
          type="search"
          placeholder="type to search..."
          className="rounded-md bg-gray-200 outline-none w-full "
        />
        <svg
          onClick={clearInputHandler}
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
          className="w-5 cursor-pointer"
        >
          <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z" />
        </svg>
      </div>
    </form>
  );
};

export default SearchBar;
