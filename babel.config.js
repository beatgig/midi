module.exports = {
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
    'babel-plugin-add-react-displayname',
  ],
  presets: ['@babel/preset-env', '@babel/preset-react'],
  env: {
    esm: {
      presets: [['@babel/preset-env', { modules: false }]],
      plugins: [['@babel/plugin-transform-runtime', { useESModules: true }]],
    },
  },
}
