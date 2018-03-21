# node-doc
基于nodejs的在线文档（文档中心） 
基本配置在：
./static/routerCtr.js
``` bash
const docRouter = {
    # 读取文档的根目录路径
    orignPath: 'E:/daheng/markdown-docs/', 
    # 本地/服务器启动的地址
    orignUrl: 'http://localhost',
    # 端口号
    listenPort: 3000,
}
```
## Build Setup

``` bash
# install dependencies
npm install

# serve 
node .\static\server.js

```
