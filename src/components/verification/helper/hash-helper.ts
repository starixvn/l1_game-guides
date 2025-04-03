export const MAX_VALUE = 2 ** 32;
export const RTP = 0.03;

export const takeFirstValueFromSHA512 = (hash: string) => {
    return hash?.slice(0, 8);
};

export const convertToDecimal = (hex: string) => {
    return parseInt(hex, 16);
};

export const convertToHexString = (hex: string) => {
    return hex.split("").join(",");
};

export const convertHexToDecimalSteps = (hex: string = "4f1f06cd") => {
    const decimal = convertToDecimal(hex);
    const prefix = `(${convertToHexString(hex)})=${decimal}`;
    const suffix = `=${decimal}`;
    const steps = hex.split("").map((digit, index) => {
        const power = hex.length - 1 - index;
        const stepValue = convertToDecimal(digit) * Math.pow(16, power);
        const currentDecimal = stepValue.toString().padEnd(hex.length * 2 + (index === 0 ? 1 : 0));
        return `${currentDecimal} (${digit} * (16^${power}))`;
    });
    return `${prefix}\n${steps.join("\n+")}${suffix}`;
};

export const renderFinalResult = (hex: string = "4f1f06cd") => {
    const decimal = convertToDecimal(hex);
    return (MAX_VALUE / (decimal + 1)) * (1 - RTP);
}; 