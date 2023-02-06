import { IHiLoMiniTranslationResource } from "./types";
export const id: IHiLoMiniTranslationResource = {
    introduction:
        "Permainan ini dimainkan dengan setumpuk 52 kartu standar (tidak termasuk Joker). Tujuan dari permainan ini adalah untuk menebak apakah kartu berikutnya yang akan dibagikan akan lebih tinggi atau lebih rendah dari kartu yang sekarang.",
    winningCondition: {
        title: "Syarat Menang",
        description: {
            thePlayerCan:
                "Setelah setiap giliran, jika hasilnya menang, Pemain dapat memutuskan apakah akan berhenti atau melanjutkan permainan pada giliran berikutnya.",
            collect: "Klik atau ketuk tombol “Ambil” untuk berhenti bermain dan dapatkan pembayaran.",
            playContinue:
                "Melanjutkan permainan pada giliran berikutnya, kartu hasil putaran akan menjadi kartu dasar pada putaran berikutnya, dan pembayaran putaran akan menjadi jumlah taruhan pada putaran berikutnya.",
            unfinishedGame:
                "Pemain memiliki waktu 2 menit untuk menyelesaikan giliran (putuskan untuk memilih Hi atau Lo). Jika Pemain tidak dapat menyelesaikan giliran dalam waktu 2 menit:",
            firstTurn:
                "Sistem akan secara acak memilih Hi atau Lo untuk giliran pertama yang telah diklik atau diketuk oleh Pengguna pada tombol “Mainkan”.",
            otherTurns: "Giliran lain akan diperlakukan sebagai “Ambil”.",
            arrangeCards:
                "Nilai kartu diurutkan dari yang terendah ke yang tertinggi dengan urutan sebagai berikut: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack (J), Queen (Q), King (K), dan As (A)",
            allTheSuits: "Semua setelan -",
            heart: " hati (",
            spade: "), sekop (",
            diamond: "), wajik (",
            andClub: "), dan klub (",
            equalValue: ") memiliki nilai yang sama.",
        },
    },
    payout: {
        title: "Pembayaran",
        description: "Pembayaran untuk menebak dengan benar apakah kartu berikutnya akan lebih tinggi atau lebih rendah dapat bervariasi setiap putaran.",
    },
};
