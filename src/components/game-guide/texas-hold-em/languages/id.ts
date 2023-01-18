import { TexasHoldemLanguage } from "./types";

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
        "MD5 (Message-Digest algorithm 5)": "MD5 (Message-Digest algoritma 5)",

        "MD5 Technology": "Teknologi MD5",
        "MD5 allows Players to check the authenticity and transparency of game results through 3rd parties.":
            "MD5 memungkinkan Player untuk memeriksa keaslian dan transparansi hasil permainan melalui pihak ke-3.",
        "The game results will be randomly generated by the system before the cards are revealed.":
            "Hasil permainan akan dibuat secara acak oleh sistem sebelum kartu dibuka.",
        "Players can manually check whether or not the results generated before the cards are revealed":
            "Player dapat secara manual memeriksa apakah hasil yang dihasilkan sebelum kartu terungkap (string MD5) dan hasil penerbitan (Hasil String) dicocokkan.",

        "MD5 Validation": "Validasi MD5",
        "Step 1": "Langkah 1",
        "Copy the MD5 key after pressing the Deal button": "Salin kunci MD5 setelah menekan tombol Deal.",
        "Step 2": "Langkah 2",
        "Copy the Result after ": "Salin Hasil setelah kartu komunitas kelima (River) dibagikan.",
        "Step 3": "Langkah 3",
        "Go to ": "Buka  ",
        "and paste the Result into the MD5 box. ": "dan rekatkan Hasil ke kotak MD5.",
        "Step 4": "Langkah 4",
        "Press the “hash darling, hash!” button":
            "Tekan tombol “hash darling, hash!” tombol dan bandingkan string checksum MD5 yang baru dibuat dengan string MD5 di Langkah 1.",
        "If two strings are matching, prove that ":
            "Jika dua senar cocok, buktikan bahwa hasil putaran permainan itu transparan dan hasil permainan tidak berubah dari hasil acak yang dihasilkan oleh sistem sebelum kartu dibagikan.",
        Example: "Contoh",
        "Check the authenticity and transparency of Poker game results.": "Periksa keaslian dan transparansi hasil permainan Poker.",
        Note: "Catatan",
        "From left to right, the cards are displayed in the order": "Dari kiri ke kanan, kartu ditampilkan dalam urutan",
        "Player’s cards": "Kartu Player",
        "Dealer’s cards": "Kartu Dealer",
        "and the five community cards": "dan lima kartu komunitas",
        "If the Player has swapped his cards with Dealer then the order will be":
            "Jika Player telah menukar kartunya dengan Dealer maka urutannya adalah",
    },
};
