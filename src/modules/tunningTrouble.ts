import fs from "fs";

const isSliceUnique = (characters: string): boolean => {
  const unique = new Set(characters);
  return unique.size === characters.length;
};
const tunningTrouble = (
  fileName: string,
  distinctChar: number
): number | void => {
  const dataStream = fs.readFileSync(fileName, "utf-8");
  for (let i = 0; i < dataStream.length; i++) {
    if (i >= distinctChar - 1) {
      const unique = isSliceUnique(
        dataStream.slice(i - (distinctChar - 1), i + 1)
      );
      if (unique) {
        return i + 1;
      }
    }
  }
};

export default tunningTrouble;
