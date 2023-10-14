const ACCESS_TOKEN = "ACCESS_TOKEN";

const setToken = token => localStorage.setItem(ACCESS_TOKEN, token);

const getToken = () => localStorage.getItem(ACCESS_TOKEN);

const removeToken = () => localStorage.removeItem(ACCESS_TOKEN);

const localStorageService = {
    setToken,
    getToken,
    removeToken,
};

export default localStorageService;