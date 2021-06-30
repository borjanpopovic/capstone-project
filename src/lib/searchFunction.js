export function filterListOfLocations(
  event,
  listOfLocations,
  setListOfLocations
) {
  const fieldInput = event.target.value;
  const newList = listOfLocations
    .slice()
    .filter(
      (listOfLocation) =>
        listOfLocation.name.slice(0, fieldInput.length).toUpperCase() ===
        fieldInput.toUpperCase()
    );
  setListOfLocations(newList);
}

export function resetState(event, puffer, setListOfLocations) {
  if (event.key === 'Backspace') {
    setListOfLocations(puffer);
  }
}
