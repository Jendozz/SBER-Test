export const setLSItemByKey = <T>(key: string, item: T) => {
    localStorage.setItem(key, JSON.stringify(item));
};
