import type { DATE } from "./types";

export function getCurrentDate(): DATE {
  const now = new Date();

  const months = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ];

  const day: number = now.getDate();
  const month: string = months[now.getMonth()]!;
  const year: number = now.getFullYear();

  const currentDate: DATE = { day, month, year };

  return currentDate;
}
