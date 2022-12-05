import { format } from "date-fns";
export const capitalizeFirstLetter = (sentence: string) => {
  return sentence.charAt(0).toUpperCase() + sentence.slice(1);
};

export const formatDate = (createdDate: Date) => {
  return format(new Date(createdDate), "MMM d, yyy");
};
