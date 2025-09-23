export interface Post {
  id: string; // postning unique ID si
  author: string; // kim yozgan
  title: string; // post sarlavhasi
  content: string; // post matni
  imageUrl?: string; // post rasmi
  createdAt: DATE; // yaratilgan sana
  updatedAt?: Date; // tahrirlangan sana (optional)
}

export type DATE = {
  day: number;
  month: string;
  year: number;
};
