import { baseBaccaratResourcesId } from "../../base/base-baccarat/languages/id";
import { IBlockchainBaccaratResources } from "./types";

export const id: IBlockchainBaccaratResources = {
    ...baseBaccaratResourcesId,
    introduction: {
        header: "Perkenalan",
        content:
            "Baccarat Blockchain - permainan kartu dengan Jaminan Keadilan, terobosan baru dengan teknologi blockchain. Permainan ini menggunakan 8 tumpukan kartu (416 kartu tidak termasuk Joker). Ada 7 opsi taruhan dan Penumpang dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.",
    },
    extendGameRules: {
        cutCard: {
            header: " Potong Kartu",
            description:
                "Potong Kartu : kartu khusus digunakan untuk menunjukkan di mana sepatu akan berakhir dan semua kartu akan dikocok ulang. Potong Kartu:  akan dimasukkan di tengah paket kartu (416 kartu) di awal sepatu baru.",
        },
        burnCard: {
            header: "Burn Card",
            description:
                "Setelah Cut Kartu dimasukkan, ada proses burn card. Jumlah kartu yang akan dibakar (dibuang tanpa dipakai), tergantung dari nilai kartu pertama yang dikeluarkan dari Shoe baru.",
            noted: "<strong>Catatan</strong>: Kartu pertama di atas paket kartu (416 kartu) juga dibuang. ",
            firstCard: "Kartu Pertama",
            example: {
                header: "Contoh",
                descriptions: [
                    "Jika kartu pertama 5 => 6 kartu akan dikeluarkan (5 kartu yang dibakar + kartu pertama)",
                    "Jika kartu pertama adalah K => 11 kartu akan dikeluarkan (10 kartu yang dibakar + kartu K)",
                ],
            },
        },
    },
    gameRules: {
        ...baseBaccaratResourcesId.gameRules,
        ...{
            getDetails(environment: string | undefined, maxBetMain: number | string) {
                return [
                    "Secara bawaan, 6 kartu akan ditarik di awal setiap putaran. Player dan Banker, masing-masing tangan akan dimulai dengan 2 kartu menghadap ke bawah.",
                    "Kartu ketiga akan dibagikan sesuai dengan total poin dari 2 kartu pertama di masing-masing tangan.",
                    "Jika putaran berakhir dengan total kurang dari 6 kartu yang dibagikan, kartu yang tersisa akan digunakan untuk putaran berikutnya.",
                    "Permainan menentukan menang atau kalah dengan membandingkan total poin dari semua kartu di masing-masing tangan dan tangan yang menang adalah yang paling dekat dengan total 9 poin.",
                    "Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir. Perhatikan, taruhan yang dipasang tidak dapat dibatalkan.",
                    `Total taruhan maksimum per putaran adalah ${maxBetMain}`,
                ];
            },
        },
    },
};
