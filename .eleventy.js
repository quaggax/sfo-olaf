module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./assets/.");
    eleventyConfig.addPassthroughCopy({ "./node_modules/bootstrap-icons/font/fonts/.": "assets/fonts/bootstrap-icons" })

    return {
        dir: {
            input: "src",
        },
        pathPrefix: "/sfo-olaf/",
    };
};