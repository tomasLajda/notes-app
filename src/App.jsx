import { CardContext } from './contexts/cards.context';

import Card from './components/card/card.component';
import CreateCard from './components/create-card/create-card.component';
import { useContext } from 'react';

const App = () => {
  const { cards } = useContext(CardContext);

  return (
    <div className="grid grid-flow-col  h-screen">
      {cards?.map((card) => (
        <Card key={card} card={card} />
      ))}
      <CreateCard />
    </div>
  );
};

export default App;
