import { baseTermAndConditionId } from "../../base/terms-and-conditions/languages/id";
import { IFruitSlotTranslationResource } from "./types";

export const id: IFruitSlotTranslationResource = {
    gameRule: {
        title: "Aturan Permainan",
        description: {
            line1: "Pilih nilai chip yang ingin Anda mainkan. Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir.",
            noteText: "Harap diperhatikan bahwa taruhan yang dipasang tidak dapat dibatalkan.",
            theMaxTotalStake: "Total maksimum taruhan per putaran adalah ",
            thePlayerCanPlaceBets:
                "Pemain dapat memasang taruhan pada opsi apa pun yang tersedia; kecuali untuk Besar dan Kecil, pemain bertaruh pada salah satu dari dua opsi taruhan ini.",
            onceBettingTimeExpired: "Setelah waktu taruhan berakhir, sistem akan menghasilkan hasil permainan secara acak.",
            bigSmallResult: "Hasil Besar/Kecil: sistem secara acak menghasilkan angka dalam rentang dari 1 hingga 14",
            bigResult: "Besar: dari 8 hingga 14",
            smallResult: "Kecil: dari 1 hingga 7",
            symbolResult: "Hasil simbol: sistem secara acak menghasilkan simbol yang ditampilkan di atas meja.",
        },
    },
    payOut: {
        title: "Pembayaran",
        winningAmount: "Jumlah kemenangan dihitung berdasarkan odds taruhan.",
        noteText: "Harap dicatat bahwa pembayaran termasuk taruhan awal.",
        allWinningAmount: "Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.",
        bettingOddsTable: "Tabel peluang taruhan:",
        locales: "id",
    },
    lucky: {
        title: "Simbol Keberuntungan",
        line1: "Saat simbol keberuntungan muncul, sistem secara berurutan dan acak menghasilkan <strong style='color: #ff9a00'>2</strong> atau <strong style='color: #ff9a00'>3</strong> lebih banyak hasil; kecuali simbol keberuntungan, dan hasil ekstra yang dihasilkan tidak tumpang tindih.",
        line2: "Hasil tambahan yang dihasilkan digunakan untuk menghitung hasil permainan.",
        line3: "Hasil besar/kecil tidak akan dibuat ulang dalam lucky spin.",
        example: "Contoh",
        exampleText1: "Jika hasil putaran adalah simbol keberuntungan",
        exampleText2: ", sistem secara berurutan menghasilkan dua hasil tambahan.",
        firstAdditional: "Simbol tambahan pertama:",
        secondAdditional: "Simbol tambahan kedua:",
        lemonAndStar: "Simbol lemon dan bintang akan digunakan untuk menghitung hasil pertandingan.",
    },
    main: {
        introduction: "Perkenalan",
        description:
            "Buah Slot adalah mesin slot buah tradisional yang diinovasi untuk memberi pemain pengalaman bermain yang menarik dan mendebarkan.",
    },
    termsAndConditions: baseTermAndConditionId,
};
