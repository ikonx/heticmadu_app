module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver', {
        extensions: [
          '.tsx',
          '.ts',
          '.js'
        ],
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@styleGuide': './src/styleGuide',
          '@utils': './src/utils'
        }
      }
      ]
    ]
  };
};
