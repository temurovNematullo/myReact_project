const { override } = require("customize-cra");

module.exports = override((config) => {
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      process: false, // Убираем process/browser
      vm: false
    },
  };

  // Добавляем плагины
  config.plugins.push(
    new (require("webpack").ProvidePlugin)({
      Buffer: ["buffer", "Buffer"]
    })
  );

  module.exports.jest = (config) => ({
    ...config,
    transformIgnorePatterns: [
      "node_modules/(?!axios)/"
    ]
  });

  return config;
});
