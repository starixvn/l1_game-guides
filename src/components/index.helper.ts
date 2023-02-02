export const getGameConfigProject = (path: string, project: string | undefined, config: Function, templatePath = "game-guide"): any => {
    return import(`./${templatePath}/${path}/configs/${project}/game-configs.ts`).then((mod: any) => {
        config(mod.default);
    });
};
