import { baseTermAndConditionId } from "../../terms-and-conditions/languages/id";
import { IBaseBaccaratResources } from "./types";

export const baseBaccaratResourcesId: IBaseBaccaratResources = {
    introduction: {
        header: "",
        content: "",
    },
    gameRules: {
        header: "Aturan Permainan",
        getDetails(environment: string | undefined, maxBetMain: number | string) {
            return [];
        },
        table: {
            header: {
                options: "Pilihan",
                descriptions: "Deskripsi",
            },
            contents: [
                {
                    choice: "Player",
                    rule: "Tangan Player akan menang jika total poin Player lebih tinggi dari Banker.",
                },
                {
                    choice: "Banker",
                    rule: "Tangan Banker akan menang jika total poin Banker lebih tinggi dari Player.",
                },
                {
                    choice: "Seri",
                    rule: "Punter menang jika dua tangan (Player dan Banker) telah selesai dengan total yang sama.",
                },
                {
                    choice: "Player Pair",
                    rule: "Punter menang jika dua kartu pertama Player adalah sepasang, terlepas dari jenisnya.",
                },
                {
                    choice: "Banker Pair",
                    rule: "Punter menang jika dua kartu pertama Banker adalah sepasang, terlepas dari jenisnya.",
                },
                {
                    choice: "Besar",
                    rule: "Punter menang jika jumlah total kartu yang telah dibagikan dalam satu putaran adalah 5 dari 6.",
                },
                {
                    choice: "Kecil",
                    rule: "Punter menang jika jumlah total kartu yang telah dibagikan dalam satu putaran adalah 4.",
                },
            ],
        },
    },
    pointRules: {
        header: "Aturan Perhitungan Poin",
        descriptions: {
            paragraph1: {
                cardPointValues: "Nilai poin kartu:",
                details: [
                    "Kartu (2 hingga 9) dihitung berdasarkan nilai nominal.",
                    "10 atau kartu wajah (Jack, Queen, King) memiliki nilai 0, dan Aces memiliki nilai 1",
                ],
            },
            paragraph2: "Ketika total poin melebihi sembilan, digit pertama dari total dijatuhkan, dan digit kedua adalah nilai tangan.",
        },
        examples: {
            firstTwoCard: "Dua Kartu Pertama",
            thirdCard: "Kartu Ketiga",
            totals: "Total",
            basedTotal: "Total Poin Berdasarkan Aturan Baccarat",
        },
    },
    thirdCardRules: {
        header: "Aturan Kartu Ketiga",
        descriptions: [
            "Kartu ketiga akan dibagikan sesuai dengan aturan ketat permainan.",
            "Jika total poin dari dua kartu pertama dari kedua tangan adalah 8 atau 9, ini disebut “Alami” dan tidak ada lagi kartu yang dibagikan, baik Player maupun Banker berdiri.",
        ],
        playerHand: {
            header: "Aturan untuk tangan Player",
            cardsTotal: "Total dua kartu pertama Player",
            action: "Tindakan",
            examples: [
                {
                    twoCardsTotal: "0, 1, 2, 3, 4, 5",
                    action: "Menarik kartu ketiga.",
                },
                {
                    twoCardsTotal: "6 atau 7",
                    action: "Player selalu berdiri.",
                },
                {
                    twoCardsTotal: "8 atau 9",
                    action: "“Alami” dan tidak ada lagi kartu yang dibagikan, baik Player maupun Banker berdiri.",
                },
            ],
        },
        bankerHand: {
            header: "Aturan untuk kartu Banker",
            firstDescription:
                "- Jika tangan Player mendapatkan kartu ketiga maka Banker menarik kartu ketiga sesuai dengan aturan berikut:",
            cardsTotal: "Total dua kartu pertama Banker",
            action: "Banker menarik ketika kartu ketiga Player memiliki nilai poin:",
            examples: [
                {
                    twoCardsTotal: "0, 1, 2",
                    action: "Banker selalu menarik kartu ketiga.",
                },
                {
                    twoCardsTotal: "3",
                    action: "Nilai poin 1, 2, 3, 4, 5, 6, 7, 9, 0 (bukan 8).",
                },
                {
                    twoCardsTotal: "4",
                    action: "Nilai poin dari 2, 3, 4, 5, 6, 7",
                },
                {
                    twoCardsTotal: "5",
                    action: "Nilai poin 4, 5, 6, 7",
                },
                {
                    twoCardsTotal: "6",
                    action: "Nilai poin 6 atau 7",
                },
                {
                    twoCardsTotal: "7",
                    action: "Banker selalu berdiri.",
                },
                {
                    twoCardsTotal: "8 atau 9",
                    action: "“Alami” dan tidak ada lagi kartu yang dibagikan, baik Player maupun Banker berdiri",
                },
            ],
            secondDescription: [
                "Jika total poin dari dua kartu pertama Player adalah 6 atau 7 maka Banker akan berdiri dengan total 6 atau 7, dan menarik total 5 atau kurang.",
            ],
        },
    },
    payouts: {
        header: "Pembayaran",
        descriptions: {
            details: [
                "Jumlah kemenangan dihitung berdasarkan odds taruhan.",
                "Pembayaran termasuk taruhan awal.",
                "Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.",
            ],
            noted: "<strong>Catatan:</strong> Semua taruhan Player dan Banker akan dikembalikan jika hasilnya seri.",
            options: "Pilihan",
            odds: "Odds",
            betLimit: "Batas Taruhan </br>(Min - Maks)",
            player: "Player",
            banker: "Banker",
            big: "Besar",
            small: "Kecil",
            tie: "Seri",
            playerPair: "Player Pair",
            bankerPair: "Banker Pair",
        },
    },
    termsAndConditions: baseTermAndConditionId,
};
