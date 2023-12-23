function firstNonRepeatedChar(str) {
  // Create a map to store the count of each character
  const charCountMap = new Map();

  // Iterate through the string to populate the map
  for (const char of str) {
    charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
  }

  // Iterate through the string to find the first non-repeated character
  for (const char of str) {
    if (charCountMap.get(char) === 1) {
      return char;
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

function findFirstNonRepeatedChar() {
  const inputString = document.getElementById('inputString').value;
  const result = firstNonRepeatedChar(inputString);

  document.getElementById('result').innerText = `First Non-Repeated Character: ${result === null ? 'null' : result}`;
}
