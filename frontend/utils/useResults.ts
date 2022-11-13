import { useEffect, useState } from "react";

export function useResults() {
  const [results, setResults] = useState(null);

  useEffect(() => {
    async function getResults() {
      const response = await fetch("http://192.168.0.33:8000/pokemon/results");
      const results = await response.json();

      console.log(results);
      setResults(results);
    }

    getResults();
  }, []);

  return results;
}
