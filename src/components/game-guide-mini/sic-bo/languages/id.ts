import { ISicBoTranslationResource } from "./types";

export const id: ISicBoTranslationResource = {
    introduction:
        "Sic bo adalah permainan dadu yang sangat populer di Asia. Permainan ini dimainkan dengan tiga dadu berisi enam sisi. Setiap sisi dadu memiliki 1 hingga 6 titik yang sesuai dengan 1 hingga 6 poin. ",
    winningCondition: {
        title: "Kondisi Menang",
        description: {
            number: "Angka spesifik: Menang jika angka yang dipilih muncul dalam hasil permainan. ",
            big: "Besar: Menang jika total poin dari tiga dadu adalah antara 11 hingga 17.",
            small: "Kecil: Menang jika total poin dari tiga dadu adalah antara 4 hingga 10.",
            note: "<strong>Catatan:</strong> Besar atau Kecil akan kalah jika ada triple (tiga dadu dengan angka yang sama) muncul dalam hasil permainan.",
        },
    },
    betLimit: {
        title: "Batas taruhan",
        description:
            "Taruhan minimum dan maksimum harus berada di antara nilai minimum hingga maksimum, dan total taruhan maksimum per putaran adalah nilai maksimum.",
    },
};
