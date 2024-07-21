import { useState } from "react";
import documentsData from "./data/documents.yml";

interface Document {
  id: number;
  name: string;
  description: string;
  link: string;
}

export function App() {
  const [docs] = useState<Document[]>(documentsData as Document[]);

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
