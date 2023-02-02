import { baseTermAndConditionId } from "../../base/terms-and-conditions/languages/id";
import { ISicBoTranslationResource } from "./types";
export const id: ISicBoTranslationResource = {
    introduction: {
        title: "Perkenalan",
        description:
            "Sic Bo adalah permainan dadu kasino yang sangat populer di Asia. Permainan ini dimainkan dengan tiga dadu standar. Tujuan dari permainan ini adalah untuk memprediksi hasil lemparan dadu. Pemain dapat bertaruh pada hasil dadu tertentu dan nilai total dadu.",
    },
    gameRules: {
        title: "Aturan Permainan",
        descriptions: [
            "Pilih nilai chip yang ingin Anda mainkan. Pemain dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.",
            "Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. Perhatikan, taruhan yang dipasang tidak dapat dibatalkan.",
            "Setelah waktu taruhan telah berakhir, cangkir dadu akan dihapus dan hasilnya akan ditampilkan.",
        ],
        maximum: "Total taruhan maksimum per putaran adalah {0}",
        otherDescriptions: [
            "Jumlah total taruhan dari semua pemain yang ditampilkan pada setiap opsi taruhan hanya untuk referensi. Untuk pasar dan mata uang yang berbeda, totalnya dikonversi berdasarkan tarif internal yang ditetapkan oleh perusahaan.",
        ],
    },
    bettingOptions: {
        title: "Opsi Taruhan",
        description: {
            big: [
                "Taruhan pada skor total tiga dadu adalah antara 11 dan 17 poin.",
                "Jika tiga dadu memiliki nilai yang sama, Anda kehilangan taruhan ini.",
            ],
            small: [
                "Taruhan pada skor total tiga dadu adalah antara 4 dan 10 poin.",
                "Jika tiga dadu memiliki nilai yang sama, Anda kehilangan taruhan ini.",
            ],
            anyTriple: "Untuk memenangkan taruhan ini, ketiga dadu harus menunjukkan angka yang sama.",
            specificNumber:
                "Bertaruh pada nomor tertentu dari 1 hingga 6. Jika nomor yang dipilih telah muncul di antara tiga dadu, Anda menang",
            totalPoints:
                "Bertaruh pada skor total tiga dadu. Pemain memprediksi apakah skor total tiga dadu sama dengan angka yang dipilih.",
        },
    },
    table: {
        options: "Pilihan",
        choices: "Pilihan",
        description: "Keterangan",
        odds: "Odds",
        betLimit: "Batas Taruhan (Min - Maks)",
        big: "Besar",
        small: "Kecil",
        anyTriple: "Triple apa saja",
        specificNumber: "Nomor Spesifik",
        totalPoints: "Jumlah Poin",
        betOnAnyNumber: "Bertaruh pada nomor apa pun dari 1 hingga 6",
        betOnTotalPoints: "Bertaruh pada nomor apa saja dari 4 hingga 17",
        numberAppearsOnce: "{0} jika nomor yang dipilih muncul satu kali.",
        numberAppearsTwice: "{0} jika nomor yang dipilih muncul dua kali.",
        numberAppearsThreeTimes: "{0} jika angka yang dipilih muncul pada ketiga dadu.",
    },
    payouts: {
        title: "Pembayaran",
        descriptions: [
            "Jumlah kemenangan dihitung berdasarkan odds taruhan. <b>Catatan,</b>  Pembayaran termasuk taruhan awal.",
            "Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.",
        ],
    },
    md5: {
        step1ImageUrl: "/static/images/sicbo/md5_step1_id.png",
        step2ImageUrl: "/static/images/sicbo/md5_step2_id.png",
        note: "Catatan: Dari kiri ke kanan, {3,2,1} sesuai dengan nilai tiga dadu.",
    },
    termsAndConditions: baseTermAndConditionId,
};
