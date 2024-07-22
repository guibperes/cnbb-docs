export type Document = {
  id: number;
  listId: string;
  type: "FINAL" | "ESTUDO";
  name: string;
  description: string;
  link: string;
};
