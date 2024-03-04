import { TolgeeInstance } from "@tolgee/react";

const isNewSlotGame = (type: number, gameId: number) => {
    return type == 2 && gameId > 62;
};

const isNewCascadingSlot = (type: number, gameId: number) => {
    return type == 3 && gameId > 47;
};

const isCrashGame = (type: number) => type == 5;

const handleLanguage = async (tolgee: TolgeeInstance, locale: string, setIsLoading: (status: boolean) => void) => {
    await tolgee.changeLanguage(locale);
    setIsLoading(false);
};

export { handleLanguage, isCrashGame, isNewCascadingSlot, isNewSlotGame };
