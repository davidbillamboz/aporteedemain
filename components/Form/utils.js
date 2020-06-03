export function getCardById(cards, cardId) {
  return cards.find((aCard) => aCard.id === cardId);
}
