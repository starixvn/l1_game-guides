export type JackpotProps = {
    winningRatio: number;
};

export interface GameConfigProps {
    odds: object[number];
    jackpot: JackpotProps;
    stakeLevels: number[];
}
