const BASE_ADDRESS = `http://localhost:`;
const PORT = `8080`;
const API_VERSION = `/api/v1`;

export const BASE_ENDPOINT = BASE_ADDRESS + PORT + API_VERSION;

export const POST_AUTH = `${BASE_ENDPOINT}/login`;
export const POST_REGISTER = `${BASE_ENDPOINT}/register`;
export const GET_WHO_AM_I = `${BASE_ENDPOINT}/whoami`;
export const GET_REFRESH = `${BASE_ENDPOINT}/refresh`;
