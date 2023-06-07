import { useState, useContext } from 'react';

import { CardContext } from '../../contexts/cards/cards.context';

const CreateCard = () => {
  const maxLength = 200;

  const [value, setValue] = useState('');
  const [lettersRemaining, setLettersRemaining] = useState(maxLength);
  const { addCardToSite } = useContext(CardContext);

  const inputChangeHandler = (event) => {
    const inputValue = event.target.value;

    if (inputValue.length <= maxLength) {
      setValue(inputValue);
      setLettersRemaining(maxLength - inputValue.length);
    }
  };

  const createCardHandler = (event) => {
    event.preventDefault();
    if (value === '') return;

    addCardToSite(value);
    setValue('');
    setLettersRemaining(maxLength);
  };

  return (
    <form action="" method="get" className="card bg-rose-500">
      <textarea
        onChange={inputChangeHandler}
        value={value}
        placeholder="Type to add a note..."
        className="w-full flex-grow text-black bg-inherit placeholder:text-black placeholder:opacity-30 outline-none resize-none"
      />
      <div className="flex justify-between">
        <label htmlFor="">{`${lettersRemaining} remaining`}</label>
        <button
          onClick={createCardHandler}
          className=" bg-gray-200 px-2 py-1 rounded-md"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default CreateCard;
