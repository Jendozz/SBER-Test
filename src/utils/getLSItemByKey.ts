export const getLsItemByKey = <T>(key: string): T | null => {
    const item = localStorage.getItem(key);
    if (item) {
        return JSON.parse(item);
    }
    return null;
};
