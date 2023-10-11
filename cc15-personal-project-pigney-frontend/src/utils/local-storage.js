const ACCESS_TOKEN = "ACCESS_TOKEN";

const setToken = token => localStorage.setItem(ACCESS_TOKEN, token);

const getToken = () => localStorage.getItem(ACCESS_TOKEN);

const removeToken = () => localStorage.removeToken(ACCESS_TOKEN);

