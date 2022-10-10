/**
 * @author J0nsnow
 * @param s 
 * @param words 
 * @returns Retorna un arreglo con los índices de la prímera posición de coincidencia de los substrings con respecto al string en comparación.
 */
export function FindSubStringIndexes(s: String, words: String[]) {
  // Número de caracteres de una palabra en la lista de palabras: words.
  const wordCharsLength = words[0].length;

  // Número de palabras presentes en la lista de palabras: words.
  const wordsTotal = words.length;

  // Total de caracteres presentes in la lista de palabras: words.
  const wordsCharsLength = wordCharsLength * wordsTotal;

  // Arreglo para guardar los índices.
  const res = [];

  // Si el número total de caracteres en la lista words
  // es mayor que la longitud de la propia cadena s.
  if (wordsCharsLength > s.length) return res;

  // El mapa almacena las palabras presentes en la lista words
  // contra sus ocurrencias dentro de la lista words
  const hash_map = new Map();

  for (let i = 0; i < wordsTotal; i++) {
    if (hash_map.has(words[i]))
      hash_map.set(words[i], hash_map.get(words[i]) + 1);
    else hash_map.set(words[i], 1);
  }

  for (let i = 0; i < s.length - wordsCharsLength + 1; i++) {
    let temp_hash_map = new Map(hash_map);
    let j = i;
    let count = wordsTotal;

    // Atraviesa la subcadena
    while (j < i + wordsCharsLength) {
      // Extrae la palabra
      const word = s.substring(j, j + wordCharsLength);

      // Si no se encuentra la palabra o si la frecuencia de
      // palabra actual es más de lo necesario simplemente se rompe el búcle.
      if (hash_map.has(word) == false || temp_hash_map.get(word) == 0) break;
      // De lo contrario, disminuya el recuento de palabras
      // de hash_map
      else {
        temp_hash_map.set(word, temp_hash_map.get(word) - 1);
        count -= 1;
      }
      j += wordCharsLength;
    }

    // Almacena el índice inicial de esa subcadena
    // cuando todas las palabras de la lista están en subcadena
    if (count == 0) res.push(i);
  }
  return res;
}
