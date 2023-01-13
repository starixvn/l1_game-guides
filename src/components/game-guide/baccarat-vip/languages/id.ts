import { ENVIRONMENT } from "../../../../common/constants";
import { baseBaccaratResourcesId } from "../../base/base-baccarat/languages/id";
import { IBaseBaccaratResources } from "../../base/base-baccarat/languages/types";

export const id: IBaseBaccaratResources = {
    ...baseBaccaratResourcesId,
    ...{
        introduction: {
            header: "Perkenalan",
            content:
                "VIP Baccarat - adalah versi Baccarat yang disempurnakan dengan batas taruhan yang lebih tinggi. Permainan ini dimainkan dengan satu dek 52 kartu standar (tidak termasuk Joker). Ada 7 opsi taruhan dan Penumpang dapat bertaruh pada satu atau lebih opsi taruhan yang ditampilkan di meja permainan.",
        },
    },
    gameRules: {
        ...baseBaccaratResourcesId.gameRules,
        ...{
            getDetails(environment: string | undefined, maxBetMain: number | string) {
                let details: Array<string> = ["Player dan Banker, masing-masing tangan akan mulai dengan 2 kartu tertutup."];

                if (environment === ENVIRONMENT.sm) {
                    details = details.concat(["The Punter predicts which one in two hands will win."]);
                }

                if (environment === ENVIRONMENT.sc) {
                    details = details.concat([
                        "Penumpang memasang taruhan di salah satu dari dua tangan yang mana yang akan menang.",
                        "The third card also will be drawn after finishing dealing 2 initial face-down cards for Player and Dealer’s hands.",
                        "The cards are numbered from one to six that correspond to the sequence of dealt cards at the beginning of the game round.",
                    ]);
                }

                return details.concat([
                    "Opsi taruhan lainnya adalah “Tie” jika Penumpang memprediksi dua tangan akan berakhir dengan total yang sama atau mereka juga dapat bertaruh pada opsi Besar, Kecil, Pasangan Pemain, atau Pasangan Bankir.",
                    "Semua taruhan harus ditempatkan sebelum waktu taruhan berakhir.  Catatan, taruhan yang dipasang tidak dapat dibatalkan",
                    `Total taruhan maksimum per putaran adalah ${maxBetMain}`,
                    "Setelah waktu taruhan berakhir, dealer membalik kartu menghadap ke atas.",
                    "Berdasarkan total poin dari dua kartu pertama, dealer akan menentukan apakah kedua tangan mendapat kartu ketiga",
                    "Permainan menentukan menang atau kalah dengan membandingkan total poin semua kartu di masing-masing tangan dan tangan yang menang adalah yang paling dekat dengan total 9 poin.",
                    "Dek standar dengan 52 kartu (tidak termasuk Joker) dikocok setelah setiap putaran.",
                ]);
            },
        },
    },
};
