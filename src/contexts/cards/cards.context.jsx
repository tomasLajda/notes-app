import { createContext, useReducer } from 'react';

const addCard = (cardToAdd, cards) => {
  return [...cards, cardToAdd];
};

const removeCard = (cardToRemove, cards) => {
  return cards.filter((card) => card !== cardToRemove);
};

const filterCards = (searchFilter, cards) => {
  return cards.filter((card) => card.toLowerCase().includes(searchFilter));
};

export const CardContext = createContext({
  cards: [],
  filteredCards: [],
  addCardToSite: () => {},
  removeCardFromSite: () => {},
});

const CARD_ACTION_TYPE = {
  SET_CARDS: 'SET_CARDS',
  SET_FILTERED_CARDS: 'SET_FILTERED_CARDS',
};

const INITIAL_STATE = {
  cards: [],
  filteredCards: [],
};

const cardReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CARD_ACTION_TYPE.SET_CARDS:
      return {
        ...state,
        ...payload,
      };
    case CARD_ACTION_TYPE.SET_FILTERED_CARDS:
      return {
        ...state,
        ...payload,
      };
    default:
      throw new Error(`Unhandled type of ${type} in cardReducer`);
  }
};

export const CardProvider = ({ children }) => {
  const [{ cards, filteredCards }, dispatch] = useReducer(
    cardReducer,
    INITIAL_STATE
  );

  const updateCardsReducer = (newCards) => {
    dispatch({
      type: CARD_ACTION_TYPE.SET_CARDS,
      payload: { cards: newCards },
    });
  };

  const filteredCardsReducer = (newFilteredCards) => {
    dispatch({
      type: CARD_ACTION_TYPE.SET_FILTERED_CARDS,
      payload: { filteredCards: newFilteredCards },
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

  const filterCardsOnPage = (searchFilter) => {
    const newFilteredCards = filterCards(searchFilter, cards);
    filteredCardsReducer(newFilteredCards);
  };

  const value = {
    cards,
    filteredCards,
    addCardToSite,
    removeCardFromSite,
    filterCardsOnPage,
  };

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>;
};
