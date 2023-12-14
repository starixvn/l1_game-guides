const isNewSlotGame = (type: number, gameId: number) => {
    return type == 2 && gameId > 62;
};

const isNewCascadingSlot = (type: number, gameId: number) => {
    return type == 3 && gameId > 47;
};

const isCrashGame = (type: number) => type == 5;

export { isNewSlotGame, isNewCascadingSlot, isCrashGame };
