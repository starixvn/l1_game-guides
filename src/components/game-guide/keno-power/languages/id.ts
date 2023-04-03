import { IPowerKenoTranslationResource } from "./types";

export const id: IPowerKenoTranslationResource = {
    common: {
        bettypes: "Jenis Taruhan",
        options: "Pilihan",
        teamBlueRed: "Tim Biru/Tim Merah",
        sumBigSmall: "Jumlah Besar/Kecil",
        sumEvenOdd: "Jumlah Genap/Ganjil",
        teamBlueBigSmall: "Tim Biru Besar/Kecil",
        teamRedBigSmall: "Tim Merah Besar/Kecil",
        teamBlue: "Tim Biru",
        teamRed: "Tim Merah",
        big: "Besar",
        small: "Kecil",
        odd: "Genap",
        even: "Ganjil",
    },
    main: {
        introduction: "Perkenalan",
        description:
            '{0} terdiri dari 2 set angka, satu untuk "Tim Biru", dan satu lagi untuk "Tim Merah", masing-masing set berisi 80 angka (dari 01 hingga 80). Sistem akan secara acak mengambil 20 angka (tanpa duplikat) untuk setiap tim. Tujuan permainan ini adalah memprediksi total skor dari angka yang ditarik.',
    },
    gameRule: {
        title: "Aturan Permainan",
        details: [
            "Pastikan Anda bertaruh dengan jumlah yang nyaman bagi Anda.",
            "Pemain dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.",
            "Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. Perhatian, taruhan yang dipasang tidak dapat dibatalkan.",
            "Total taruhan maksimum per putaran adalah {0}",
        ],
        bettingOptions: {
            winningConditions: "Syarat Menang",
            teamBlueDescription:
                "Pemain menang jika total poin Tim Biru > Tim Merah. <br />+ Semua taruhan akan dikembalikan jika total poin kedua tim sama.",
            teamRedDescription:
                "Pemain menang jika total poin Tim Merah > Tim Biru. <br />+ Semua taruhan akan dikembalikan jika total poin kedua tim sama.",
            sumBigDescription: "Pemain menang jika total poin kedua tim >= 1621",
            sumSmallDescription: "Pemain menang jika total poin kedua tim < 1621",
            sumEvenDescription: "Pemain menang jika total poin kedua tim adalah angka genap.",
            sumOddDescription: "Pemain menang jika total poin kedua tim adalah angka ganjil.",
            teamBlueBigDescription: "Pemain menang jika total poin Tim Biru >= 811",
            teamBlueSmallDescription: "Pemain menang jika total poin tim Biru < 811",
            teamRedBigDescription: "Pemain menang jika total poin Tim Merah >= 811",
            teamRedSmallDescription: "Pemain menang jika total poin Tim Merah < 811",
        },
    },
    payOut: {
        title: "Pembayaran",
        description1: "Jumlah kemenangan dihitung berdasarkan odds taruhan.",
        description2: "Pembayaran termasuk taruhan awal.",
        description3: "Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.",
        odds: "Odds",
        betLimit: "Batas Taruhan <br />(Min - Maks)",
    },
    md5noted: "Tercatat: 899 dan 807 masing-masing adalah hasil dari Tim Biru dan Tim Merah.",
};
