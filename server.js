var http=require('http');
http.createServer(function(request,response){
  //发送http头部
  //状态值 内容类型
  response.writeHead(200,{'Content-Type':'text/html;charset=uft-8'});

  //发送数据
  response.end('Hello World');
}).listen(3030);

console.log('server running at http://127.0.0.1:3030/');