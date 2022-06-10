export type JackpotProps = {
    winningRatio: number;
};

export interface GameConfigProps {
    odds: object;
    jackpot: JackpotProps;
    stakeLevels: number[];
}
