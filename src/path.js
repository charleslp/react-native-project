import Environment from './environment';

function initHost() {
  if (Environment === 'development') {
    return {
      url: '这是开发环境的接口',
    };
  } else if (Environment === 'testing') {
    return {
      url: '这是测试环境的接口',
    };
  } else if (Environment === 'production') {
    return {
      url: '这是生产环境的接口',
    };
  }
}

const systemUrl = initHost();
export default systemUrl;
