import { IBigSmallMiniTranslationResource } from "./types";

export const id: IBigSmallMiniTranslationResource = {
    introduction:
        "Besar Kecil adalah permainan dadu seru yang dimainkan dengan tiga dadu. Para pemain memasang taruhan dan memprediksi total poin dari ketiga dadu tersebut BESAR atau KECIL.",
    winningCondition: {
        title: "Syarat Menang",
        description: {
            thePlayerCan: "Pemain dapat bertaruh pada BESAR atau KECIL, tetapi tidak pada keduanya.",
            big: "BESAR: total poin dari tiga dadu >= 11",
            small: "KECIL : jumlah poin dari ketiga dadu <= 10",
            balanced:
                "Pool Taruhan Seimbang: jika jumlah total taruhan pada BESAR dan KECIL berbeda maka jumlah selisih akan dikembalikan kepada pemain yang memiliki tiket taruhan terbaru.",
        },
        example:
            "Contoh: Pemain A bertaruh 100 pada BESAR, pemain B bertaruh 40 pada KECIL, dan pemain C bertaruh 80 pada KECIL. Untuk menyeimbangkan jumlah total taruhan BESAR dan KECIL, sistem akan mengembalikan 20 ke pemain C.",
    },
    betLimit: {
        title: "Batas Taruhan",
        description: "Min bet dan Max bet harus antara {0} - {1} dan maksimum total taruhan per putaran adalah {2}",
    },
};
