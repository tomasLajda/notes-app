import { createContext, useReducer } from 'react';

const addCard = (cardToAdd, cards) => {
  return [...cards, cardToAdd];
};

const removeCard = (cardToRemove, cards) => {
  return cards.filter((card) => card !== cardToRemove);
};

export const CardContext = createContext({
  cards: [],
  addCardToSite: () => {},
  removeCardFromSite: () => {},
});

const CARD_ACTION_TYPE = {
  SET_CARDS: 'SET_CARDS',
};

const INITIAL_STATE = {
  cards: [],
};

const cardReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CARD_ACTION_TYPE.SET_CARDS:
      console.log({ ...state });
      console.log({ ...payload });
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in cardReducer`);
  }
};

export const CardProvider = ({ children }) => {
  const [{ cards }, dispatch] = useReducer(cardReducer, INITIAL_STATE);

  const updateCardsReducer = (newCards) => {
    dispatch({
      type: CARD_ACTION_TYPE.SET_CARDS,
      payload: { cards: newCards },
    });
  };

  const addCardToSite = (cardToAdd) => {
    const newCards = addCard(cardToAdd, cards);
    updateCardsReducer(newCards);
  };

  const removeCardFromSite = (cardToAdd) => {
    const newCards = removeCard(cardToAdd, cards);
    updateCardsReducer(newCards);
  };

  const value = {
    cards,
    addCardToSite,
    removeCardFromSite,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
