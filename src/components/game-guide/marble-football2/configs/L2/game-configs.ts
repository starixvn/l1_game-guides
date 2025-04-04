const GameConfigs = {
    maxBetPerChoices: { home: 3000, away: 3000, draw: 3000, under: 2500, over: 2500, odd: 3100, even: 3100, homeLive: 3000, awayLive: 3000, drawLive: 3000, underLive: 2500, overLive: 2500, oddLive: 3100, evenLive: 3100 },
    maxBet: 3000,
    minBet: 1,
    odds: {
        home: 1.97,
        away: 1.97,
        draw: 8,
        under: 1.97,
        over: 1.97,
        odd: 1.97,
        even: 1.97,
        draw4: 50,
    },
    oddsRange: {
        prematch: {
            home: {
                min: 2.34,
                max: 2.35
            },
            away: {
                min: 2.34,
                max: 2.35
            },
            draw: {
                min: 6.32,
                max: 6.56
            },
            over: {
                min: 1.97,
                max: 2.00
            },
            under: {
                min: 2.00,
                max: 2.03
            },   
            odd: {
                value: 2.00,
            },
            even: { 
                value: 2.00,
            }
                
        },
        live: {
            home: {
                min: 2.34,
                max: 2.35
            },
            away: {
                min: 2.34,
                max: 2.35
            },
            draw: {
                min: 6.32,
                max: 6.56
            },
            over: {
                min: 1.97,
                max: 2.00
            },
            under: {
                min: 2.00,
                max: 2.03
            },   
            odd: {
                min: 1.98,
                max: 2.08
            },
            even: { 
                min: 1.98,
                max: 2.08
            }
        }
    }
};

export default GameConfigs;
