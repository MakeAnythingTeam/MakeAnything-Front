import axios from 'axios';

export const commonAxios = ({ url, method, params, data, body }) => {
  return axios({
    url: `https://virtserver.swaggerhub.com/Torres-09/MakeAnythingAPI/1.0.0/${url}`,
    method,
    params,
    data,
    body,
  });
};
