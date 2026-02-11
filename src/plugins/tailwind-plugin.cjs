// Docusaurus plugin to integrate TailwindCSS v4 via PostCSS
module.exports = function tailwindPlugin() {
  return {
    name: 'tailwind-plugin',
    configurePostCss(postcssOptions) {
      postcssOptions.plugins = [
        require('@tailwindcss/postcss'),
        require('autoprefixer'),
      ];
      return postcssOptions;
    },
  };
};
