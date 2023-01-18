const buildLocalStorageKey = (key: string) => {
    if (typeof window !== "undefined" && window.location && window.location.hostname) {
        return `${window.location.hostname}.${key}`;
    }

    return key;
};

export const localStorageKeys = {
    configs: buildLocalStorageKey("guide-configs-demo"),
};

export const removeLocalStorageItem = (key: string) => {
    localStorage.removeItem(key);
};

export const storeLocalStorageItem = <Type>(key: string, data: Type) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const getLocalStorageItem = <Type>(key: string): Type => {
    return localStorage.getItem(key) && JSON.parse(localStorage.getItem(key) ?? "");
};
