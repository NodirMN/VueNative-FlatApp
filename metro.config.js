/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = (async () => {
  return {
    transformer: {
      babelTransformerPath: require.resolve("./vueTransformerPlugin.js"),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false
        }
      })
    },
    resolver: {
      assetExts: ["ttf", "png", "jpg"]
    }
  };
})();
