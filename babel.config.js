module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            screens: "./screens",
            components: "./components",
            navigation: "./navigation",
            ui: "./ui",
            hooks: "./hooks",
            store: "./store",
            types: "./types",
            constants: "./constants",
            assets: "./assets",
            api: "./api",
          }
        }
      ]
    ]
  };
};
