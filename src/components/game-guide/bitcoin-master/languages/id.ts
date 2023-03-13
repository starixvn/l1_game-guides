import { baseTermAndConditionId } from "../../base/terms-and-conditions/languages/id";
import { IBitcoinMasterTranslationResource } from "./types";
export const id: IBitcoinMasterTranslationResource = {
    introduction: {
        title: "Perkenalan",
        description:
            "Bitcoin Master adalah jenis permainan taruhan baru yang memungkinkan pemain memasang taruhan berdasarkan nilai Bitcoin selama 60 detik berikutnya. Ada 4 pilihan: Atas, Bawah, Genap, Ganjil.",
    },
    gameRules: {
        title: "Aturan Permainan",
        descriptions: [
            "Tujuan permainan ini adalah memprediksi nilai bitcoin terakhir yang dicatat setelah 60 detik (Harga Hasil) adalah angka Ganjil atau Genap, Naik atau Turun dibandingkan dengan nilai awal (Harga Taruhan).",
            "Ada 2 jenis taruhan: Atas/Bawah, Genap/Ganjil. Untuk setiap jenis taruhan, Pemain hanya diperbolehkan memasang taruhan pada satu opsi.",
        ],
        winningConditions: {
            up: "“Harga Hasil” lebih tinggi dari “Harga Taruhan”.",
            down: "“Harga Hasil” lebih rendah dari “Harga Taruhan”.",
            even: "Harga Hasil adalah bilangan genap.<br />+ Catatan: Bilangan genap jika angka satuannya genap.",
            odd: "Harga Hasil adalah angka ganjil.<br />+ Catatan: Bilangan ganjil jika angka satuannya ganjil.",
        },
        example1: {
            title: "<b>Contoh:</b> Dengan jenis taruhan Atas/Bawah  pemain dapat bertaruh pada Atas atau Bawah,tetapi tidak pada keduanya.",
            increaseStake:
                "Pemain dapat meningkatkan jumlah taruhannya dengan memasang taruhan lain dengan pilihan yang sama sebelum waktu taruhan berakhir.",
            maxBet: "Total taruhan maksimum per putaran adalah {0}. Perhatikan, taruhan yang dipasang tidak dapat dibatalkan.",
            otherDescriptions: [
                "Untuk jenis taruhan Atas/Bawah, taruhan akan dikembalikan jika nilai Bitcoin tidak berubah setelah 60 detik, “Harga Hasil” sama dengan “Harga Taruhan”.",
                "Nilai Bitcoin (USD) yang ditampilkan dalam game adalah rata-rata data real-time dari 4 bursa:",
            ],
        },
        example2: {
            title: "Contoh",
            descriptions: [
                "Nilai Bitcoin pada saat mulai (Harga Taruhan) = <b>57,761.13</b>",
                "Nilai Bitcoin pada 60 detik (Harga Hasil) = <b>58,011.08</b>",
            ],
            upDown: {
                title: "Atas/Bawah",
                description: "+ Harga Hasil > Harga Taruhan. Pasang taruhan pada opsi “Atas” akan menang.",
            },
            evenOdd: {
                title: "Genap/Ganjil",
                description: "+ Hasil Harga adalah angka ganjil (58.011). Pasang taruhan pada “Ganjil” akan menang.",
            },
        },
        balancedBettingPool:
            "<b>Kumpulan Taruhan Seimbang:</b> Dengan jenis taruhan yang sama, jika jumlah total taruhan pada setiap opsi berbeda maka jumlah selisih akan dikembalikan kepada pemain yang memiliki tiket taruhan terbaru.",
        example3:
            "<b>Contoh:</b> Dengan tipe taruhan Atas/Bawah, pemain A bertaruh 100 pada ATAS, pemain B bertaruh 40 pada BAWAH, dan C bertaruh 80 pada BAWAH. Untuk menyeimbangkan jumlah total taruhan pada ATAS dan BAWAH, sistem akan mengembalikan 20 ke pemain C.",
    },
    table: {
        betType: "Jenis taruhan",
        options: "Pilihan",
        winningConditions: "Syarat Menang",
        odds: "Odds",
        betLimit: "Batas Taruhan  <br />(Min - Maks)",
        upDown: "Atas/Bawah",
        up: "Atas",
        down: "Bawah",
        evenOdd: "Genap/Ganjil",
        even: "Genap",
        odd: "Ganjil",
    },
    payouts: {
        title: "Pembayaran",
        descriptions: [
            "Jumlah kemenangan dihitung berdasarkan odds taruhan.",
            "Pembayaran termasuk taruhan awal.",
            "Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.",
        ],
    },
    termsAndConditions: {
        ...baseTermAndConditionId,
        ...{
            details: [
                "Perusahaan berhak membatalkan atau membatalkan taruhan apa pun jika hasil Bitcoin resmi tidak dapat diperoleh dalam jangka waktu yang lama atau dibatalkan.",
            ].concat(...baseTermAndConditionId.details),
        },
    },
};
