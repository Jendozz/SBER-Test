export const getNavItemFontWeightByRoute = (route: string) => {
    if (location.pathname === route) return 600;
    return 400;
};
