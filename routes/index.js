const Router = require('koa-router');
const dbWorker = require('../models/dbworker');


const router = new Router();

const homeController = require('../controllers/indexController');
const loginController = require('../controllers/loginController');
const adminController = require('../controllers/adminController');


router.get('/', async (ctx) => {
  ctx.render('index');
});


router.post('/', async (ctx) => {
  console.log(ctx.request.body);
  try {
    await homeController.save(ctx.request.body);
    ctx.render('index');
  } catch (err) {
    console.log(err);
  }
});


router.get('/login', async (ctx) => {
  ctx.render('login');
});

router.post('/login', async (ctx) => {
  try {
    await loginController.saveLogin(ctx.request.body);
    ctx.render('login');
  } catch (err) {
    console.log(err);
  }
});

router.get('/admin', async (ctx) => {
  ctx.render('admin');
});

router.post('/admin/upload', async (ctx) => {
  console.log(ctx.request.files);
  try{
    adminController.upload({...ctx.request.files, ...ctx.request.body});
    ctx.render('admin');

  }catch(err){
    console.log(err);
  }
});

router.post('/admin/skills', async (ctx) => {
  console.log(ctx.request.body)
  try {
    adminController.addSkills(ctx.request.body);
    ctx.render('admin');
  } catch (err) {
    console.log(err);
  }

});

module.exports = router;
