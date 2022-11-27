import API from "./base-url";

export const apiGovern = () => API({ baseURL: process.env.NEXT_PUBLIC_URL_GOVERNMENT});

export const governPerWeekAPI = async () => await apiGovern().get('/Cases/today-cases-all');

export const governPerProvinceAPI = async () => await apiGovern().get('/Cases/today-cases-by-provinces');