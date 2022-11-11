export function getRandomPair(alreadyChosen: Number[][]) {
  const firstId = Math.floor(Math.random() * 400);
  const secondId = Math.floor(Math.random() * 400);

  if (alreadyChosen.includes([firstId, secondId])) {
    return getRandomPair(alreadyChosen);
  }

  return [firstId, secondId];
}
