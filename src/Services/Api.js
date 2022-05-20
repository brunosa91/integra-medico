import axios from "axios";

export const Api = axios.create({
  baseURL: "http://localhost:4000/cadastro",
});

export const ApiCep = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

// 07150020/json/
