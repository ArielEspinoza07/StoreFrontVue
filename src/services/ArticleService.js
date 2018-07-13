import RestService from "./RestService";

class ArticleService extends RestService{

  constructor(axios){
    super(axios);
    this.baseUrl = 'http://store-api.local/api/v1/services/articles';
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

  getArticles() {
    this.configAxios.url = this.baseUrl;
    this.configAxios.method = 'get';

    return this.request(this.configAxios);
  }

  searchArticles(data) {
    this.configAxios.url = this.baseUrl;
    this.configAxios.method = 'get';
    this.configAxios.params = data;

    return this.request(this.configAxios);
  }

  getArticle(id) {
    this.configAxios.url = this.baseUrl + '/' + id;
    this.configAxios.method = 'get';

    return this.request(this.configAxios);
  }

  postArticle(data) {
    this.configAxios.url = this.baseUrl;
    this.configAxios.method = 'post';
    this.configAxios.data = data;

    return this.request(this.configAxios);
  }

  putArticle(id, data) {
    this.configAxios.url = this.baseUrl + '/' + id;
    this.configAxios.method = 'put';
    this.configAxios.data = data;

    return this.request(this.configAxios);
  }

  deleteArticle(id) {
    this.configAxios.url = this.baseUrl + '/' + id;
    this.configAxios.method = 'delete';

    return this.request(this.configAxios);
  }
}

export default ArticleService;
