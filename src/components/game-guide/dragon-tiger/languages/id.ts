import { baseTermAndConditionId } from "../../base/terms-and-conditions/languages/id";
import { IDragonTigerTranslationResource } from "./types";

export const id: IDragonTigerTranslationResource = {
    common: {
        dragon: "Naga",
        tiger: "Harimau",
        tie: "Seri",
    },
    introduction: {
        title: "Perkenalan",
        description: {
            dragonTiger: "Dragon Tiger adalah permainan kartu sederhana yang mirip dengan Baccarat. ",
            theGame: "Permainan ini dimainkan dengan satu dek standar 52 kartu (tidak termasuk Joker). ",
            thereAre: "Ada 3 pilihan taruhan: Dragon, Tiger, dan Seri.",
        },
    },
    gameRule: {
        title: "Aturan Permainan",
        twoCards: "Dua kartu diambil, satu untuk Dragon dan satu untuk Tiger. ",
        thePlayerBet: "Para pemain bertaruh pada Dragon atau Tiger mana yang akan menang dengan kartu bernilai lebih tinggi. ",
        thePlayerCan:
            'Para pemain juga dapat bertaruh pada opsi "Seri" jika mereka memprediksi Dragon dan Tiger akan memiliki kartu nilai yang sama, terlepas dari jenisnya.',
        theGameDetermines: "Permainan menentukan menang atau kalah dengan membandingkan poin kartu dan bukan suitnya.",
        maximum: " K adalah maksimum, sedangkan Ace adalah minimum. ",
        cardPoint: {
            title: "Nilai poin kartu:",
            ranking:
                "Urutan kartu dari yang terendah hingga tertinggi adalah sebagai berikut: Ace, 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, dan King.",
            aceStands: "Ace berarti 1 poin; Jack 11 poin; Queen berarti 12 poin dan Raja 13 poin.",
            allCards: "Semua kartu dari 2 hingga 10 dihitung dengan nilai nominal.",
        },
        playerCanBet: "Pemain dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan. ",
        allBets: "Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. ",
        note: "Perhatikan, taruhan yang dipasang tidak dapat dibatalkan.",
        theStandard: "Dek standar dengan 52 kartu (tidak termasuk Joker) dikocok setelah setiap putaran.",
    },
    payOuts: {
        title: "Pembayaran",
        description: {
            theWinning: "Jumlah kemenangan dihitung sesuai dengan rasio pembayaran. ",
            thePayout: "Pembayaran termasuk taruhan awal.",
            allWinning: "Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.",
        },
        table: {
            header: {
                options: "Pilihan",
                odds: "Pembayaran",
                betLimit: "Batas Taruhan <br />(Min Maks)",
                maxTotal: "Jumlah Taruhan Maksimum Per Putaran",
            },
        },
        note: "** Catatan: Pemain yang bertaruh pada Dragon atau Tiger akan kehilangan 50% dari taruhannya jika hasilnya seri.",
    },
    termsAndConditions: baseTermAndConditionId,
};
