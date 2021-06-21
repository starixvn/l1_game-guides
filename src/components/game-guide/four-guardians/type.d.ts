export interface OddsProps {
    [number]: object;
}

export type JackpotProps = {
    winningRatio: number;
};

export interface GameConfigProps {
    odds: OddsProps;
    jackpot: JackpotProps;
    stakeLevels: number[];
}
