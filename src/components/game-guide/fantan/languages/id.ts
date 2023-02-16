import { IFanTanTranslationResource } from "./types";
export const id: IFanTanTranslationResource = {
    introduction: {
        title: "Perkenalan",
        description:
            "Fan Tan adalah permainan Casino yang cukup populer di seluruh Asia. Ini dimainkan dengan 150 manik-manik putih, ada 14 opsi taruhan di atas meja, dan Pemain akan memprediksi dan memasang taruhan pada opsi taruhan mana yang akan menang.",
    },
    gameRules: {
        title: "Aturan permainan",
        description:
            "Di awal putaran, Dealer akan menggunakan cangkir untuk mengambil manik-manik dalam jumlah acak di atas meja. Saat waktu taruhan selesai, Dealer akan memisahkan manik-manik yang diambil menjadi empat kelompok sampai manik-manik yang tersisa sama atau kurang dari 4 – dan itu adalah hasil kemenangan. ",
        example: {
            title: "Contoh",
            resultDetails: [
                "Jumlah manik-manik yang diambil secara acak adalah 30 dan dipisahkan menjadi empat kelompok:<p>7 x 4 + 2 = 30. Manik-manik yang tersisa adalah 2 => hasil putarannya adalah 2</p>",
                "Jumlah manik-manik yang diambil secara acak adalah 40 dan dipisahkan menjadi empat kelompok:<p>9 x 4 + 4 = 40. Manik-manik yang tersisa adalah 4 => hasil putarannya adalah 4</p>",
            ],
            haveOptions: undefined,
            descriptions: [
                "Pemain memilih nilai chip dan menempatkannya pada opsi taruhan yang diinginkan. Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. Perhatikan bahwa, taruhan yang dipasang tidak dapat dibatalkan.",
                "Pemain dapat memasang taruhan pada opsi apa pun yang tersedia kecuali Ganjil dan Genap, pemain hanya dapat bertaruh pada Ganjil atau Genap.",
            ],
            maxBet: "Total taruhan maksimum per putaran adalah {0}",
        },
        winningCondition: {
            odd: "Manik-manik yang tersisa adalah angka Ganjil",
            even: "Manik-manik yang tersisa adalah bilangan genap",
            fan1: "Manik-manik yang tersisa adalah 1",
            fan2: "Manik-manik yang tersisa adalah 2",
            fan3: "Manik-manik yang tersisa adalah 3",
            fan4: "Manik-manik yang tersisa adalah 4",
            kwok12: "Manik-manik yang tersisa adalah 1 atau 2",
            kwok23: "Manik-manik yang tersisa adalah 2 atau 3",
            kwok34: "Manik-manik yang tersisa adalah 3 atau 4",
            kwok41: "Manik-manik yang tersisa adalah 1 atau 4",
            chun234: "Manik-manik yang tersisa adalah 2, 3 atau 4",
            chun134: "Manik-manik yang tersisa adalah 1, 3 atau 4",
            chun124: "Manik-manik yang tersisa adalah 1, 2 atau 4",
            chun123: "Manik-manik yang tersisa adalah 1, 2 atau 3",
        },
    },
    table: {
        betType: "Jenis Taruhan",
        betOption: "Opsi Taruhan",
        winningCondition: "Kondisi Menang",
        odds: "Odds",
        betLimit: "Batas Taruhan (Min-Max)",
        oddEven: "Ganjil genap",
        odd: "Ganjil",
        even: "Genap",
        fan: "Fan",
        fan1: "1 Fan",
        fan2: "2 Fan",
        fan3: "3 Fan",
        fan4: "4 Fan",
        kwok: "Kwok",
        chun: "Chun",
    },
    payouts: {
        title: "Pembayaran",
        descriptions: [
            "Jumlah kemenangan dihitung berdasarkan odds taruhan. <p><b>Catatan:</b> pembayaran termasuk taruhan awal.</p>",
            "Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.",
        ],
    },
    md5: {
        example: "<b>Contoh:</b> periksa keaslian dan transparansi hasil permainan.",
        note: "<b>Catatan:</b> 40 sesuai dengan jumlah acak manik-manik yang diambil pada awal putaran permainan",
        step1: "<b>Langkah 1:</b> Salin kunci MD5 sebelum hasilnya diumumkan.",
        step2: "<b>Langkah 2:</b> Salin Hasil setelah dipublikasikan.",
        step3: `<b>Langkah 3:</b> Buka <a href="https://md5.services/" target="_blank" rel="noopener noreferrer">https://md5.services/</a> dan tempel Hasil ke kotak MD5.`,
        step4: "<b>Langkah 4:</b> Tekan tombol “hash darling, hash!”dan bandingkan rangkaian daftar periksa MD5 yang baru dibuat dengan Kunci MD5 di Langkah 1.",
    },
};
