const Router = require('koa-router');
const dbWorker = require('../models/dbworker');


const router = new Router();

const homeController = require('../controllers/indexController');
const loginController = require('../controllers/loginController');
const adminController = require('../controllers/adminController');


router.get('/', async (ctx) => {
  ctx.render('index');
});

router.post('/', async () => {
  homeController.post
});


router.get('/login', async (ctx) => {
  ctx.render('login');
});

router.post('/login', async (ctx) => {
  console.log('Test1',this.req.body);

  ctx.render('login');


  // const {email, password} = ctx.header;
  // try {
  //   dbWorker.saveLogin(email, password);
  //   ctx.render('login');
  // } catch (e) {
  //   console.log(e);
  //   ctx.render('login');
  // }
});

router.get('/admin', async (ctx) => {
  ctx.render('admin');
});

router.post('/admin/upload', async (ctx) => {
  adminController.upload
});

router.post('/admin/skills', async (ctx) => {
  adminController.addSkills
});

module.exports = router;
