const { override } = require("customize-cra");

module.exports = override((config) => {
  config.resolve = {
    ...config.resolve,
    fallback: {
      ...config.resolve.fallback,
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      buffer: require.resolve("buffer"),
      process: require.resolve("process/browser"),
      vm: false
    },
  };

  // Add a plugin to provide the Buffer and process globals
  config.plugins.push(
    new (require("webpack").ProvidePlugin)({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    })
  );

  return config;
});