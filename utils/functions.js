
/**
 * Rimuovo tutti gli spazi e caratteri particoli
 * @param {string} string 
 * @returns 
 */
export function removeCharacterSpecial(string){
  return string.replaceAll(' ', '').replaceAll(`'`, '').replaceAll(`/`, '').replaceAll(`%`, '');
}


/**
 * Capitalize First letter
 * @param {string} string 
 * @returns 
 */
export function capitalizeFirstLetter(string){
  return string.split(' ')
    .map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ')
}