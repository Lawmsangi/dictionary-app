import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import '../styles/WordDefinition.css';

const WordDefinition = () => {
    const { words,searchQuery, isLoading  } = useSelector((store)=>store.words)
    const filteredWords = words.filter(
    (word) => word.word.toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  return (
    <div className='content'>
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="words">
            {filteredWords.map((word) => (
              <div key={word.word}>
                <h2>{word.word}</h2>
                {word.phonetics.map((phonetic, index) => (
                  <div key={index}>
                    <p>Phonetic: {phonetic.text}</p>
                    <audio controls>
                      <source src={phonetic.audio} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                ))}
                {word.meanings.map((meaning, index) => (
                  <div className='definitions' key={index}>
                    <p>Part of Speech: {meaning.partOfSpeech}</p>
                    <div className="list">
                       <ul className='list-content'>
                            <h2>Synonyms({meaning.synonyms.length}):</h2>
                            {meaning.synonyms.slice(0, 9).map((synonym, index) => (
                                <li key={index}>{synonym}</li>
                            ))}
                        </ul>

                        <ul className='list-content'>
                            <h2>Antonyms({meaning.antonyms.length}):</h2>
                            {meaning.antonyms.slice(0, 9).map((antonym, index) => (
                                <li key={index}>{antonym}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="definition">
                        <h2>Definition:</h2>
                    {meaning.definitions.slice(0, 4).map((def, index) => (
                        <p key={index}>{index + 1}. {def.definition}</p>
                    ))}
                    </div>

                  
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
    </div>
  )
}

export default WordDefinition