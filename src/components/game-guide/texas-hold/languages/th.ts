import { TexasHoldemLanguage } from "./types";

export const th: TexasHoldemLanguage = {
    introduction: {
        Introduction: "บทนำ",
        "Texas Holdem is":
            "เท็กซัส โฮลเอ็ม เป็นหนึ่งในเกมส์โป๊กเกอร์ที่ได้รับความนิยมมากที่สุดในโลก. \
            เกมส์นี้เล่นด้วยสำรับไพ่มาตรฐาน 52 ใบ (ไม่รวมโจ๊กเกอร์) และไพ่จะถูกสับใหม่หลังจบแต่ละรอบ เพื่อรวบรวมไพ่โป๊กเกอร์ห้าใบที่ที่ดีที่สุด. \
            วัตถุประสงค์ของเกมส์นี้คือเพื่อให้ได้มือโป๊กเกอร์ที่มีอันดับสูงกว่าเจ้ามือ. \
            การใช้ไพ่สองใบของคุณรวมกับไพ่กองกลางห้าใบเพื่อสร้างมือโป๊กเกอร์ห้าใบที่ดีที่สุด.",
        "In addition, a new feature": "นอกจากนี้ คุณสมบัติใหม่",
        "MD5 (Message-Digest algorithm 5)": "MD5 (Message-Digest algorithm 5)",
        "that allows the Player to": "ที่ช่วยให้ผู้เล่นตรวจสอบความยุติธรรมและความถูกต้องของผลลัพธ์ทุกเกมส์.",
    },

    gameRules: {
        "Game Rules": "กฎของเกมส์",
        "Select the desired chip with": "เลือกชิปที่ต้องการด้วยมูลค่าที่เหมาะกับคุณที่สุดแล้ววางเดิมพัน Ante.",
        "Note, Ante bet is": "หมายเหตุ การเดิมพัน Ante  เป็นตัวเลือกบังคับที่ผู้เล่นต้องวางเดิมพันก่อนที่จะมีการแจกไพ่.",
        "Click on the Deal button to": "คลิกที่ปุ่มดีลเพื่อเริ่มรอบเกมส์ ผู้เล่นและดีลเลอร์ต่างจะได้รับไพ่สองใบ.",
        "Swap Cards": "สลับไพ่",
        "Swap Cards is":
            "สลับไพ่ เป็นคุณสมบัติเสริมและสามารถเปิด/ปิดได้ อนุญาตให้ผู้เล่นเลือกที่จะสลับไพ่สองหลุมของเขากับไพ่ของเจ้ามือก่อนที่ไพ่จะหงายหน้าหรือเก็บไพ่ไว้โดยไม่เปลี่ยน.",
        "Note: The Swap cards feature can": "หมายเหตุ: ฟีเจอร์สลับไพ่สามารถเปิด/ปิดได้ก่อนที่รอบเกมส์จะเริ่มขึ้นเท่านั้น.",
        "After the two hole cards are": "หลังจากแจกไพ่สองใบและหงายหน้า ผู้เล่นต้องตัดสินใจว่าจะสู้หรือหมอบ.",
        FOLD: "หมอบ",
        "the Player will surrender": "ผู้เล่นจะยอมสละมือและเสียเงินเดิมพันล่วงหน้า รอบเกมส์จบลงแล้ว.",
        CALL: "สู้",
        "the Player will continue playing":
            "ผู้เล่นจะเล่นต่อด้วยการเดิมพันlสู้เพิ่ม เท่ากับสองเท่าของการเดิมพันล่วงหน้า และไพ่กองกลางสามใบ (ไพ่ ฟล็อป ) จะถูกแจกโดยหงายหน้าไว้กลางโต๊ะ.",
        "Turn & River bet": "การเดิมพันแบบเทิร์น & ริเวอร์",
        "River bet": "เดิมพันริเวอร์",
        "are additional bets": "เป็นการเดิมพันเพิ่มเติมที่ผู้เล่นตัดสินใจว่าเขาต้องการเพิ่มเงินเดิมพันหรือไม่.",
        "Turn bet": "การเดิมพันแบบเทิร์น",
        "before a fourth community card is dealt":
            "ก่อนที่ไพ่ชุมชนใบที่สี่จะถูกแจกโดยหงายหน้า (เทิร์น) ผู้เล่นสามารถเพิ่มเงินเดิมพันได้โดยการวางเดิมพันที่ตัวเลือก “เทิร์น” ด้วยจำนวนเงินเดิมพันเดียวกันกับที่วางเดิมพันล่วงหน้า.",
        "the River is the":
            "ริเวอร์เป็นไพ่ใบที่ห้าและใบสุดท้ายของชุมชน เช่นเดียวกับการเดิมพันเทิร์น ก่อนที่ไพ่ริเวอร์จะถูกแจก ผู้เล่นจะมีตัวเลือกในการวางเดิมพันริเวอร์เพิ่มเติม.",
        Check: "ตรวจสอบ",
        "To skip placing bets on Turn or River": "หากต้องการข้ามการวางเดิมพันในเทิร์นหรือริเวอร์ เพียงคลิกที่ปุ่ม “ตรวจสอบ”.",
        "The two personal cards are combined with 5 community cards":
            "ไพ่ส่วนตัวสองใบรวมกับไพ่กองกลาง 5 ใบเพื่อสร้างไพ่โป๊กเกอร์ห้าใบที่ดีที่สุด ผู้เล่นจะชนะหากผู้เล่นมีมือที่ดีกว่าเจ้ามือ",

        "The maximum total stake per round is": "เงินเดิมพันรวมสูงสุดต่อรอบคือ ",
        "Note, placed bets cannot be canceled after cards are dealt": "หมายเหตุ การวางเดิมพันไม่สามารถยกเลิกได้หลังจากแจกไพ่แล้ว.",
        "Ranking Level": "ระดับการจัดอันดับ",
        "Card Values": "ค่าไพ่",
        "The card’s value is ":
            "มูลค่าของไพ่จะเรียงลำดับจากสูงสุดไปต่ำสุดตามลำดับต่อไปนี้: เอซ (A), คิง (K), ควีน (Q), แจ็ค (J), 10, 9, 8, 7, 6, 5, 4, 3 และ 2.",
        "The Ace can be used as": "เอซสามารถใช้เป็นทั้งไพ่สูงสุดและต่ำสุด.",
        "For example: In a straight, ":
            "ตัวอย่างเช่น: ในทางตรง สามารถใช้ A เป็น A, K, Q, J, 10 เป็นค่าสูงสุดหรือ 5, 4, 3, 2, A เป็นไพ่ที่มีค่าต่ำสุด.",
        "All the suits": "ชุดทั้งหมด",
        heart: "หัวใจ ",
        spade: "โพดำ ",
        diamond: "เพชร ",
        "and club": "และดอกจิก",
        "have equal value": "มีค่าเท่ากัน",
        "Hand Ranking": "อันดับมือ",
        "List of poker hand ranking levels from highest to lowest.": "รายชื่อระดับการจัดอันดับมือโป๊กเกอร์จากสูงสุดไปต่ำสุด.",
        Hand: "มือ",
        Description: "描述",
        Example: "ตัวอย่าง",
        "Royal Flush": "รอยัลฟลัช",
        "Ace, King, Queen, Jack, and 10 in the same suit": "เอซ คิง ควีน แจ็ค และ 10 ในชุดเดียวกัน",
        "Straight Flush": "สเตรทฟลัช",
        "Five cards in the same suit, all in a rank sequence": "ไพ่ห้าใบในชุดเดียวกัน เรียงตามลำดับ",
        "Four of a Kind": "ไพ่เลขเดียวกัน 4 ใบ",
        "Four cards of the same rank": "ไพ่สี่ใบที่มีแต้มเท่ากัน",
        "Full House": "ฟูลเฮาส์",
        "Three of a Kind and a Pair": "สามชนิดและคู่",
        Flush: "ฟลัช",
        "Five cards in the same suit": "ไพ่ห้าใบในชุดเดียวกัน",
        Straight: "สเตรท",
        "Five cards a rank sequence": "ไพ่ห้าใบตามลำดับอันดับ",
        "Three of a Kind": "ไพ่ตอง",
        "Three cards of the same rank": "ไพ่สามใบที่มีแต้มเท่ากัน",
        "Two Pair": "สองคู่",
        "Two pairs of different ranks": "Two pairs of different ranks",
        Pair: "คู่",
        "Two cards of the same rank": "ไพ่สองใบที่มีแต้มเท่ากัน",
        "High Card": "ไพ่สูง",
        "Highest card when no higher hand is available": "ไพ่สูงสุดเมื่อไม่มีมือที่สูงกว่า",
        "The Poker hand consists of five cards":
            "มือโป๊กเกอร์ประกอบด้วยไพ่ห้าใบ. หากผู้เล่นและดีลเลอร์มีมือที่ชนะร่วมกัน ไพ่แต่ละใบจะถูกใช้เพื่อทำลายเสมอกัน. หากไพ่ที่สูงที่สุดในมือของผู้เล่นเท่ากัน ควรเปรียบเทียบไพ่ที่สูงที่สุดรองลงมา เป็นต้น.",
        Cards: "ไพ่",
        Combination: "การรวมกัน",
        Result: "ผลลัพธ์",
        Player: "ผู้เล่น",
        Dealer: "เจ้ามือ",
        "Community Cards": "ไพ่ชุมชน",
        "The Player wins": "ผู้เล่นชนะ",
        "The Dealer wins": "เจ้ามือชนะ",
        "Result is a “Tie”": "ผลลัพธ์คือ “เสมอ”",
    },

    payout: {
        Payout: "การจ่ายเงิน",
        "All winning amounts are": "จำนวนเงินที่ชนะทั้งหมดจะถูกเพิ่มเข้าในบัญชีของคุณทันทีเมื่อเดิมพันถูกตัดสิน ",
        "The winning amount is calculated": "จำนวนเงินที่ชนะจะคำนวณตามอัตราเดิมพัน หมายเหตุ การจ่ายเงินรวมถึงเงินเดิมพันเริ่มต้น ",
        "If Player’s hand beats Dealer’s hand": "หากมือของผู้เล่นชนะมือของเจ้ามือ",
        "With a Three of a Kind or lower": "ด้วยไพ่สามใบหรือต่ำกว่า",
        "the Call, Turn and River bets are won, and Ante is pushed.": "ชนะการเดิมพันสู้ , เทิร์น  และ ริเวอร์ และ ล่วงหน้า จะถูกผลัก ",
        "With a Straight or higher": "ด้วยสเตรทหรือสูงกว่า",
        "All bets (Ante, Call, Turn, and River) will win.": "การเดิมพันทั้งหมด (ล่วงหน้า, สู้, เทิร์น และ ริเวอร์) จะชนะ",
        "Payout and Bet Limit": "อัตราต่อรองและวงเงินเดิมพัน",
        Option: "ตัวเลือก",
        Odds: "อัตราต่อรอง",
        "Bet Limit (Min-Max)": "วงเงินเดิมพัน (ต่ำสุด-สูงสุด)",
        "Ante (with Three of a Kind or lower)": "ล่วงหน้า (มีสามชนิดหรือต่ำกว่า)",
        Push: "เทหมดหน้าตัก",
        "Ante (with Straight or higher)": "ล่วงหน้า (แบบตรงหรือสูงกว่า)",
        Call: "เรียกไพ่",
        Turn: "เทิร์น",
        River: " ริเวอร์",
    },

    md5: {
        "MD5 (Message-Digest algorithm 5)": "MD5 (Message-Digest algorithm 5)",

        "MD5 Technology": "เทคโนโลยี MD5",
        "MD5 allows Players to check the authenticity and transparency of game results through 3rd parties.":
            "MD5 อนุญาตให้ผู้เล่นตรวจสอบความถูกต้องและความโปร่งใสของผลลัพธ์ของเกมส์ผ่านบุคคลที่สาม",
        "The game results will be randomly generated by the system before the cards are revealed.":
            "ผลลัพธ์ของเกมส์จะถูกสุ่มโดยระบบก่อนที่ไพ่จะถูกเปิดเผย",
        "Players can manually check whether or not the results generated before the cards are revealed":
            "ผู้เล่นสามารถตรวจสอบได้ด้วยตนเองว่าผลลัพธ์ที่สร้างขึ้นก่อนที่จะเปิดเผยการ์ด (สตริง MD5) และผลลัพธ์ที่เผยแพร่ (ผลลัพธ์สตริง) นั้นตรงกันหรือไม่",

        "MD5 Validation": "การตรวจสอบ MD5",
        "Step 1": "ขั้นตอนที่ 1",
        "Copy the MD5 key after pressing the Deal button": "คัดลอกคีย์ MD5 หลังจากกดปุ่มดีล",
        "Step 2": "ขั้นตอนที่ 2",
        "Copy the Result after ": "คัดลอกผลลัพธ์หลังจากแจกไพ่ใบที่ห้า (ริเวอร์)",
        "Step 3": "ขั้นตอนที่ 3",
        "Go to ": "ไปที่  ",
        "and paste the Result into the MD5 box. ": "และวางผลลัพธ์ลงในกล่อง MD5",
        "Step 4": "ขั้นตอนที่ 4",
        "Press the “hash darling, hash!” button":
            "กดปุ่ม “hash, darling hash!” ปุ่มและเปรียบเทียบการตรวจสอบ string MD5 ที่สร้างขึ้นใหม่กับสตริง MD5 ในขั้นตอนที่ 1",
        "If two strings are matching, prove that ":
            "หากสองสตริงตรงกัน ให้พิสูจน์ว่าผลลัพธ์ของรอบเกมส์นั้นโปร่งใส และผลลัพธ์ของเกมส์จะไม่เปลี่ยนแปลงจากผลลัพธ์แบบสุ่มที่สร้างโดยระบบก่อนแจกไพ่",
        Example: "ตัวอย่าง",
        "Check the authenticity and transparency of Poker game results.": "ตรวจสอบความถูกต้องและความโปร่งใสของผลลัพธ์ของเกมส์โป๊กเกอร์",
        Note: "จดหมาย",
        "From left to right, the cards are ":
            "จากซ้ายไปขวา ไพ่จะแสดงตามลำดับ: ไพ่ของผู้เล่น (J♣, 3♠), ไพ่ของเจ้ามือ (2♥, Q♥) และไพ่กองกลางห้าใบ (4♦, 6♠, 10♥, 10♦ , 10♣)",
        "If the Player has swapped his cards ":
            "หากผู้เล่นสลับไพ่กับเจ้ามือ ลำดับจะเป็น: ไพ่ของเจ้ามือ (J♣, 3♠), ไพ่ของผู้เล่น (2♥, Q♥) และไพ่กองกลางห้าใบ",
    },
};
