import { TolgeeInstance } from "@tolgee/react";
import { GAMES_CLASSIC_BACCARAT, GAMES_LUCKY_BACCARAT, GAMES_NEW_SLOT, GAMES_TYPES_IDS, GAMES_USE_THEME_SLOT } from "../common/constants";

const isNewSlotGame = (type: number, gameId: number) => {
    return type == 2 && (gameId > 62 || GAMES_NEW_SLOT.includes(gameId));
};

const isNewCascadingSlot = (type: number, gameId: number) => {
    return type == 3 && gameId >= 47;
};

const isCrashGame = (type: number) => type === GAMES_TYPES_IDS.CRASH_GAME;

const isFixedStepsCrashGame = (type: number) => type === GAMES_TYPES_IDS.FIXED_STEPS_CRASH_GAME;

const handleLanguage = async (tolgee: TolgeeInstance, locale: string, setIsLoading: (status: boolean) => void) => {
    await tolgee.changeLanguage(locale);
    setIsLoading(false);
};

const isLuckyBaccarat = (gameId: number) => {
    return GAMES_LUCKY_BACCARAT.includes(gameId);
};

const isClassicOrSpeedBaccarat = (gameId: number) => {
    return GAMES_CLASSIC_BACCARAT.includes(gameId);
};

const isUseThemeSlot = (type: number, gameId: number) => {
    return type == 0 && GAMES_USE_THEME_SLOT.includes(gameId);
};

export {
    handleLanguage,
    isClassicOrSpeedBaccarat,
    isCrashGame,
    isFixedStepsCrashGame,
    isLuckyBaccarat,
    isNewCascadingSlot,
    isNewSlotGame,
    isUseThemeSlot
};

