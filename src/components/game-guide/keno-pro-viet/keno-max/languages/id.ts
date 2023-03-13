import { baseTermAndConditionId } from "../../../base/terms-and-conditions/languages/id";
import { IKenoTranslationResource } from "./types";
export const id: IKenoTranslationResource = {
    introduction: {
        title: "Perkenalan",
        description:
            "Mega Keno / Mega Keno 2 / Keno North / Keno South /Keno West / Keno East adalah RNG Keno dengan 80 bola. Ada 20 bola yang diambil secara acak dari 80 bola bernomor mulai dari 1 sampai 80. Pemain memasang taruhan pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan. Jumlah total dari 20 bola bernomor yang ditarik akan menentukan menang atau kalah pemain.",
    },
    gameRules: {
        title: "Aturan Permainan",
        description: {
            lines: [
                "Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. Catatan, taruhan yang dipasang tidak dapat dibatalkan.",
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
                "<b>Besar:</b> Jumlah 20 bola bernomor yang diambil adalah >= 811",
                "<b>Kecil:</b> Jumlah 20 bola bernomor yang diambil adalah <= 810",
            ],
            winningText: "Pemain yang bertaruh pada BESAR akan menang.",
        },
        oddEven: {
            title: "Ganjil/Genap",
            descriptions: [
                "<b>Ganjil:</b> jumlah 20 bola bernomor yang diambil adalah bilangan ganjil.",
                "<b>Genap:</b> jumlah 20 bola bernomor yang diambil adalah bilangan genap.",
            ],
            winningText: "Pemain yang bertaruh pada GENAP akan menang.",
        },
        fiveElement: {
            title: "Lima Elemen (Emas, Kayu, Air, Api, Bumi)",
            descriptions: [
                "<b>Emas:</b> Jumlah 20 bola bernomor yang diambil, berkisar antara 210 hingga 695.",
                "<b>Kayu:</b> Jumlah 20 bola bernomor yang diambil, berkisar antara 696 hingga 763.",
                "<b>Air:</b> Jumlah 20 bola bernomor yang diambil, berkisar antara 764 hingga 855.",
                "<b>Api:</b> Jumlah 20 bola bernomor yang diambil, berkisar antara 856 hingga 923.",
                "<b>Bumi:</b> Jumlah 20 bola bernomor yang diambil, berkisar antara 924 hingga 1410.",
            ],
            winningText: "Pemain yang bertaruh pada KAYU akan menang.",
        },
        example: {
            description: "<b>Contoh:</b> Set 20 bola bernomor yang diambil secara acak dari 80 bola bernomor",
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
        image1: "/static/images/mega-keno/md5_step1_id.png?v=3",
        image2: "/static/images/mega-keno/md5_step2_id.png?v=3",
        note: "Catatan: 363 adalah total poin dari hasil pertandingan.",
    },
    termsAndConditions: baseTermAndConditionId,
};
