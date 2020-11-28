module.exports = function (config) {
  config.addPassthroughCopy({ public: "./" });
  config.addPassthroughCopy("src/css");

  config.setBrowserSyncConfig({
    files: ["dist/**/*"],
  });

  return {
    templateFormats: ["md", "njk", "jpg", "png", "gif"],
    passthroughFileCopy: true,
    dir: {
      input: "src",
      output: "dist",
      layouts: "_js/layouts",
    },
  };
};
