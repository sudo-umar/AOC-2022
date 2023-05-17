import fs from "fs";
import tunningTrouble from "./modules/tunningTrouble";
import dirList from "./modules/spaces";

// --- Day 6: Tunning Trouble ---

// day 6 part 1 - tunning trouble
const packetMarker = tunningTrouble("data/6_tunning_trouble.txt", 4);
console.log("First Packet Marker after:", packetMarker);

// day 6 part 2 - tunning trouble
const messageMarker = tunningTrouble("data/6_tunning_trouble.txt", 14);
console.log("First Message Marker after: ", messageMarker);

// --- Day 7: Spaces Left ---

// day 7 part 1 - spaces left
const directories = dirList("data/7_spaces.txt");
