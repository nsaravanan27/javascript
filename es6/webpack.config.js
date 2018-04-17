module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: "D:\\homework\\javascript\\es6\\build",
        filename: "bundle.js"
    },
    module:{
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            } 
        ]
    },
    devServer:{
        port : 3000,
        contentBase: './build',
        inline: true
    }
}