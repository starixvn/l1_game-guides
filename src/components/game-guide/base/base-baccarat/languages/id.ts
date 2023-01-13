import { baseTermAndConditionId } from "../../terms-and-conditions/languages/id";
import { IBaseBaccaratResources } from "./types";

export const baseBaccaratResourcesId: IBaseBaccaratResources = {
    introduction: {
        header: "",
        content: "",
    },
    gameRules: {
        header: "Aturan Permainan",
        details: [
            "Secara bawaan, 6 kartu akan ditarik di awal setiap putaran. Player dan Banker, masing-masing tangan akan dimulai dengan 2 kartu menghadap ke bawah.",
            "Kartu ketiga akan dibagikan sesuai dengan total poin dari 2 kartu pertama di masing-masing tangan.",
            "Jika putaran berakhir dengan total kurang dari 6 kartu yang dibagikan, kartu yang tersisa akan digunakan untuk putaran berikutnya.",
            "Permainan menentukan menang atau kalah dengan membandingkan total poin dari semua kartu di masing-masing tangan dan tangan yang menang adalah yang paling dekat dengan total 9 poin.",
            "Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. Perhatikan, taruhan yang dipasang tidak dapat dibatalkan.",
            "Total taruhan maksimum per putaran adalah {0}",
        ],
        table: {
            header: {
                options: "Pilihan",
                descriptions: "Deskripsi",
            },
            contents: [
                {
                    choice: "Pemain",
                    rule: "Tangan Player akan menang jika total poin Player lebih tinggi dari Banker.",
                },
                {
                    choice: "Bankir",
                    rule: "Tangan Banker akan menang jika total poin Banker lebih tinggi dari Player.",
                },
                {
                    choice: "Mengikat",
                    rule: "Punter menang jika dua tangan (Pemain dan Bankir) telah selesai dengan total yang sama.",
                },
                {
                    choice: "Pasangan pemain",
                    rule: "Punter menang jika dua kartu pertama Pemain adalah sepasang, terlepas dari jenisnya.",
                },
                {
                    choice: "Pasangan bankir",
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
            totals: "Totals",
            basedTotal: "Total Poin Berdasarkan Aturan Baccarat",
        },
    },
    thirdCardRules: {
        header: "Aturan Kartu Ketiga",
        descriptions: [
            "Kartu ketiga akan dibagikan sesuai dengan aturan ketat permainan.",
            "Jika total poin dari dua kartu pertama dari kedua tangan adalah 8 atau 9, ini disebut “Alami” dan tidak ada lagi kartu yang dibagikan, baik pemain maupun bankir berdiri.",
        ],
        playerHand: {
            header: "Aturan untuk tangan Pemain",
            cardsTotal: "Total dua kartu pertama pemain",
            action: "Tindakan",
            examples: [
                {
                    twoCardsTotal: "0, 1, 2, 3, 4, 5",
                    action: "Menarik kartu ketiga.",
                },
                {
                    twoCardsTotal: "6 atau 7",
                    action: "Pemain selalu berdiri.",
                },
                {
                    twoCardsTotal: "8 atau 9",
                    action: "“Alami” dan tidak ada lagi kartu yang dibagikan, baik pemain maupun bankir berdiri.",
                },
            ],
        },
        bankerHand: {
            header: "Aturan untuk kartu Banker",
            firstDescription: "Jika tangan Player mendapatkan kartu ketiga maka Banker menarik kartu ketiga sesuai dengan aturan berikut:",
            cardsTotal: "Total dua kartu pertama Banker",
            action: "Banker menarik ketika kartu ketiga Player memiliki nilai poin:",
            examples: [
                {
                    twoCardsTotal: "0, 1, 2",
                    action: "Bankir selalu menarik kartu ketiga.",
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
                    action: "Bankir selalu berdiri.",
                },
                {
                    twoCardsTotal: "8 atau 9",
                    action: "“Alami” dan tidak ada lagi kartu yang dibagikan, baik pemain maupun bankir berdiri",
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
                "Jumlah kemenangan dihitung sesuai dengan rasio pembayaran.",
                "Pembayaran termasuk taruhan awal.",
                "Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.",
            ],
            noted: "<strong>Catatan:</strong> Semua taruhan Player dan Banker akan dikembalikan jika hasilnya seri.",
            options: "Pilihan",
            odds: "Odds",
            betLimit: "Batas Taruhan  <br></br>(Min Maks)",
            player: "Player",
            banker: "Banker",
            big: "Besar",
            small: "Kecil",
            tie: "Mengikat",
            playerPair: "Pasangan Player",
            bankerPair: "Pasangan Banker",
        },
    },
    termsAndConditions: baseTermAndConditionId,
};
