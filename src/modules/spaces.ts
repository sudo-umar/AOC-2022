import fs from "fs";

// const numberWhiteSPaces = (str: string) => {
//   let whiteSpaces = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "-") {
//       if(str.includes("dir")){
//         const dir = str[i+1]
//       }
//       return whiteSpaces;
//     } else if (str[i] === " ") {
//       whiteSpaces += 1;
//     }
//   }
// };
const numberWhiteSPaces = ()=>{
  if ()
}


const dirList = (fileName: string): Array<string> => {
  const data = fs.readFileSync(fileName, "utf8");
  const lines = data.split("\n");
  const spaces = lines.map(numberWhiteSPaces);
  console.log("white spaces: ", spaces);
  return [];
};

export default dirList;
