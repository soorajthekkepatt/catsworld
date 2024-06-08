import React, {useState, useEffect} from 'react'

export default function CatHeader() {

    const [catImg, setCatimg] = useState('')

    useEffect(() => {
        const imgUrl = 'https://api.thecatapi.com/v1/images/search';

        async function getImagefromUrl() {
            try {
                const response = await fetch(imgUrl);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const imgdata = await response.json();
                return imgdata;
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        async function fetchImage() {
            const data = await getImagefromUrl();
            if (data && data.length > 0) {
                console.log(data[0].url);
                setCatimg(data[0].url);
            }
        }

        fetchImage();
    }, []);

  return (
    <>
       
        <div className="bg-white dark:bg-zinc-800 shadow-lg rounded-lg overflow-hidden">
            <img src={catImg} alt="Cat" className="w-full h-48 object-cover" />
        
        </div>
    </>
  )
}
