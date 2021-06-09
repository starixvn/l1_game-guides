interface IObjectKeys {
    [key: string]: string;
}

export const locales: IObjectKeys = { en: "en", vi: "vi" };
export const languageMapper: IObjectKeys = { "en-US": "en", "vi-VN": "vi" };
export const language = ["en-US", "vi-VN"];
export const Themes = {
    light: "light",
    dark: "dark",
};
