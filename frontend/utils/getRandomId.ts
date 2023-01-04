export function getRandomPair(alreadyChosen: Number[][]) {
  const firstId = Math.floor(Math.random() * 900);
  const secondId = Math.floor(Math.random() * 900);

  if (
    alreadyChosen.includes([firstId, secondId].sort((a, b) => a - b)) ||
    firstId === secondId
  ) {
    return getRandomPair(alreadyChosen);
  }

  return [firstId, secondId].sort((a, b) => a - b);
}
