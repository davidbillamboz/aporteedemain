export function getCardByUid(cards, cardUid) {
  return cards.find((aCard) => aCard.uid === cardUid);
}
