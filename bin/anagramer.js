const primes = require("./primes");

let lastPrime = primes.generateNextPrime(1);
const characterToPrimeNumberMap = new Map();

const anagramMap = {};

const getCharacterCount = (word) => word.length;

const calculateHash = (word) => {
  if (word === "") return 1;

  let hash = 1;

  for (const character of word.toLowerCase()) {
    if (!characterToPrimeNumberMap.has(character)) {
      characterToPrimeNumberMap.set(character, lastPrime);
      lastPrime = primes.generateNextPrime(lastPrime);
    }

    hash *= characterToPrimeNumberMap.get(character);
  }

  return hash;
};

const parseWord = (word) => {
  const characterCount = getCharacterCount(word);
  const hash = calculateHash(word);

  if (!anagramMap[characterCount]) {
    anagramMap[characterCount] = {
      [hash]: [word],
    };
  } else if (anagramMap[characterCount] && !anagramMap[characterCount][hash]) {
    anagramMap[characterCount][hash] = [word];
  } else {
    anagramMap[characterCount][hash] = [
      ...anagramMap[characterCount][hash],
      word,
    ];
  }
};

const findAllAnagrams = (word) => {
  const characterCount = getCharacterCount(word);
  const hash = calculateHash(word);

  const possibleAnagrams = anagramMap[characterCount];
  if (!possibleAnagrams) return [];

  const anagrams = possibleAnagrams[hash];
  if (!anagrams || anagrams === []) return [];

  return anagrams.filter((anagram) => anagram.toLowerCase() !== word);
};

module.exports = { parseWord, findAllAnagrams };
