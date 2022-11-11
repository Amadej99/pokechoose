import { useState, useEffect } from "react";

export function useCheckDatabase(nextIdPair: number[]) {
  const [saved, setSaved] = useState([]);

  useEffect(() => {
    async function getDatabaseContent() {
      const response = await fetch("http://192.168.0.33:8000/pokemon/saved");
      const saved = await response.json();
      setSaved(saved);
    }

    getDatabaseContent();
  }, [nextIdPair]);

  return saved;
}
