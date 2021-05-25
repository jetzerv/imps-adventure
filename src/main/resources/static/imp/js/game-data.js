const START_LOCATION = "0_0";

let MEMORY = {
  currentLocation: START_LOCATION,
  rollHistory: [],
  numberOfRolls: 0,
  stars: 0,
  green_orbs: 0,
  purple_orbs: 0,
  dust: 0,
  chaos: 0,
  monster: 0,
  three_star: 0,
  four_star: 0,
  five_star: 0
};

const FIELD_TYPES = Object.freeze({
  "START": "Start",

  "GREEN_ORBS": "Spirit",
  "PURPLE_ORBS": "Promotion Stone",
  "DUST": "Magic Dust",

  "CHAOS": "Chaos Stone",
  "MONSTER": "Monster Soul",

  "THREE_STAR": "3 Star Shards",
  "FOUR_STAR": "4 Star Shards",
  "FIVE_STAR": "5 Star Shards",

  "MUSHROOM": "Starry Mushroom",

  "LUCKY": "Lucky Hut", // gives lucky dice
  "WISH": "Wishing Hut", // gives ordinary dice
  "KARMA": "Karma Hut", // even = forwards, odd = backwards
  "FORTUNE": "Fortune Hut", // chance between: double / two dice / backwards / double stars
});

// index : coordinates, desc , level
const PLAYABLE_FIELD_DEFINITIONS = [
  {
    coords: "0_0",
    desc: FIELD_TYPES.START,
    level: 0
  },
  {coords: "1_0", desc: FIELD_TYPES.GREEN_ORBS, level: 1},
  {coords: "1_1", desc: FIELD_TYPES.PURPLE_ORBS, level: 1},
  {coords: "1_2", desc: FIELD_TYPES.DUST, level: 1},
  {coords: "0_2", desc: FIELD_TYPES.MUSHROOM, level: 1},
  {coords: "0_3", desc: FIELD_TYPES.WISH, level: 0},
  {coords: "0_4", desc: FIELD_TYPES.THREE_STAR, level: 1},
  {coords: "1_4", desc: FIELD_TYPES.GREEN_ORBS, level: 1},
  {coords: "1_5", desc: FIELD_TYPES.MONSTER, level: 1},
  {coords: "1_6", desc: FIELD_TYPES.DUST, level: 1},
  {coords: "2_6", desc: FIELD_TYPES.FORTUNE, level: 0},
  {coords: "3_6", desc: FIELD_TYPES.MUSHROOM, level: 1},
  {coords: "4_6", desc: FIELD_TYPES.PURPLE_ORBS, level: 1},
  {coords: "4_5", desc: FIELD_TYPES.FIVE_STAR, level: 1},
  {coords: "4_4", desc: FIELD_TYPES.GREEN_ORBS, level: 1},
  {coords: "4_3", desc: FIELD_TYPES.KARMA, level: 0},
  {coords: "4_2", desc: FIELD_TYPES.DUST, level: 1},
  {coords: "4_1", desc: FIELD_TYPES.FOUR_STAR, level: 1},
  {coords: "4_0", desc: FIELD_TYPES.MUSHROOM, level: 1},
  {coords: "3_0", desc: FIELD_TYPES.CHAOS, level: 1},
  {coords: "2_0", desc: FIELD_TYPES.LUCKY, level: 0}
];

// level 1,2,3 based on index
const LEVEL_BASED_REWARDS = [
  {
    GREEN_ORBS: 1000,
    PURPLE_ORBS: 1000,
    DUST: 1000,

    CHAOS: 100,
    MONSTER: 100,

  },
  {},
  {}
];