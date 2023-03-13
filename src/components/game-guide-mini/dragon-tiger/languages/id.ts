import { IDragonTigerMiniTranslationResource } from "./types";
export const id: IDragonTigerMiniTranslationResource = {
    introduction:
        "Dragon Tiger dimainkan dengan satu setumpuk 52 kartu standar (tidak termasuk Joker). Ada 3 pilihan taruhan: Dragon, Tiger dan Seri.",
    winningCondition: {
        title: "Syarat Menang",
        description: {
            ruleDrawCards: "Dua kartu ditarik, satu untuk Dragon dan satu untuk Tiger.",
            winOption: [
                "Dragon, Tiger: opsi yang memiliki nilai kartu lebih tinggi akan menang.",
                "Seri : pemain akan menang jika Dragon dan Tiger memiliki nilai kartu yang sama.",
            ],
            compareCardValue: "Permainan menentukan menang atau kalah dengan membandingkan titik kartu, bukan jenisnya.",
            cardPointValues: "- Nilai poin kartu:",
            cardValues: [
                "Ace berarti 1 poin; Jack 11 poin; Ratu berarti 12 poin dan Raja adalah 13 poin.",
                "Kartu (2 hingga 10) dihitung berdasarkan nilai nominal.",
            ],
            shuffleCard: "Setumpuk 52 kartu standar (tidak termasuk Joker) dikocok setelah setiap putaran.",
        },
    },
    betLimit: {
        title: "Batas Taruhan",
        maxBetRound: "Total taruhan maksimum per putaran adalah {0}.",
        tieResult: "Pemain yang bertaruh pada Dragon atau Tiger akan kehilangan 50% dari taruhannya jika hasilnya seri.",
        table: {
            headers: ["Pilihan", "Batas Taruhan"],
            dragon: "Dragon",
            tiger: "Tiger",
            tie: "Seri",
        },
    },
};
