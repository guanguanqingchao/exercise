class BasicPlugin {
    constructor(options) {
        this.options = options
    }

    //Webpack 会调用 BasicPlugin 实例的 apply 方法为插件实例传入 compiler 对象
    apply(compiler) {

        console.log('############', this.options)

        //1. 读取输出资源、代码块、模块及真依赖
        compiler.plugin('emit', function (compilation, cb) {
            //compilation.chunks存放代码块,id name等

            compilation.chunks.forEach(chunk => {

                chunk.files.forEach(filename => {
                    // compilation.assets 存放当前即将输出的所有资源 
                    //compilation.assets 是一个键值对，键为需要输出的文件名称，值为文件对应的内容。
                    //调用一个输出资源的 source ()方法能获取输出 资源的内容
                    let source = compilation.assets[filename].source();
                    // console.log('%%%%%%%%%%%%%%%%', source)


                })

            })


            cb()

        })

        //2. 监听文件的变化
        //当依赖的文件发生变化时会触发 watch-run 事件
        compiler.plugin('watch-run', (watching, cb) => {
            //获取发生变化的文件列表
            // const changedFiles = watching.compiler.watchFileSystem.watcher.mtimes;

            //changedFiles 格式为键值对,键为发生变化的文件路径 。 
            // if (changedFiles[filePath] !== undefined) {
            //     //filePath 对应的文件发生了变 化 callback() ;
            // }
            // cb();

        })


        //3. 修改输出资源
        // compiler.plugin('emit', (compilation, cb) => {


        //     compilation.assets[fileName] = {
        //         //返回文件内容
        //         source: () => {
        //             return fileContent
        //         },
        //         //返回文件大仙
        //         size: () => {
        //             return Buffer.byteLength(fileContent, 'utf8');
        //         }
        //     };
        //     cb()
        // })

        // compiler.plugin('emit', (compilation, callback) => {
        //     // 读取名称为 fileName 的输出资源
        //     const asset = compilation.assets[fileName];
        //     // 获取输出资源的内容
        //     asset.source();
        //     //获取输出资源的文件大小 
        //     console.log('&&&&&&&&&&', asset.size());
        //     callback();
        // });
    }



}

module.exports = BasicPlugin;