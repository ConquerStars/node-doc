const path = require('path')
const fs = require('fs')

// 获取路由配置
const docRouter = require('./routerCtr')

// 获取全部目录
const randerHtmlMould = require('./nav')

/**
 * 获取静态资源内容
 * @param  {object} ctx koa上下文
 * @param  {string} 静态资源目录在本地的绝对路径
 * @return  {string} 请求获取到的本地内容
 */
async function content(ctx) {
  let reqPath = decodeURI(path.join(docRouter.orignPath, ctx.url))

  // 判断请求路径是否为存在目录或者文件
  let exist = fs.existsSync(reqPath)

  let content = ''

  if (!exist) {
    content = '<h1 style="text-align:center;margin-top:50px;">404 Not Found!</h1>'
  } else {
    let stat = fs.statSync(reqPath)

    if (stat.isDirectory()) {
      ctx.response.redirect('/readme.md');
    } else {
      let fileType = path.extname( reqPath ).toLowerCase()
      if(fileType == '.md' || fileType == '.txt'){
        content = randerHtmlMould(reqPath)
      }else{
        content = fs.readFileSync(reqPath,'binary')
      }
    }
  }

  return content
}

module.exports = content