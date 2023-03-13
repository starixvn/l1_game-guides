import { IBaccaratMiniTranslationResource } from "./types";

export const id: IBaccaratMiniTranslationResource = {
    introduction: {
        title: "Perkenalan",
        description:
            "Baccarat dimainkan dengan satu setumpuk 52 kartu standar (tidak termasuk Joker). Ada 3 opsi taruhan dan Penumpang dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.",
    },
    gameRule: {
        title: "Aturan Permainan",
        description: {
            byDefault:
                "Secara bawaan, 6 kartu akan ditarik di awal setiap putaran. Player dan Banker, masing-masing tangan akan dimulai dengan 2 kartu menghadap ke bawah.",
            theThirdCard: "Kartu ketiga akan dibagikan sesuai dengan total poin dari 2 kartu pertama di masing-masing tangan.",
            theGameDetermines:
                "Permainan menentukan menang atau kalah dengan membandingkan total poin dari semua kartu di masing-masing tangan dan tangan yang menang adalah yang paling dekat dengan total 9 poin.",
            theCards: "Kartu dikocok setelah setiap putaran dan total taruhan maksimum per putaran adalah {0}",
        },
    },
    payouts: {
        title: "Pembayaran",
        description: {
            thePayout: "Pembayaran termasuk taruhan awal.",
            note: "Catatan: Semua taruhan pada Player dan Banker akan dikembalikan jika hasilnya seri.",
        },
        table: {
            header: {
                options: "Pilihan",
                betLimit: "Batas Taruhan (Min-Max)",
            },
            rows: {
                player: "Player",
                banker: "Banker",
                tie: "Seri",
            },
        },
    },
};
