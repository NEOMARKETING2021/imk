module.exports = function (eleventyConfig) {
  eleventyConfig.ignores.add("src/partials");
  eleventyConfig.ignores.add("src/layouts");

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};
