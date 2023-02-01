import { TexasHoldemLanguage } from "./types";
import { id as BaseMD5Resource } from "../../base/md5/languages/id";

export const id: TexasHoldemLanguage = {
    introduction: {
        Introduction: "Perkenalan",
        "Texas Holdem is":
            "Texas Hold'em adalah salah satu permainan poker paling populer di dunia. Permainan ini dimainkan dengan setumpuk 52 kartu standar \
            (tidak termasuk Joker), dan kartu-kartu tersebut dikocok ulang setelah setiap putaran. kemungkinan tangan Poker lima kartu. \
            Tujuan dari permainan ini adalah untuk mendapatkan kartu Poker dengan peringkat lebih tinggi dari Dealer. \
            Menggunakan dua kartu hole Anda digabungkan dengan lima kartu komunitas untuk membuat kartu Poker lima kartu terbaik.",
        "In addition, a new feature": "Selain itu, fitur baru",
        "MD5 (Message-Digest algorithm 5)": "MD5 (Message-Digest algoritma 5)",
        "that allows the Player to": "yang memungkinkan Player untuk memeriksa keadilan dan keaslian setiap hasil permainan.",
    },

    gameRules: {
        "Game Rules": "Aturan Permainan",
        "Select the desired chip with": "Pilih chip yang diinginkan dengan nilai yang paling cocok untuk Anda dan pasang taruhan di Ante.",
        "Note, Ante bet is": "Catatan, Taruhan Ante adalah opsi wajib yang harus dipasang oleh Player sebelum kartu apa pun dibagikan.",
        "Click on the Deal button to":
            "Klik tombol Deal untuk memulai putaran permainan, Player dan Dealer masing-masing menerima dua kartu hole.",
        "Swap Cards": "Tukar Kartu",
        "Swap Cards is":
            "Tukar Kartu adalah fitur opsional dan dapat DIHIDUPKAN / DIMATIKAN. Hal ini memungkinkan Player untuk memilih antara menukar kartu \
            dua lubangnya dengan kartu Dealer sebelum kartu menghadap ke atas atau menyimpan kartu tanpa perubahan.",
        "Note: The Swap cards feature can": "Catatan: Fitur Tukar kartu hanya dapat ON/OFF sebelum putaran permainan dimulai.",
        "After the two hole cards are":
            "Setelah dua kartu hole dibagikan dan menghadap ke atas, Player harus memutuskan apakah akan CALL atau FOLD.",
        FOLD: "FOLD",
        "the Player will surrender": "Player akan menyerahkan tangannya dan kalah taruhan Ante. Putaran permainan telah berakhir.",
        CALL: "CALL",
        "the Player will continue playing":
            "Player akan terus bermain dengan taruhan Panggilan tambahan, sama dengan dua kali taruhan Ante, dan tiga kartu komunitas \
            (kartu Gagal) dibagikan menghadap ke atas di tengah meja.",
        "Turn & River bet": "Taruhan Turn & River",
        "River bet": "River bet",
        "are additional bets": "adalah taruhan tambahan yang diputuskan oleh Player apakah dia ingin menaikkan taruhannya.",
        "Turn bet": "Turn bet",
        "before a fourth community card is dealt":
            "sebelum kartu komunitas keempat dibagikan menghadap ke atas (Turn), Player dapat meningkatkan taruhan dengan memasang taruhan pada \
            opsi “Turn” dengan jumlah taruhan yang sama yang ditempatkan pada Ante.",
        "the River is the":
            "River adalah kartu komunitas kelima dan terakhir. Mirip dengan Taruhan Turn, sebelum kartu River dibagikan, Player akan memiliki \
            opsi untuk memasang taruhan River tambahan.",
        Check: "Check",
        "To skip placing bets on Turn or River": "Untuk melewati pemasangan taruhan pada Turn atau River, cukup klik tombol “Check”.",
        "The two personal cards are combined with 5 community cards":
            "Dua kartu pribadi digabungkan dengan 5 kartu komunitas untuk membuat kartu Poker lima kartu terbaik. \
            Player akan menang jika Player memiliki tangan yang lebih baik dari Dealer.",
        "The maximum total stake per round is": "Total taruhan maksimum per putaran adalah ",
        "Note, placed bets cannot be canceled after cards are dealt":
            "Perhatikan, taruhan yang dipasang tidak dapat dibatalkan setelah kartu dibagikan.",
        "Ranking Level": "Tingkat Peringkat",
        "Card Values": "Nilai Kartu",
        "The card’s value is ":
            "Nilai kartu diurutkan dari yang tertinggi ke terendah dengan urutan sebagai berikut: Ace (A), King (K), Queen (Q), Jack (J), 10, 9, 8, 7, 6, 5, 4, 3 dan 2.",
        "The Ace can be used as": "Ace dapat digunakan sebagai kartu tertinggi dan terendah.",
        "For example: In a straight, ":
            "Contoh: Dalam straight, A dapat digunakan sebagai A, K, Q, J, 10 sebagai nilai tertinggi atau 5, 4, 3, 2, A sebagai kartu nilai terendah.",
        "All the suits": "Semua setelan",
        heart: "hati",
        spade: "sekop",
        diamond: "wajik",
        "and club": "dan klub",
        "have equal value": "memiliki nilai yang sama.",
        "Hand Ranking": "Peringkat Tangan",
        "List of poker hand ranking levels from highest to lowest.": "Daftar level peringkat tangan poker dari tertinggi ke terendah.",
        Hand: "Tangan",
        Description: "Keterangan",
        Example: "Contoh",
        "Royal Flush": "Royal Flush",
        "Ace, King, Queen, Jack, and 10 in the same suit": "As, King, Queen, Jack, dan 10 dengan jenis yang sama",
        "Straight Flush": "Straight Flush",
        "Five cards in the same suit, all in a rank sequence": "Lima kartu dengan jenis yang sama, semuanya dalam urutan peringkat",
        "Four of a Kind": "Four of a Kind",
        "Four cards of the same rank": "Empat kartu dengan peringkat yang sama",
        "Full House": "Full House",
        "Three of a Kind and a Pair": "Three of a Kind dan Sepasang",
        Flush: "Flush",
        "Five cards in the same suit": "Lima kartu dengan jenis yang sama",
        Straight: "Straight",
        "Five cards a rank sequence": "Lima kartu urutan peringkat",
        "Three of a Kind": "Three of a Kind",
        "Three cards of the same rank": "Tiga kartu dengan nilai yang sama",
        "Two Pair": "Dua Pair",
        "Two pairs of different ranks": "Dua Pair peringkat yang berbeda",
        Pair: "Pair",
        "Two cards of the same rank": "Dua kartu dengan nilai yang sama",
        "High Card": "Kartu tinggi",
        "Highest card when no higher hand is available": "Kartu tertinggi ketika tidak ada tangan yang lebih tinggi tersedia",
        "The Poker hand consists of five cards":
            "Tangan Poker terdiri dari lima kartu. \
            Jika Player dan Dealer berbagi tangan yang menang, maka masing-masing kartu akan digunakan untuk memecahkan Tie. \
            Jika kartu tertinggi di tangan Player sama, kartu tertinggi kedua harus dibandingkan, dan seterusnya.",
        Cards: "Kartu-kartu",
        Combination: "Kombinasi",
        Result: "Hasil",
        Player: "Player",
        Dealer: "Dealer",
        "Community Cards": "Kartu Komunitas",
        "The Player wins": "Player menang",
        "The Dealer wins": "Dealer menang",
        "Result is a “Tie”": "Hasilnya adalah “Seri”.",
    },

    payout: {
        Payout: "Pembayaran",
        "All winning amounts are": "Semua jumlah kemenangan langsung ditambahkan ke saldo akun Anda saat taruhan diselesaikan.",
        "The winning amount is calculated":
            "Jumlah kemenangan dihitung berdasarkan odds taruhan. Perhatikan, Pembayaran termasuk taruhan awal.",
        "If Player’s hand beats Dealer’s hand": "Jika tangan Player mengalahkan tangan Dealer",
        "With a Three of a Kind or lower": "Dengan Three of a Kind atau lebih rendah",
        "the Call, Turn and River bets are won, and Ante is pushed.": "Taruhan Call, Turn, dan River dimenangkan, dan Ante didorong.",
        "With a Straight or higher": "Dengan Lurus atau lebih tinggi",
        "All bets (Ante, Call, Turn, and River) will win.": "Semua taruhan (Ante, Call, Turn, dan River) akan menang.",
        "Payout and Bet Limit": "Peluang dan Batas Taruhan",
        Option: "Pilihan",
        Odds: "Peluang ",
        "Bet Limit (Min-Max)": "Batas Taruhan (Min-Max)",
        "Ante (with Three of a Kind or lower)": "Ante (dengan Three of a Kind atau lebih rendah)",
        Push: "Push",
        "Ante (with Straight or higher)": "Ante (dengan Straight atau lebih tinggi)",
        Call: "Call",
        Turn: "Turn",
        River: "River",
    },

    md5: {
        md5Base: {
            content: {
                ...BaseMD5Resource.content,
                validation: {
                    header: BaseMD5Resource.content.validation.header,
                    details: [
                        "<b>Langkah 1</b>: Salin kunci MD5 setelah menekan tombol Deal.",
                        "<b>Langkah 2</b>: Salin Hasil setelah kartu komunitas kelima (River) dibagikan.",
                        "<b>Langkah 3</b>: Buka {0} dan rekatkan Hasil ke kotak MD5.",
                        "<b>Langkah 4</b>: Tekan tombol <b>“hash darling, hash!</b>” dan bandingkan rangkaian daftar <strong>MD5 checksum</strong> yang baru dibuat dengan Kunci MD5 di <strong>Langkah 1</strong>.",
                    ],
                },
                noted: "Jika dua senar cocok, buktikan bahwa hasil putaran permainan itu transparan dan hasil permainan tidak berubah dari hasil acak yang dihasilkan oleh sistem sebelum kartu dibagikan.",
            },
            example: {
                ...BaseMD5Resource.example,
                header: "<b>Contoh:</b> Periksa keaslian dan transparansi hasil permainan Poker.",
                step1Text: "<strong>Langkah 1</strong>: Salin kunci MD5 setelah menekan tombol Deal.",
                step2Text: "<strong>Langkah 2</strong>: Salin Hasil setelah kartu komunitas kelima (River) dibagikan.",
            },
        },
        md5Note: {
            title: "Note",
            line1: "From left to right, the cards are displayed in the order: Player’s cards {0}, Dealer’s cards {1}, and the five community cards {2}",
            line2: "If the Player has swapped his cards with Dealer then the order will be: Dealer’s cards {0}, Player’s cards {1}, and the five community cards.",
        },
    },
    extendTermsAndConditionsDetails: [
        `Putaran permainan yang belum selesai dapat dipulihkan dan harus diselesaikan dalam waktu 24 jam sejak Player menekan tombol "Deal". Permainan yang belum selesai akan diselesaikan secara otomatis setelah 24 jam, dan hasil menang-kalah akan ditentukan dengan aturan berikut:
        <ul className="detail">
            <li>
                Jika putaran permainan terganggu sebelum Player memilih “CALL” atau “FOLD => Tangan Player dianggap sebagai “FOLD”.
            </li>
            <li>
                Jika putaran permainan terganggu setelah Player memilih opsi “CALL”, tangan Player dianggap sebagai “CHECK” untuk Taruhan Putaran dan River => Putaran permainan akan diselesaikan seperti biasa.
            </li>
        </ul>`,
    ],
};
