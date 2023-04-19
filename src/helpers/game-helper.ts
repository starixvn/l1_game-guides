const isNewSlotGame = (type: number, gameId: number) => {
    return type == 2 && gameId > 62;
};

export { isNewSlotGame };

const isNewCascadingSlot = (type: number, gameId: number) => {
    return type == 3 && gameId > 47;
    //return gameId > 65;
};

export { isNewCascadingSlot };
