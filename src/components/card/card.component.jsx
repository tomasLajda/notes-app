import { useContext } from 'react';
import { CardContext } from '../../contexts/cards.context';

const Card = ({ card }) => {
  const { removeCardFromSite } = useContext(CardContext);
  const currentDate = new Date();
  const dateString = `${currentDate.getDate()}/${
    currentDate.getMonth() + 1
  }/${currentDate.getFullYear()}`;

  const createCardHandler = (event) => {
    event.preventDefault();
    removeCardFromSite(card);
  };

  return (
    <div className="card">
      <p>{card}</p>
      <div className="flex justify-between">
        <p>{dateString}</p>
        <svg
          onClick={createCardHandler}
          className="cursor-pointer"
          width="24px"
          height="24px"
        >
          <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
        </svg>
      </div>
    </div>
  );
};

export default Card;
