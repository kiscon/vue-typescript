let ENV = process.env.NODE_ENV || 'development'
let commonApi = {
  development: {
    base_api_url: 'https://api.myjson.com/bins/70goa',
  },
  test: {
    base_api_url: 'https://api.myjson.com/bins/17xc6i',
  },
  production: {
    base_api_url: 'https://api.myjson.com/bins/er3je',
  }
}

export default commonApi[ENV]
