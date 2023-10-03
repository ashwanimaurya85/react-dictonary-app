import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchWordDetails } from '../services/dictionaryService';
import Loader from './Loader';

const WordDetails = () => {
  const { word } = useParams();
  const [wordDetails, setWordDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Fetch word details for the selected word
    setIsLoading(true);
    fetchWordDetails(word)
      .then((data) => {
        // Assuming the first result is relevant
        setWordDetails(data[0]);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching word details:', error);
        setIsLoading(false);
      });
  }, [word]);

  return (
    <div>
      <h2>Word Details for: {word}</h2>

      {isLoading && <Loader />}

      {wordDetails && (
        <div>
          <h3>Phonetics:</h3>
          {wordDetails.phonetics.map((phonetic, index) => (
            <div key={index}>
              <p>{phonetic.text}</p>
              {phonetic.audio && <audio src={phonetic.audio} controls />}
            </div>
          ))}

          <h3>Meanings:</h3>
          {wordDetails.meanings.map((meaning, index) => (
            <div key={index}>
              <p>Part of Speech: {meaning.partOfSpeech}</p>
              <ul>
                {meaning.definitions.map((definition, defIndex) => (
                  <li key={defIndex}>
                    <p>Definition: {definition.definition}</p>
                    {definition.example && <p>Example: {definition.example}</p>}
                    {definition.synonyms && (
                      <p>Synonyms: {definition.synonyms.join(', ')}</p>
                    )}
                    {definition.antonyms && (
                      <p>Antonyms: {definition.antonyms.join(', ')}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WordDetails;