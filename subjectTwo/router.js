function route(pathname, response){
    // console.log("about to route a request for " + pathname);
    if (pathname == '/') {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("根路由");
        response.end();
    } else if (pathname == '/index/page1') {
        response.end('page1');
    } else {
        response.end('404');
    }
}
exports.route = route;