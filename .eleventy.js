module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./assets/.");

    return {
        dir: {
            input: "src",
        },
        pathPrefix: "/sfo-olaf/",
    };
};