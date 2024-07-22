import documentos from "./documentos.yml";
import estudos from "./estudos.yml";
import { Document } from "./document.type";

function mapToList(documents: Document[]): Document[] {
  return documents.map((document) => ({
    ...document,
    listId: `${document.id}-${document.type}`,
  }));
}

async function getFinalDocuments(): Promise<Document[]> {
  return documentos as Document[];
}

async function getStudyDocuments(): Promise<Document[]> {
  return estudos as Document[];
}

export async function searchDocuments(): Promise<Document[]> {
  const finalDocuments = await getFinalDocuments();
  const studyDocuments = await getStudyDocuments();

  return mapToList([...finalDocuments, ...studyDocuments]);
}
