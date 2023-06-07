import { useContext } from 'react';

import { CardContext } from '../../contexts/cards/cards.context';

import Card from '../card/card.component';
import CreateCard from '../create-card/create-card.component';

const CardsContainer = () => {
  const { filteredCards } = useContext(CardContext);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-4">
      {filteredCards?.map((card, index) => (
        <Card key={index} card={card} />
      ))}
      <CreateCard />
    </div>
  );
};

export default CardsContainer;
