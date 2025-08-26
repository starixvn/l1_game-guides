export const getGameConfigProject = (path: string, project: string | undefined, config: Function, templatePath = "game-guide"): any => {
    return import(`./${templatePath}/${path}/configs/${project}/game-configs.ts`).then((mod: any) => {
        config(mod.default);
    });
};

export const isTolgeeSupportLanguage = (languageTag: string) => {
    return !["th", "id", "vi", "zh_cn", "zh_tw"].includes(languageTag);
};
