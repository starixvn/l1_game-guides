import React from "react";

type ImgVersionContextType = {
    imgVersion: string;
};

export const ImgVersionContext = React.createContext<Partial<ImgVersionContextType>>({});

ImgVersionContext.displayName = "ImgVersionContext";

export const ImgVersionProvider = ImgVersionContext.Provider;
export const ImgVersionConsumer = ImgVersionContext.Consumer;
export const useImgVersionContext = () => React.useContext(ImgVersionContext);
