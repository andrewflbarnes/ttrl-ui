/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/__dist__',
  },
  plugins: [
    '@snowpack/plugin-vue',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-babel',
    ['@snowpack/plugin-postcss', {
      'cmd': 'postcss',
      'input': '.css',
      'output': '.css',
    }],
    '@snowpack/plugin-webpack'
  ],
  install: [
    /* ... */
  ],
  installOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    'baseUrl': './'
  },
  proxy: {
    /* ... */
  },
  alias: {
    /* ... */
  },
};