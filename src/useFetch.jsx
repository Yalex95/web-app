import React, { useEffect, useState } from 'react'

export function useFetch(){
    const url = `https://api.jikan.moe/v4/anime?limit=10&page=1`
    const [data, setData] = useState(null);
      const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(url)
              .then((response) => response.json())
              .then((json) => setData(json))
              .finally(() => setLoading(false));
        
    }, []);

  return{data, loading }
}
