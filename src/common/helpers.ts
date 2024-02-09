export const formatText = (text: string) =>
  text.charAt(0).toUpperCase() +
  text.substring(1).toLowerCase().replace(/-/g, " ");

export const extractIdFromUrl = (url: string): number => {
  const match = url.match(/(?<=\/)[0-9]{1,4}(?=\/)/);

  return match ? Number(match[0]) : 0;
};
