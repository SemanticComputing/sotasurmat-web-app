module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: '> 0.25%, not dead'
      }
    ],
    '@babel/preset-react'
  ];
  const plugins = [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime' // for async/await in node
  ];

  return {
    presets,
    plugins
  };
};
