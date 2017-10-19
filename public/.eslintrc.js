module.exports = {
  extends: 'airbnb-base',
  rules: {
    'no-param-reassign': ['error', { props: false }],
  },
  globals: {
    Vue: true,
  },
  env: {
    browser: true,
  }
};
