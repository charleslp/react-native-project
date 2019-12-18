var _Environments = {
  dev: 'development',
  test: 'testing',
  prod: 'production',
};
const environment = 'test';
function getEnvironment() {
  // Insert logic here to get the current platform (e.g. staging, production, etc)
  var platform = environment;

  // ...now return the correct environment
  return _Environments[platform];
}

var Environment = getEnvironment();
module.exports = Environment;
