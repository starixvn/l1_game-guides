import { IMd5Resources } from "./types";

export const md5ResourcesId: IMd5Resources = {
    content: {
        header: "MD5 (Mencerna Pesan Algoritma 5)",
        technology: {
            header: "MD5 teknologi",
            details: [
                "MD5 yang memungkinkan pemain untuk memeriksa keaslian dan transparansi hasil permainan melalui pihak ke-3.",
                "Hasil permainan akan dihasilkan secara acak oleh sistem sebelum pemain memasang taruhan.",
                "Pemain dapat secara manual memeriksa apakah hasil yang dihasilkan sebelum bertaruh (<strong>kunci MD5</strong>) dan hasil penerbitan (<strong>Hasil</strong>) cocok atau tidak.",
            ],
        },
        validation: {
            header: ">Validasi MD5",
            details: [
                "<strong>Langkah 1</strong>: Salin kunci <strong>MD5</strong> sebelum hasilnya diumumkan.",
                "<strong>Langkah 2</strong>: Salin <strong>Hasil</strong> setelah dipublikasikan.",
                "<strong>Langkah 3</strong>: Buka {0} dan tempel Hasil ke kotak MD5.",
                "<strong>Langkah 4</strong>: Tekan tombol <strong>“hash darling, hash!”</strong> dan bandingkan rangkaian daftar periksa MD5 yang baru dibuat dengan Kunci MD5 di <strong>Langkah 1</strong>.",
            ],
        },
        noted: "Jika kedua rangkaian cocok, buktikan bahwa hasil putaran permainan itu transparan dan hasil permainan tidak berubah dari hasil acak yang dihasilkan oleh sistem sebelum bertaruh.",
    },
    example: {
        header: "<strong> Contoh:</strong> periksa keaslian dan transparansi hasil permainan",
        step1Text: "<strong>Langkah 1:</strong> Salin kunci MD5 sebelum hasilnya diumumkan.",
        step2Text: "<strong>Langkah 2:</strong> Salin <strong>Hasil</strong> setelah dipublikasikan.",
        step3Text: "<strong>Langkah 3:</strong> Buka {0} dan tempel Hasil ke kotak MD5.",
        step4Text:
            "<strong>Langkah 4:</strong> Tekan tombol “hash darling, hash!” dan bandingkan rangkaian daftar periksa MD5 yang baru dibuat dengan Kunci MD5 di Langkah 1.",
        step1ImageUrl: "",
        step2ImageUrl: "",
        step3ImageUrl: "",
        step4ImageUrl: "",
        step2Noted1Text: "",
        step2Noted2Text: "",
    },
};
