/**
 * 封装目录内容
 * @param  {string} nav 侧边导航样式html结构
 * @param  {string} content marked解析后的md文档内容
 * @return {string} 返回封装完成的HTML
 */
function randerHtml (nav, content) {
  let html =
  `<!DOCTYPE html>
  <html lang="en">
  
  <head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>文档中心</title>
	<link href="https://cdn.bootcss.com/evil-icons/1.9.0/evil-icons.min.css" rel="stylesheet">
	<script src="https://cdn.bootcss.com/evil-icons/1.9.0/evil-icons.min.js"></script>
	<script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
	  crossorigin="anonymous"></script>
  </head>
  
  <body>
	<div class="nav">
	${nav}
	</div>
	<div class="content">
	  <div style="width:100%">
		<div class="keepfit">
			${content}
		</div>
	  </div>
	</div>
	<style>
	  body,
	  html {
		height: 100%;
		background: #E2E2E2
	  }
  
	  body,
	  ul {
		margin: 0;
		padding: 0;
	  }
	  body {
		font: 14px "微软雅黑", "宋体", "Arial Narrow", HELVETICA;
		-webkit-text-size-adjust: 100%;
	  }
  
	  li {
		list-style: none;
		padding-left:20px;
	  }
  
	  a {
		text-decoration: none;
		padding-right:5px;
	  } 
  
	  .nav {
		white-space:nowrap;
		position: absolute;
		top:0;
		bottom:0;
		max-width: 250px;
		width: 100%;
		overflow-x: scroll;
		height: 100%;
		background: #263238;
		transition: all .3s;
	  }
	  
	  .nav>ul{
		position: absolute;
		top:0;
		bottom:0;
		background: #263238;
		transition: all .3s;
	  }
	  .nav ul{
		min-width:240px;
		height: 100%;
	  }
  
	  .content {
		height: 100%;
		overflow-y: auto;
	  }
	  .keepfit{
		width:100%;
	  }
  
	  @media all and (min-width:768px) {
		.content {
		  margin-left: 350px;
		}
		.keepfit{
		  width:768px;
		}
	  }
  
	  .nav a {
		display: block;
		overflow: hidden;
		/* padding-left: 20px; */
		line-height: 46px;
		max-height: 46px;
		color: #ABB1B7;
		transition: all .3s;
	  }
  
	  .nav a span {
		/* margin-left: 30px; */
	  }
  
	  .nav-item {
		position: relative;
	  }
  
	  .nav-item ul {
		display: none;
		background: rgba(0, 0, 0, .1);
	  }
  
	  .nav-item>a:before {
		content: "";
		position: absolute;
		left: 0px;
		width: 2px;
		height: 46px;
		background: #34A0CE;
		opacity: 0;
		transition: all .3s;
	  }
  
	  .nav .nav-icon {
		font-size: 20px;
		position: absolute;
		margin-left: -1px;
	  }
  
	  .myIcon {
		float: left;
		margin-top: 7px !important;
	  }
  
	  .nav-more,
	  .nav-show {
		float: left;
		margin-right: 20px;
		font-size: 12px;
		transition: transform .3s;
	  }
  
	  .nav-show {
		transform: rotate(90deg);
	  }
  
	  .nav-more {
		transform: rotate(0deg);
	  }
  
	  .nav-show,
	  .nav-item>a:hover {
		color: #FFF;
		background: rgba(0, 0, 0, .1);
	  }
  
	  .nav-item li:hover>a {
		color: #FFF;
		background: rgba(0, 0, 0, .1);
	  }
	</style>
	<style class="markdownCss">
	  body .content {
		font-family: "Microsoft Yahei", Helvetica, arial, sans-serif;
		font-size: 14px;
		line-height: 1.6;
		color: #516272;
	  }
  
	  */ body>*:first-child {
		margin-top: 0 !important;
	  }
  
	  body>*:last-child {
		margin-bottom: 0 !important;
	  }
  
	  a {
		color: #4183C4;
	  }
  
	  a.absent {
		color: #cc0000;
	  }
  
	  a.anchor {
		display: block;
		padding-left: 30px;
		margin-left: -30px;
		cursor: pointer;
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
	  }
  
	  h1,
	  h2,
	  h3,
	  h4,
	  h5,
	  h6 {
		margin: 20px 0 10px;
		padding: 0;
		font-weight: bold;
		-webkit-font-smoothing: antialiased;
		cursor: text;
		position: relative;
	  }
  
	  h1:hover a.anchor,
	  h2:hover a.anchor,
	  h3:hover a.anchor,
	  h4:hover a.anchor,
	  h5:hover a.anchor,
	  h6:hover a.anchor {
		background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA09pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoMTMuMCAyMDEyMDMwNS5tLjQxNSAyMDEyLzAzLzA1OjIxOjAwOjAwKSAgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUM2NjlDQjI4ODBGMTFFMTg1ODlEODNERDJBRjUwQTQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUM2NjlDQjM4ODBGMTFFMTg1ODlEODNERDJBRjUwQTQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5QzY2OUNCMDg4MEYxMUUxODU4OUQ4M0REMkFGNTBBNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5QzY2OUNCMTg4MEYxMUUxODU4OUQ4M0REMkFGNTBBNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsQhXeAAAABfSURBVHjaYvz//z8DJYCRUgMYQAbAMBQIAvEqkBQWXI6sHqwHiwG70TTBxGaiWwjCTGgOUgJiF1J8wMRAIUA34B4Q76HUBelAfJYSA0CuMIEaRP8wGIkGMA54bgQIMACAmkXJi0hKJQAAAABJRU5ErkJggg==) no-repeat 10px center;
		text-decoration: none;
	  }
  
	  h1 tt,
	  h1 code {
		font-size: inherit;
	  }
  
	  h2 tt,
	  h2 code {
		font-size: inherit;
	  }
  
	  h3 tt,
	  h3 code {
		font-size: inherit;
	  }
  
	  h4 tt,
	  h4 code {
		font-size: inherit;
	  }
  
	  h5 tt,
	  h5 code {
		font-size: inherit;
	  }
  
	  h6 tt,
	  h6 code {
		font-size: inherit;
	  }
  
	  h1 {
		font-size: 28px;
		color: #2B3F52;
	  }
  
	  h2 {
		font-size: 24px;
		border-bottom: 1px solid #DDE4E9;
		color: #2B3F52;
	  }
  
	  h3 {
		font-size: 18px;
		color: #2B3F52;
	  }
  
	  h4 {
		font-size: 16px;
		color: #2B3F52;
	  }
  
	  h5 {
		font-size: 14px;
		color: #2B3F52;
	  }
  
	  h6 {
		color: #2B3F52;
		font-size: 14px;
	  }
  
	  .content p,
	  .content blockquote,
	  .content ul,
	  .content ol,
	  .content dl,
	  .content li,
	  .content table,
	  .content pre {
		margin: 15px 0;
		color: #516272;
	  }
  
	  hr {
		background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAECAYAAACtBE5DAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OENDRjNBN0E2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OENDRjNBN0I2NTZBMTFFMEI3QjRBODM4NzJDMjlGNDgiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4Q0NGM0E3ODY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4Q0NGM0E3OTY1NkExMUUwQjdCNEE4Mzg3MkMyOUY0OCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqqezsUAAAAfSURBVHjaYmRABcYwBiM2QSA4y4hNEKYDQxAEAAIMAHNGAzhkPOlYAAAAAElFTkSuQmCC) repeat-x 0 0;
		border: 0 none;
		color: #cccccc;
		height: 4px;
		padding: 0;
  
	  }
  
	  body>h2:first-child {
		margin-top: 0;
		padding-top: 0;
	  }
  
	  body>h1:first-child {
		margin-top: 0;
		padding-top: 0;
	  }
  
	  body>h1:first-child+h2 {
		margin-top: 0;
		padding-top: 0;
	  }
  
	  body>h3:first-child,
	  body>h4:first-child,
	  body>h5:first-child,
	  body>h6:first-child {
		margin-top: 0;
		padding-top: 0;
	  }
  
	  a:first-child h1,
	  a:first-child h2,
	  a:first-child h3,
	  a:first-child h4,
	  a:first-child h5,
	  a:first-child h6 {
		margin-top: 0;
		padding-top: 0;
	  }
  
	  h1 p,
	  h2 p,
	  h3 p,
	  h4 p,
	  h5 p,
	  h6 p {
		margin-top: 0;
	  }
  
	  li p.first {
		display: inline-block;
	  }
  
	  li {
		margin: 0;
	  }
  
	  .content ul,
	  .content ol {
		padding-left: 30px;
	  }
  
	  ul :first-child,
	  ol :first-child {
		margin-top: 0;
	  }
  
	  dl {
		padding: 0;
	  }
  
	  dl dt {
		font-size: 14px;
		font-weight: bold;
		font-style: italic;
		padding: 0;
		margin: 15px 0 5px;
	  }
  
	  dl dt:first-child {
		padding: 0;
	  }
  
	  dl dt> :first-child {
		margin-top: 0;
	  }
  
	  dl dt> :last-child {
		margin-bottom: 0;
	  }
  
	  dl dd {
		margin: 0 0 15px;
		padding: 0 15px;
	  }
  
	  dl dd> :first-child {
		margin-top: 0;
	  }
  
	  dl dd> :last-child {
		margin-bottom: 0;
	  }
  
	  blockquote {
		border-left: 4px solid #ECF0F3;
		/*padding: 0 15px;*/
		padding: 15px;
		background-color: #F7F9FA;
		color: #2B3F52;
	  }
  
	  blockquote> :first-child {
		margin-top: 0;
	  }
  
	  blockquote> :last-child {
		margin-bottom: 0;
	  }
  
	  table {
		padding: 0;
		border-collapse: collapse;
	  }
  
	  table tr {
		border-top: 1px solid #cccccc;
		background-color: white;
		margin: 0;
		padding: 0;
	  }
  
	  table tr:nth-child(2n) {
		background-color: #f8f8f8;
	  }
  
	  table tr th {
		font-weight: bold;
		background-color: #c5c5c5;
		border: 1px solid #ccc;
		margin: 0;
		padding: 6px 13px;
	  }
  
	  table tr td {
		border: 1px solid #cccccc;
		margin: 0;
		padding: 6px 13px;
	  }
  
	  table tr th :first-child,
	  table tr td :first-child {
		margin-top: 0;
	  }
  
	  table tr th :last-child,
	  table tr td :last-child {
		margin-bottom: 0;
	  }
  
	  img {
		max-width: 100%;
	  }
  
	  span.frame {
		display: block;
		overflow: hidden;
	  }
  
	  span.frame>span {
		border: 1px solid #dddddd;
		display: block;
		float: left;
		overflow: hidden;
		margin: 13px 0 0;
		padding: 7px;
		width: auto;
	  }
  
	  span.frame span img {
		display: block;
		float: left;
	  }
  
	  span.frame span span {
		clear: both;
		color: #333333;
		display: block;
		padding: 5px 0 0;
	  }
  
	  span.align-center {
		display: block;
		overflow: hidden;
		clear: both;
	  }
  
	  span.align-center>span {
		display: block;
		overflow: hidden;
		margin: 13px auto 0;
		text-align: center;
	  }
  
	  span.align-center span img {
		margin: 0 auto;
		text-align: center;
	  }
  
	  span.align-right {
		display: block;
		overflow: hidden;
		clear: both;
	  }
  
	  span.align-right>span {
		display: block;
		overflow: hidden;
		margin: 13px 0 0;
		text-align: right;
	  }
  
	  span.align-right span img {
		margin: 0;
		text-align: right;
	  }
  
	  span.float-left {
		display: block;
		margin-right: 13px;
		overflow: hidden;
		float: left;
	  }
  
	  span.float-left span {
		margin: 13px 0 0;
	  }
  
	  span.float-right {
		display: block;
		margin-left: 13px;
		overflow: hidden;
		float: right;
	  }
  
	  span.float-right>span {
		display: block;
		overflow: hidden;
		margin: 13px auto 0;
		text-align: right;
	  }
  
	  code,
	  tt {
		margin: 0 2px;
		padding: 0 5px;
		white-space: nowrap;
		border: 1px solid #eaeaea;
		background-color: #f8f8f8;
		border-radius: 3px;
	  }
  
	  pre code {
		margin: 0;
		padding: 0;
		white-space: pre;
		border: none;
		background: transparent;
	  }
  
	  .highlight pre {
		background-color: #f8f8f8;
		border: 1px solid #cccccc;
		font-size: 13px;
		line-height: 19px;
		overflow: auto;
		padding: 6px 10px;
		border-radius: 3px;
	  }
  
	  pre {
		background-color: #f8f8f8;
		border: 1px solid #cccccc;
		font-size: 13px;
		line-height: 19px;
		overflow: auto;
		padding: 6px 10px;
		border-radius: 3px;
	  }
  
	  pre code,
	  pre tt {
		background-color: transparent;
		border: none;
	  }
  
	  sup {
		font-size: 0.83em;
		vertical-align: super;
		line-height: 0;
	  }
  
	  code {
		white-space: pre-wrap;
		word-break: break-all;
		display: block;
  
	  }
  
	  * {
		-webkit-print-color-adjust: exact;
	  }
  
	  /* @media screen and (min-width: 914px) {
			  body {
				  width: 960px;
				  margin: 0 auto;
			  }
		  } */
  
	  @media print {
		table,
		pre {
		  page-break-inside: avoid;
		}
		pre {
		  word-wrap: break-word;
		}
  
  
	  }
	</style>
	<script>
	  $(function () {
		$('.nav-item>a').on('click', function () {
		  if ($(this).next().css('display') == "none") {
			$(this).next('ul').slideDown(200);
		  } else {
			$(this).next('ul').slideUp(200);
		  }
		});
	  });
	</script>
  </body>
  
  </html>`;

  return html;
}

module.exports = randerHtml;
