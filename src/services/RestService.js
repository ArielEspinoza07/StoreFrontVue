class RestService {

  constructor(axios) {
    this.axios = axios;
  }

  request(data) {
    return this.axios.request(data);
  }
}


export default RestService;
