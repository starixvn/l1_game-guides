import { ISeDieMiniTranslationResource } from "./types";

export const id: ISeDieMiniTranslationResource = {
    introduction:
        "Mini Se Die dimainkan dengan 4 tombol berwarna yang masing-masing memiliki dua sisi berwarna merah dan putih. Tujuan dari permainan ini adalah untuk memprediksi hasil dari 4 tombol.",
    winningCondition: {
        title: "Syarat Menang",
        description: {
            odd: "GANJIL: jika jumlah tombol merah atau putih yang dihasilkan adalah angka Ganjil.",
            even: "GENAP: jika jumlah tombol merah atau putih yang dihasilkan adalah genap.",
            otherBet: "Opsi taruhan lainnya sebagai",
            ifThe: "jika hasilnya cocok dengan taruhan pemain, pemain menang.",
        },
    },
    betLimit: {
        title: "Batas Taruhan",
        description: "Total taruhan maksimum per putaran adalah {0}",
        table: {
            header: {
                options: "Pilihan",
                betLimit: "Batas Taruhan",
            },
            rows: {
                oddEven: "GANJIL / GENAP",
                or: "atau",
            },
        },
    },
};
