//import { useEffect, useState } from "react";
import Store from '@/core/store-api'

async function getSeo() {  
    return await Store.get('/test');
  }
  

export default async function Carousel() {
    /*const [isLoading, setIsLoading] = useState(true);
    const [seo, setSeo] = useState({});

    useEffect(async () => {
      const seo = await getSeo();
      setSeo(seo);
      setIsLoading(false);
    })*/
    const isLoading = false;
    const seo = await getSeo();

    return (
      <div className="text-3xl font-bold underline">
          {isLoading && <p>Loading</p>}
          {!isLoading && (
            <>
              Questo è un carosello {seo.test} {seo.asd}
            </>    
          )}
      </div>
    );
}