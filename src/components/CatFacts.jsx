import React,{useState, useEffect} from 'react'

export default function CatFacts() {

    const [facts, setCatFacts] = useState('');


    useEffect(() => {
      
      async function processWithFact(){

        let catFacts =  await getCatFacts();
        
        setCatFacts(catFacts);

        console.log("jee")

    }

    
     
    }, []);


    async function getCatFacts() {

      const url = 'https://cat-fact.herokuapp.com/facts'

      const factApidata = await fetch(url)
      const fact = await factApidata.json();
      return fact;

    }

    

   


  return (
    <>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-zinc-800 dark:text-white">Cat Fact</h2>
        <p className="text-zinc-600 dark:text-zinc-300">Did you know that cats can rotate their ears 180 degrees?</p>
    </div>
    <div className="bg-zinc-200 dark:bg-zinc-700 p-4 flex justify-between items-center">
        <button className="text-zinc-800 dark:text-white">Next Fact</button>
    </div>
    </>
  )
}
