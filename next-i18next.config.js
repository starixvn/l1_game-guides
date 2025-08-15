module.exports = {
    i18n: {
        defaultLocale: "en",
        locales: ["vi", "en", "th", "id", "zh_cn", "zh_tw", "ja", "es", "ko", "tr", "fil_ph", "pt_br"],
        localeDetection: false,
    },
    react: {
        useSuspense: true,
        transSupportBasicHtmlNodes: true,
        transKeepBasicHtmlNodesFor: ["br", "strong", "i"],
    },
    fallbackLng: ["vi", "en", "th", "id", "zh_cn", "zh_tw", "ja", "es", "ko", "tr", "fil_ph", "pt_br"],
};
