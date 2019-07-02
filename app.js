const koa = require('koa');
var bodyParser = require('koa-bodyparser');
const app = new koa();

const Pug = require('koa-pug');
const pug = new Pug({
  viewPath: './views/pages',
  basedir: './views/pages',
  pretty: true,
  compileDebug: false,
  noCache: true,
  app:app
});

const static = require('koa-static');
app.use(static('./public'))

const router  = require('./routes');
app.use(router.routes())
app.use(router.allowedMethods());

app.listen(3000, ()=>{
  console.log('Server started on 3000 port');
});

module.exports = app;
