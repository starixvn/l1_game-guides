import { baseTermAndConditionId } from "../../../base/terms-and-conditions/languages/id";
import { IKenoTranslationResource } from "../../keno-max/languages/types";

export const id: IKenoTranslationResource = {
    introduction: {
        title: "Perkenalan",
        description:
            "Keno Mini / Keno Mini 2 adalah RNG Keno dengan 40 bola. Ada 10 bola yang diambil secara acak dari 40 bola bernomor mulai dari 1 sampai 40. Pemain memasang taruhan pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan. Jumlah total 10 bola bernomor yang ditarik akan menentukan menang atau kalah pemain.",
    },
    gameRules: {
        title: "Aturan Permainan",
        description: {
            lines: [
                "Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. Perhatikan, taruhan yang dipasang tidak dapat dibatalkan.",
                "Setelah waktu taruhan berakhir, hasilnya akan ditampilkan.",
            ],
            maximum: "Total taruhan maksimum per putaran adalah {0}",
            otherLine: undefined,
        },
    },
    bettingOptions: {
        title: "Opsi Taruhan",
        bigSmall: {
            title: "Besar/Kecil",
            descriptions: [
                "<b>Besar:</b> Jumlah 10 bola bernomor yang diambil adalah >= 206",
                "<b>Kecil:</b> Jumlah 10 bola bernomor yang diambil adalah <= 205",
            ],
            winningText: "Pemain yang bertaruh pada KECIL akan menang.",
        },
        oddEven: {
            title: "Ganjil/Genap",
            descriptions: [
                "<b>Ganjil:</b> jumlah 10 bola bernomor yang diambil adalah bilangan ganjil.",
                "<b>Genap:</b> jumlah 10 bola bernomor yang diambil adalah bilangan genap.",
            ],
            winningText: "Pemain yang bertaruh pada GANJIL akan menang.",
        },
        fiveElement: {
            title: "Lima Elemen (Emas, Kayu, Air, Api, Bumi)",
            descriptions: [
                "<b>Emas:</b> Jumlah 10 bola bernomor yang diambil, berkisar antara 55 hingga 163.",
                "<b>Kayu:</b> Jumlah 10 bola bernomor yang diambil, berkisar antara 164 hingga 187.",
                "<b>Air:</b> Jumlah 10 bola bernomor yang diambil, berkisar antara 188 hingga 222.",
                "<b>Api:</b> Jumlah 10 bola bernomor yang diambil, berkisar antara 223 hingga 246.",
                "<b>Bumi:</b> Jumlah 10 bola bernomor yang diambil, berkisar antara 247 hingga 355.",
            ],
            winningText: "Pemain yang bertaruh pada API akan menang.",
        },
        example: {
            description: "<b>Contoh:</b> Set 10 bola bernomor yang diambil secara acak dari 40 bola bernomor",
            drawResult: "Hasil Undian",
            totalSum: "Jumlah Total",
        },
    },
    payouts: {
        title: "Pembayaran",
        descriptions: [
            "Jumlah kemenangan dihitung berdasarkan odds taruhan.",
            "Pembayaran termasuk taruhan awal.",
            "Semua jumlah pemenang langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.",
        ],
        options: "Pilihan",
        odds: "Odds",
        betLimit: "Batas Taruhan",
        min: "Min",
        max: "Maks",
        big: "Besar",
        small: "Kecil",
        odd: "Ganjil",
        even: "Genap",
        gold: "Emas",
        wood: "Kayu",
        water: "Air",
        fire: "Api",
        earth: "Bumi",
    },
    md5: {
        image1: "/static/images/keno-mini/md5_step1_id.png?v=3",
        image2: "/static/images/keno-mini/md5_step2_id.png",
        note: "Catatan: 237 adalah total poin dari hasil pertandingan.",
    },
    termsAndConditions: baseTermAndConditionId,
};
