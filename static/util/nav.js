const fs = require('fs')
const marked = require('marked')
const process = require('child_process')

// 获取路由配置
const docRouter = require('./routerCtr')
// 封装渲染html的模板
const randerHtml = require('./frontMould')

/**
 * 遍历读取目录内容（子目录，文件名）
 * @param  {string} reqPath 请求资源的绝对路径
 * @return {text/html} 渲染过的html模板
 */


/**
 * 读取静态文件目录 生成目录结构
 * @function getNavStructure
 * @param  {string} url 文件夹层级路径
 * @param  {string} path 当前读取的目录路径
 * @return {arr} list 读取生成的目录结构
 */
let getNavStructure = ( path, url ) => {
  let files = fs.readdirSync( path )
  let list = []
  for(let i=0;i<files.length;i++){
    let item = {}
    item.name = files[i]
    
    if(fs.statSync(path + files[i]).isDirectory()){ // 判断是否是文件夹类型
      if(files[i][0] === '_' || files[i][0] === '.'){continue} // 跳过'_' 或 '.' 开头的文件夹
      item.children = getNavStructure(path + files[i]+'/', url +'/'+ files[i])
    }else{
      item.url = url || ''
    }
    list.push(item)
  }
  return list
}

/**
 * 遍历目录结构 转成html格式
 * @function NavTurnHtml
 * @param  {arr} arr 侧边栏目录结构
 * @return {text/html} 渲染过的侧边导航栏部分html模板
 */
let NavTurnHtml = ( arr ) => {
  let navTree = '<ul>'
  for(let j=0;j<arr.length;j++){
    navTree = navTree + 
    `<li class="nav-item">`
      if(arr[j].children){
        navTree = navTree + 
        `<a href="javascript:;">`
        if(arr[j].children.length){
          navTree = navTree + 
          `<span>
            <div class="myIcon nav-more" data-icon="ei-chevron-right"></div>
            ${arr[j].name}
          </span>
        </a>`
        }else{
          navTree = navTree + 
          `<span>${arr[j].name}<span style="opacity:0.5;margin:0;"> (no files)</span></span>
        </a>`
        }
          navTree = navTree + NavTurnHtml(arr[j].children)
      }else{
        navTree = navTree + 
        `<a href="${docRouter.orignUrl}:${docRouter.listenPort}${arr[j].url}/${arr[j].name}">
          <span>${arr[j].name}</span>
        </a>`
      }
      navTree = navTree + '</li>'
  }
  return navTree + '</ul>'
}

function randerHtmlMould ( repath ){
// // 原githook更新远程仓库的替代方案 待完善
//   process.exec('git pull', {cwd:docRouter.orignPath},(error, stdout, stderr) => {
//     console.log(stdout)
//   })

  let navData = getNavStructure(docRouter.orignPath, '') // 获取侧边导航栏的数据结构

  let navTree = NavTurnHtml(navData) // 渲染成固定html结构

  let readMd = marked(fs.readFileSync(repath,'utf-8'))

  // 嵌套进html模板并返回
  return randerHtml(navTree, readMd) 
  
};
module.exports = randerHtmlMould