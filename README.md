# icustom-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

1.使用我们定制的 cnpm (gzip 压缩支持) 命令行工具代替默认的 npm:


npm install -g cnpm --registry=https://registry.npm.taobao.org
2.把npm的register给永久设置过来就好了，这样使用cnpm或者npm就没差别了。（可选可不选）

npm config set registry https://registry.npm.taobao.org-- 配置后可通过下面方式来验证是否成功

npm config get registry


For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
