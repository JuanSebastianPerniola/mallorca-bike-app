module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [['module:react-native-dotenv']],
  };
};
// This configuration file sets up Babel for a React Native project using Expo.
// It includes the 'babel-preset-expo' preset for Expo compatibility and the 'react