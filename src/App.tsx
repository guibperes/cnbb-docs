import { useEffect, useState } from "react";
import { Document, searchDocuments } from "./data";

export function App() {
  const [docs, setDocs] = useState<Document[]>([]);

  useEffect(() => {
    async function search() {
      const result = await searchDocuments();
      setDocs(result);
    }
    search();
  }, []);

  return (
    <ul>
      {docs.map((document) => (
        <li key={document.id}>
          <h3>{document.name}</h3>
          <div>{document.description}</div>
          <a href={document.link}>Link</a>
        </li>
      ))}
    </ul>
  );
}
