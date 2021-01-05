// webpack.config.js
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        publicPath: 'dist'
    },
};