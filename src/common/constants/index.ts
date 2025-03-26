export interface IObjectKeys {
    [key: string]: string;
}

export const locales: IObjectKeys = { en: "en", vi: "vi", th: "th", id: "id", zh_cn: "zh_cn", zh_tw: "zh_tw" };
export const Themes = {
    light: "light",
    dark: "dark",
    blue: "blue",
    ahcl: "ahcl",
    fourGuardians: "four-guardians",
    classicslot: "classic-slot-template",
    nightclub: "nightclub",
    treasureIsland: "treasure-island",
    wayToGoal: "way-to-goal",
    fruitSlot: "fruit-slot",
    fortuneCat: "fortune-cat",
    infoSite: "info-site",
    pf: "pf",
    numberGame: "number-game",
};

export const BACKGROUND_THEMES: IObjectKeys = {
    [Themes.light]: "#FFF",
    [Themes.dark]: "transparent",
    [Themes.blue]: "#000",
    [Themes.ahcl]: "#e3d3b2",
    [Themes.fourGuardians]: "#0e373e",
    [Themes.nightclub]: "#000",
    [Themes.treasureIsland]: "#2a212f",
    [Themes.wayToGoal]: "#11305b",
    [Themes.fruitSlot]: "#2d2c2e",
    [Themes.fortuneCat]: "#060223",
    [Themes.infoSite]: "#FFF",
    [Themes.pf]: "#5d5e70",
    [Themes.numberGame]: "#191A1E",
};

export const ENVIRONMENT = { sm: "sm", sc: "sc", si: "si", pf: "pf" };

export const ORIENTATION = { portrait: "portrait", landscape: "landscape" };

export const PROJECTS = { L1: "L1", L2: "L2" };

export const buildVersion = process.env.buildVersion;

export const GAMES = {
    BIG_SMALL: 1,
    SE_DIE: 2,
    FISH_PRAWN_CRAB: 3,
    TURBO_BIG_SMALL: 4,
    TURBO_ODD_EVEN: 6,
    DRAGON_TIGER: 7,
    KENO_PRO_MAX: 8,
    MINI_SE_DIE: 9,
    BACCARAT: 10,
    KENO_MAX: 12,
    KENO_MAX_2: 13,
    KENO_MINI: 14,
    KENO_MINI_2: 15,
    KENO_EAST: 16,
    KENO_WEST: 17,
    KENO_SOUTH: 18,
    KENO_NORTH: 19,
    ROULETTE: 21,
    VIP_SE_DIE: 22,
    BLACK_JACK: 23,
    SPECIAL_SE_DIE: 24,
    SIC_BO: 25,
    VIP_FISH_PRAWN_CRAB: 26,
    VIP_BACCARAT: 27,
    VIP_SE_DIE_WAR: 28,
    FOUR_GUARDIANS: 29,
    LOTTERY: 31,
    THREE_CARDS: 35,
    KENO_MATCH_1: 36,
    KENO_MATCH_2: 37,
    HEROES_SLOT: 38,
    CASINO_HOLDEM_POKER: 39,
    KENO_POWER_1: 40,
    KENO_POWER_2: 41,
    TEXAS_HOLDEM_POKER: 42,
    BITCOIN_MASTER: 43,
    HILO: 45,
    NIGHT_CLUB: 46,
    TREASURE_ISLAND: 47,
    UNBALANCEDBIGSMALL1: 50,
    BLOCKCHAIN_BACCARAT: 48,
    MEGA_KENO: 52,
    MEGA_KENO_2: 53,
    UNBALANCEDBIGSMALL2: 51,
    UNBALANCEDBIGSMALL3: 54,
    UNBALANCEDBIGSMALL4: 55,
    WAY_TO_GOAL: 49,
    MINI_SE_DIE_2: 56,
    MINI_SE_DIE_3: 57,
    MINI_SE_DIE_4: 58,
    FRUIT_SLOT: 59,
    FANTAN: 60,
    FORTUNE_CAT: 62,
    WIN_THREE_CARDS: 61,
    DRAGON_TIGER_FIGHT: 67,
    PONTOON: 72,
    COLOR_GAME: 71,
    BANDAR_QIU_QIU: 75,
    SPACE_FLIGHT: 73,
    CHINESE_BLACKJACK: 77,
    FOOTBALL_DICE: 78,
    FOOTBALL_SLOT: 79,
    BAC_BALL_1: 1001,
    BAC_BALL_2: 1002,
    NEXT_BALL_1: 1003,
    NEXT_BALL_2: 1004,
    SE_BALL: 1005,
    COIN_TOSS: 80,
    LUCKY_THREE: 1006,
    PUSOY: 94,
    LUCKY_BACCARAT: 81,
    SE_DIE3: 95,
    KARAKRUS: 96,
    LUCKY_BACCARAT_2: 82,
    LUCKY_BACCARAT_3: 83,
    LUCKY_BACCARAT_4: 88,
    LUCKY_BACCARAT_5: 89,
    BACCARAT_2: 84,
    BACCARAT_3: 85,
    BACCARAT_4: 90,
    BACCARAT_5: 91,
    VIP_BACCARAT_2: 86,
    VIP_BACCARAT_3: 87,
    VIP_BACCARAT_4: 92,
    VIP_BACCARAT_5: 97,
    SPEED_BACCARAT: 98,
    SPEED_BACCARAT_2: 100,
    SPEED_BACCARAT_3: 101,
    FOOTBALL_COIN_TOSS: 93,
    SEVEN_UP_DOWN: 103,
    CHRISTMAS_X: 106,
    MARBLE_FOOTBALL: 104,
    TAP_FORTUNE: 107,
    COIN_MINING: 109,
    ROCKET_X: 113,
    MARBLE_FOOTBALL_2: 114,
};

export const GAMES_MINI = {
    BIG_SMALL: 1,
    FISH_PRAWN_CRAB: 3,
    DRAGON_TIGER: 7,
    MINI_SE_DIE: 9,
    BACCARAT: 10,
    HILO: 45,
    SICBO: 25,
    COLOR_GAME: 71,
    COIN_TOSS: 80,
    FOOTBALL_COIN_TOSS: 93,
    SEVEN_UP_DOWN: 103,
};

export const GAMES_PF = {
    CHINESE_BLACKJACK: 77,
    SPACE_FLIGHT: 73,
    FOOTBALL_DICE: 78,
    BAC_BALL_1: 1001,
    BAC_BALL_2: 1002,
    NEXT_BALL_1: 1003,
    NEXT_BALL_2: 1004,
    SE_BALL: 1005,
    COIN_TOSS: 80,
    LUCKY_THREE: 1006,
    BAC81: 81,
    FOOTBALL_COIN_TOSS: 93,
    CHRISTMAS_X: 106,
    COIN_MINING: 109,
    ROCKET_X: 113,
};

export const TolgeeConfig = {
    url: "https://tolgee.sabagame.com/",
    key: "tgpak_gjpxe3jsoe2xgy3lgezgiolwoy4gy5twgrtwqz3pgrtwq",
    projectId: "2",
};

// type = 2
export const GAMES_NEW_SLOT = [GAMES.FORTUNE_CAT, GAMES.WAY_TO_GOAL, GAMES.NIGHT_CLUB, GAMES.HEROES_SLOT, GAMES.FOUR_GUARDIANS];

export const GAMES_LUCKY_BACCARAT = [
    GAMES.LUCKY_BACCARAT,
    GAMES.LUCKY_BACCARAT_2,
    GAMES.LUCKY_BACCARAT_3,
    GAMES.LUCKY_BACCARAT_4,
    GAMES.LUCKY_BACCARAT_5,
];

export const GAMES_CLASSIC_BACCARAT = [
    GAMES.BACCARAT_2,
    GAMES.BACCARAT_3,
    GAMES.BACCARAT_4,
    GAMES.BACCARAT_5,
    GAMES.VIP_BACCARAT_2,
    GAMES.VIP_BACCARAT_3,
    GAMES.VIP_BACCARAT_4,
    GAMES.VIP_BACCARAT_5,
    GAMES.SPEED_BACCARAT,
    GAMES.SPEED_BACCARAT_2,
    GAMES.SPEED_BACCARAT_3,
];

// type = 0
export const GAMES_USE_THEME_SLOT = [GAMES.TAP_FORTUNE];
