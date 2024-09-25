import { TolgeeInstance } from "@tolgee/react";
import { GAMES_CLASSIC_BACCARAT, GAMES_LUCKY_BACCARAT, GAMES_NEW_SLOT } from "../common/constants";

const isNewSlotGame = (type: number, gameId: number) => {
    return type == 2 && (gameId > 62 || GAMES_NEW_SLOT.includes(gameId));
};

const isNewCascadingSlot = (type: number, gameId: number) => {
    return type == 3 && gameId > 47;
};

const isCrashGame = (type: number) => type == 5;

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

export { handleLanguage, isClassicOrSpeedBaccarat, isCrashGame, isLuckyBaccarat, isNewCascadingSlot, isNewSlotGame };
