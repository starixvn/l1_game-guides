const { DevTools, Tolgee } = require("@tolgee/react");
const fs = require("fs");
const path = require("path");
const gameSettings = require("../../game-settings.json");
const tolgeeNamespaces = require("../../tolgee-namespaces.json");

function writeFile(fileName: string, content: string, extension = "json") {
    const dirname = path.dirname(fileName);

    if (!fs.existsSync(dirname)) {
        fs.mkdirSync(dirname, { recursive: true });
    }

    fs.writeFileSync(`${fileName}.${extension}`, content, {
        encoding: "utf8",
        flag: "w",
    });
}

interface GameSettings {
    gameName?: string;
}

const tmpGameSettings: { [id: string]: GameSettings } = gameSettings;

const tolgeeNamespaceByGameSetting = Object.values(tmpGameSettings)
    .map((setting) => setting.gameName)
    .filter((ns) => ns);

const namespaces = tolgeeNamespaces;
const languageCodes = ["en", "id", "th", "vi", "zh_cn", "zh_tw", "ja"];
const tg = Tolgee().use(DevTools()).init({
    defaultLanguage: "en",
    fallbackLanguage: "en",
    availableLanguages: languageCodes,
    apiKey: "tgpak_gjpxe3jsoe2xgy3lgezgiolwoy4gy5twgrtwqz3pgrtwq",
    apiUrl: "https://tolgee.sabagame.com/",
    projectId: "2",
    defaultNs: "Common",
    ns: namespaces,
});

tg.run();

tg.on("initialLoad", async () => {
    const languages: {
        [languageId: string]: {
            [ns: string]: {
                [key: string]: string;
            };
        };
    } = {};
    languageCodes.forEach(async (languageId) => {
        await tg.changeLanguage(languageId);
        languages[languageId] = {};
        tg.getAllRecords().forEach((record: any) => {
            namespaces.forEach((namespace: string) => {
                if (record.namespace === namespace) {
                    languages[languageId][namespace] = {};
                    record.data.forEach((value: any, key: any) => {
                        languages[languageId][namespace][key] = value as string;
                    });

                    writeFile(`./public/i18n/${namespace}/` + languageId, JSON.stringify(languages[languageId][namespace], null, 4));
                }
            });
        });
    });

    console.log("Generated done!");
});
