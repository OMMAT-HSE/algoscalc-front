import axios from "axios";

export const host = `${window.location.protocol}//${window.location.hostname}`;
//export const host = `http://localhost:4445`; //Хост для локального тестирования

export const prodLink = `${window.location.hostname}`;

export const getAlgorithms = (): Promise<any> => {
    return axios.get(`${host}/api/algorithms`);
};

export const getAlgorithmDescription = (algorithm :String): Promise<any> => {
    return axios.get(`${host}/api/algorithms/${algorithm}`);
};

export const getAlgorithmResult = (algorithm :String, data): Promise<any> => {
    return axios.post(`${host}/api/algorithms/${algorithm}`, data);
};
