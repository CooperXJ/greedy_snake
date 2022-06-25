// 引入一个包
const path = require('path')

//引入html插件
const HtmlWebpackPlugin = require('html-webpack-plugin')

//引入clean插件 清理dist包
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

// webpack的所有配置信息都应该写在module.exports中
module.exports = {
    // 指定入口文件
    entry: "./src/index.ts",

    //指定打包文件所在目录
    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        //指定打包后的文件
        filename: "bundle.js",
        //不使用箭头函数，因为IE浏览器不支持
        // environment: {
        //     arrowFunction: false
        // }
    },

    //指定webpack打包时要使用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //test指定的是规则生效的文件
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 配置babel 主要是为了解决浏览器兼容问题
                    {
                        //指定加载器
                        loader: "babel-loader",
                        options: {
                            //设置预定义环境
                            presets: [
                                [     //指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        //要兼容的目标浏览器
                                        targets: {
                                            "chrome": "100"
                                        },
                                        //指定corejs的版本
                                        "corejs": "3",
                                        //使用corejs的方式，表示按需加载
                                        "useBuiltIns": "usage"
                                    },
                                ],
                            ]
                        },
                    },
                    'ts-loader',
                ],
                //要排除的文件
                exclude: /node-modules/
            },

            //指定less的文件处理
            {
                test: /\.less$/,
                //执行的顺序是从下往上
                use:[
                    "style-loader",
                    "css-loader",
                    //浏览器兼容css
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions:{
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        //每种浏览器最新两个版本支持
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            //自定义html的模板
            template: "./src/index.html"
        }),
    ],

    //用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}