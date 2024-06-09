import React, { useState, useEffect } from 'react';

export default function CatFacts() {
  const [facts, setCatFacts] = useState([]);
  const [currentFactIndex, setCurrentFactIndex] = useState(0);

  useEffect(() => {
    async function getCatFacts() {
      const url = 'https://cat-fact.herokuapp.com/facts';
      let response = await fetch(url);
      let data = await response.json();
      setCatFacts(data);
    }

    getCatFacts();
  }, []);

  const handleNextFact = () => {
    setCurrentFactIndex((prevIndex) => (prevIndex + 1) % facts.length);
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-zinc-800 dark:text-white">Cat Fact</h2>
        {facts.length > 0 ? (
          <p className="text-zinc-600 dark:text-zinc-300">{facts[currentFactIndex].text}</p>
        ) : (
          <p className="text-zinc-600 dark:text-zinc-300">Loading...</p>
        )}
      </div>
      <div className="bg-zinc-200 dark:bg-zinc-700 p-4 flex justify-between items-center">
        <button onClick={handleNextFact} className="text-zinc-800 dark:text-white">
          Next Fact
        </button>
      </div>
    </>
  );
}
