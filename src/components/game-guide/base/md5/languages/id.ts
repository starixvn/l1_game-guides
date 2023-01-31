import { IMd5Resources } from "./types";

const steps = {
    one: "<strong>Langkah 1</strong>: Salin kunci <strong>MD5</strong> sebelum hasilnya diumumkan.",
    two: "<strong>Langkah 2</strong>: Salin <strong>Hasil</strong> setelah dipublikasikan.",
    three: "<strong>Langkah 3</strong>: Buka {0} dan tempel Hasil ke kotak MD5.",
    four: "<strong>Langkah 4:</strong>: Tekan tombol <strong>“hash darling, hash!”</strong> dan bandingkan rangkaian daftar MD5 checksum yang baru dibuat dengan Kunci MD5 di <strong>Langkah 1</strong>.",
};

export const id: IMd5Resources = {
    content: {
        header: "MD5 (Mencerna Pesan Algoritma 5)",
        technology: {
            header: "MD5 teknologi",
            details: [
                "MD5 yang memungkinkan pemain untuk memeriksa keaslian dan transparansi hasil permainan melalui pihak ke-3.",
                "Hasil permainan akan dihasilkan secara acak oleh sistem sebelum pemain memasang taruhan.",
                "Pemain dapat secara manual memeriksa apakah hasil yang dihasilkan sebelum bertaruh (<strong>MD5 checksum</strong>) dan hasil penerbitan (<strong>Hasil</strong>) cocok atau tidak.",
            ],
        },
        validation: {
            header: ">Validasi MD5",
            details: Object.values(steps),
        },
        noted: "Jika kedua rangkaian cocok, buktikan bahwa hasil putaran permainan itu transparan dan hasil permainan tidak berubah dari hasil acak yang dihasilkan oleh sistem sebelum bertaruh.",
    },
    example: {
        header: "<strong> Contoh:</strong> periksa keaslian dan transparansi hasil permainan",
        step1Text: steps.one,
        step2Text: steps.two,
        step3Text: steps.three,
        step4Text: steps.four,
    },
};
