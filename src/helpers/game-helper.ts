const isNewSlotGame = (type: number, gameId: number) => {
    return type == 2 && gameId > 62;
};

export { isNewSlotGame };
