interface CardType {
    [key: string]: number;
}

class Card {
    private cardsMapping: CardType = {
        A: 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        J: 10,
        Q: 10,
        K: 10,
    };

    name: string;
    value: number;

    constructor(name: string) {
        this.name = name;
        this.value = this.cardsMapping[name];
    }
}

export const Cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"].map((name) => new Card(name));

export interface BaccaratIntroductionResources {
    header: string;
    content: string;
}
