import { ILuckyWheelTranslationResource } from "./types";

export const id: ILuckyWheelTranslationResource = {
    introduction: "",
    promotionProgram: {
        title: "Program Promosi",
        scoin: "Para pemain yang memiliki Free Spins dapat memainkan Lucky Wheel dan menerima “Scoin”",
        description: [
            "Scoin yang diperoleh dari Lucky Wheel secara otomatis akan ditambahkan ke dompet “Scoin” Anda.",
            "Tidak ada batasan jumlah putaran gratis yang dapat dimainkan per hari.",
        ],
    },
    gameRules: {
        title: "Cara memasang taruhan menggunakan “Scoin”",
        description: [
            "Scoin hanya bisa digunakan untuk memainkan game Se Die di “Vgaming”.",
            "Free Spins akan berlaku selama seminggu sejak pemain mendapatkan notifikasi. Setelah periode ini, Free Spins yang tidak digunakan akan hilang.",
            "Jumlah kemenangan dari permainan Se Die menggunakan “Scoin” akan dikreditkan ke saldo akun Anda.",
        ],
        note: {
            content: "Catatan:",
            description: [
                "Scoin tidak dapat ditukar dengan uang tunai.",
                "Scoin hanya tersedia untuk Se Die, dengan game lain, taruhannya akan dipotong langsung dari saldo akun Anda.",
            ],
        },
    },
    termsAndConditions: {
        title: "Syarat dan Ketentuan",
        line1: "Dengan mengikuti promosi ini, Anda setuju untuk terikat dengan syarat dan ketentuan ini.",
        description: [
            "Perusahaan berhak untuk membatalkan hasil Lucky Wheel karena peristiwa force majeure termasuk namun tidak terbatas pada kesalahan teknis, kegagalan layanan jaringan, kegagalan daya.",
            "Jika ada gameplay/perilaku yang mencurigakan atau curang, Perusahaan berhak membatalkan hasil Lucky Wheel atau mengecualikan pemain dari promosi ini.",
            "Perusahaan berhak mengubah syarat masuk yang berlaku untuk promosi ini atau mengubah, menghentikan, menangguhkan, atau menjadwal ulang promosi ini kapan saja.",
            "Setiap perselisihan yang timbul dari atau sehubungan dengan promosi ini akan diputuskan oleh Perusahaan.",
        ],
    },
};
