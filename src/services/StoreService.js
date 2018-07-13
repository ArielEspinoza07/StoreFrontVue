import RestService from './RestService'

class StoreService extends RestService {

  constructor(axios) {
    super(axios);
    this.baseUrl = 'http://store-api.local/api/v1/services/stores';
    this.configAxios = {
      url: '',
      method: '',
      responseType: 'json',
      data: {},
      headers: {
        'Content-Type': 'application/json',
      },
      auth: {
        username: 'my_email',
        password: '12345'
      }
    };
  }

  getStores() {
    this.configAxios.url = this.baseUrl;
    this.configAxios.method = 'get';

    return this.request(this.configAxios);
  }

  getStore(id) {
    this.configAxios.url = this.baseUrl + '/' + id;
    this.configAxios.method = 'get';

    return this.request(this.configAxios);
  }

  postStore(data) {
    this.configAxios.url = this.baseUrl;
    this.configAxios.method = 'post';
    this.configAxios.data = data;

    return this.request(this.configAxios);
  }

  putStore(id, data) {
    this.configAxios.url = this.baseUrl + '/' + id;
    this.configAxios.method = 'put';
    this.configAxios.data = data;

    return this.request(this.configAxios);
  }

  deleteStore(id) {
    this.configAxios.url = this.baseUrl + '/' + id;
    this.configAxios.method = 'delete';

    return this.request(this.configAxios);
  }
}


export default StoreService;
