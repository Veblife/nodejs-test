/**
 * Created by veber on 03.07.15.
 */

var server = require("./server");
var router = require("./router");

server.start(router.route);