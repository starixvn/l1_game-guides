import { IPowerSoccerTranslationResource } from "./types";

export const id: IPowerSoccerTranslationResource = {
    common: {
        bettypes: "Jenis Taruhan",
        options: "Pilihan",
        teamBlue: "Tim Biru",
        teamRed: "Tim Merah",
        odd: "Ganjil",
        even: "Genap",
        firstHalf: "Babak Pertama",
        fullTime: "Waktu penuh",
        fullTimeLive: "Purna Waktu (Langsung)",
        over: "Besar",
        under: "Kecil",
    },
    main: {
        introduction: "Perkenalan",
        description:
            "{0} terdiri dari 2 set angka, satu untuk “Tim Biru”, dan satu lagi untuk “Tim Merah”, \
            masing-masing set berisi 80 angka (dari 01 hingga 80). Sistem akan secara acak menarik \
            20 nomor (tidak ada duplikat) untuk setiap tim, dimana 10 nomor diambil untuk “Babak Pertama” \
            dan 10 nomor diambil untuk “Penuh Waktu”. Tujuan permainan ini adalah untuk memprediksi skor total dari angka yang ditarik untuk masing-masing tim.",
    },
    gameRule: {
        title: "Aturan Permainan",
        details: [
            "Pastikan Anda bertaruh jumlah yang nyaman bagi Anda..",
            "Pemain dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.",
            "Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. Perhatikan, taruhan yang dipasang tidak dapat dibatalkan.",
            "Total taruhan maksimum per putaran adalah {0}",
        ],
        bettingOptions: {
            text: "Opsi Taruhan",
            description1:
                'Setiap putaran memiliki dua hasil imbang, dengan hasil imbang pertama untuk hasil "Babak Pertama" dan yang kedua untuk hasil "Penuh Waktu".',
            description2: "Pemain akan memiliki dua interval berbeda untuk memasang taruhan:",
            description3:
                "Pasang taruhan sebelum nomor apa pun ditarik untuk hasil “Babak Pertama”, Anda dapat memasang taruhan pada “Babak Pertama” dan “Penuh Waktu”, \
                yang berlaku untuk semua jenis taruhan. Rasio pembayaran tetap dan tetap sama di semua putaran permainan.",
            description4:
                ' <strong>Taruhan Langsung</strong>: Pasang taruhan tepat setelah hasil Babak Pertama untuk kedua tim diumumkan. \
                Perhatikan, hanya tempatkan taruhan di "Penuh Waktu". Rasio pembayaran akan berubah berdasarkan hasil “Babak Pertama”.',
            winningConditions: "Syarat Menang",

            firstHalfTeamBlueDescription:
                "Pemain menang jika total poin dari 10 angka yang diambil secara acak untuk tim Biru > tim Merah. <br />+ Semua taruhan akan dikembalikan jika total poin kedua tim sama.",
            fullTimeTeamBlueDescription:
                "Pemain menang jika total poin (Babak Pertama + Waktu Penuh) dari tim Biru > tim Merah. <br />+ Semua taruhan akan dikembalikan jika total poin kedua tim sama.",

            firstHalfTeamRedDescription:
                "Pemain menang jika total poin dari 10 angka yang diambil secara acak untuk tim Merah > tim Biru. <br />+ Semua taruhan akan dikembalikan jika total poin kedua tim sama.",
            fullTimeTeamRedDescription:
                "Pemain menang jika total poin (Babak Pertama + Waktu Penuh) dari tim Merah > tim Biru. <br />+ Semua taruhan akan dikembalikan jika total poin kedua tim sama.",

            firstHalfOverDescription: "Pemain menang jika total poin (di Babak Pertama) kedua tim >= 811",
            fullTimeOverDescription: "Pemain menang jika total poin (Babak Pertama + Waktu Penuh) dari kedua tim >= 1621",

            firstHalfUnderDescription: "Pemain menang jika total poin (di Babak Pertama) kedua tim < 811",
            fullTimeUnderDescription: "Pemain menang jika total poin (Babak Pertama + Waktu Penuh) dari kedua tim < 1621",

            firstHalfEvenDescription: "Pemain menang jika total poin (di Babak Pertama) dari kedua tim adalah angka genap.",
            fullTimeEvenDescription: "Pemain menang jika total poin (Babak Pertama + Waktu Penuh) dari kedua tim adalah angka genap.",

            firstHalfOddnDescription: "Pemain menang jika total poin (di Babak Pertama) kedua tim adalah angka ganjil.",
            fullTimeOddDescription: "Pemain menang jika total poin (Babak Pertama + Waktu Penuh) dari kedua tim adalah angka ganjil.",
        },
    },
    payOut: {
        title: "Pembayaran",
        description1: "Jumlah kemenangan dihitung berdasarkan peluang taruhan.",
        description2: "Pembayaran termasuk taruhan awal.",
        description3: "Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.",
        odds: "Peluang",
        betLimit: "Pembayaran<br />(Min-Maks)",
        firstHalfPayout: "a) Pasang taruhan sebelum nomor apa pun ditarik untuk hasil “Babak Pertama”.",
        liveBettingPayout: {
            text: "b) Taruhan Langsung",
            mainDescription:
                "Untuk pilihan taruhan <strong>Tim Biru/Merah - Penuh Waktu (Langsung)</strong> dan  <strong>Atas/Bawah - Penuh Waktu (Langsung)",
            description1: 'Rasio pembayaran akan bervariasi tergantung pada hasil "Babak Pertama" dari kedua tim',
            description2: "Batas maksimum taruhan akan berubah sesuai dengan rasio pembayaran.",
            highLightDescription1:
                '<strong>Tim Biru/Merah - Penuh Waktu (Langsung)</strong>:Pembayaran hanya tersedia ketika perbedaan skor total antara Tim Biru dan Tim Merah di "Babak Pertama", antara -150 dan 150',
            highLightDescription2:
                "<strong>Besar/Kecil - Purna Waktu (Langsung)</strong>: Pembayaran hanya tersedia ketika skor total di “Babak Pertama” kedua tim antara 661 dan 980",
            min: "Min",
            max: "Maks ",
            betLimit: "Batas Taruhan",
            maximumBetLimit: "Batas maksimum taruhan akan berubah sesuai dengan rasio pembayaran.",
        },
    },
    md5noted:
        "Catatan: <span class={0}>363</span> dan  <span class={1}>467</span> masing-masing adalah hasil babak pertama dari Tim Biru dan Tim Merah",
};
