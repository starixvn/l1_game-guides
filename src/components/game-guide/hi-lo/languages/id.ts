import { IHiLoTranslationResource } from "./types";
export const id: IHiLoTranslationResource = {
    introduction: {
        title: "Perkenalan",
        description:
            "Hi-Lo adalah permainan kartu populer dengan aturan paling sederhana. Permainan ini dimainkan dengan setumpuk 52 kartu standar (tidak termasuk Joker). Tujuan dari permainan ini adalah untuk menebak apakah kartu berikutnya yang akan dibagikan akan lebih tinggi atau lebih rendah dari kartu yang sekarang.",
    },
    gameRules: {
        title: "Aturan Permainan",
        description: {
            line1: "Pilih jumlah taruhan yang paling cocok untuk Anda. Klik atau ketuk tombol “Bermain” untuk memulai permainan.",
            line2: "Sistem akan secara acak mengambil kartu pertama (kartu dasar) dan Pemain akan memilih apakah kartu berikutnya (kartu hasil) lebih tinggi (Hi) atau lebih rendah (Lo).",
            line3: "Setelah setiap giliran, jika hasilnya menang, Pemain dapat memutuskan apakah akan berhenti atau melanjutkan permainan pada giliran berikutnya.",
            subLines: [
                "Klik atau ketuk tombol “Ambil” untuk berhenti bermain dan dapatkan pembayaran.",
                "Melanjutkan permainan pada giliran berikutnya, kartu hasil putaran akan menjadi kartu dasar pada putaran berikutnya, dan pembayaran putaran akan menjadi jumlah taruhan pada putaran berikutnya.",
            ],
        },
        example: {
            title: "Contoh",
            description: {
                introduction:
                    "Sistem secara acak mengambil kartu pertama (kartu dasar) = {0}. Pemain memasang taruhan 100 pada opsi “Rendah”.",
                result: {
                    detail: "Hasil Kartu: {0} => Pemain menang dan pembayaran = 163. Ada 2 pilihan:",
                    option1: "Klik atau ketuk tombol “Ambil” untuk berhenti bermain => Pemain mendapat 163 ke akun saldo.",
                    option2:
                        "Melanjutkan permainan pada giliran berikutnya, kemudian Pemain menebak apakah kartu selanjutnya akan lebih tinggi atau lebih rendah dari kartu saat ini ({0}), dengan jumlah taruhan = 163",
                },
                note: {
                    completeTurn: "Pemain memiliki waktu 2 menit untuk menyelesaikan giliran (putuskan untuk memilih Hi atau Lo).",
                    autoSettle: {
                        detail: "Jika Pemain tidak dapat menyelesaikan giliran dalam waktu 2 menit:",
                        subLines: [
                            "Sistem akan secara acak memilih Hi atau Lo untuk giliran pertama yang telah diklik atau diketuk oleh Pengguna pada tombol “Bermain”.",
                            "Giliran lain akan diperlakukan sebagai “Ambil”.",
                        ],
                    },
                    shuffleCard: "Kartu akan dikocok setelah setiap putaran.",
                },
            },
        },
    },
    cardValues: {
        title: "Nilai Kartu",
        line1: "Nilai kartu diurutkan dari yang terendah ke yang tertinggi dengan urutan sebagai berikut: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), King (K), dan As (A)",
        line2: "Semua setelan - hati ({0}), sekop ({1}), wajik ({2}), dan klub ({3}) memiliki nilai yang sama.",
        note: {
            title: "Catatan",
            descriptions: [
                "Jika Kartu Dasar dan Hasil Kartu peringkatnya sama maka hasilnya Seri. Pemain terus memainkan giliran berikutnya.",
                "Jika Kartu Dasarnya adalah 2 atau As. Pemain hanya akan memiliki satu opsi untuk dipilih, Tinggi untuk 2 dan Rendah untuk As dan hasilnya Seri untuk giliran itu.",
            ],
        },
    },
    payout: {
        title: "Pembayaran",
        descriptions: [
            "Pembayaran termasuk taruhan awal.",
            "Pembayaran untuk menebak dengan benar apakah kartu berikutnya akan lebih tinggi atau lebih rendah dapat bervariasi setiap putaran.",
        ],
    },
};
