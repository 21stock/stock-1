/*
 * ·�ɴ���
*/
var crypto = require('crypto'), //�������ģ��
    User = require('../models/user.js'), //�����û���¼����
    login = require('./login'),
    stock = require('./stock'),
    people = require('./people'),
    setting = require('./setting'),
    talk = require('./talk'),
    stockroom = require('./stockroom');
    test = require('./test'),

module.exports = function(app){
  app.get('/',function(req,res){
    if(req.session.user){
      // res.render('index', { 
      //   user:req.session.user,
      //   isStock:true
      // });

      //pipe�滻
      res.render('index', {
          user:req.session.user,
          isStock:true
        },function (err, str) {
        //res.setHeader('content-type', 'text/html; charset=utf-8')
        res.write(str)
        // res.write('<section id="s1"></section><section id="s2"></section>')
      })
      var data={is:true};
      setTimeout(function(){
        res.write('111');
        res.end();
      }, 8000);
      


    }else{
      res.redirect('/login');
    }
  });

  app.get('/login',function(req,res){
    login.islogin(req,res);
  });

  app.get('/loginOut',function(req,res){
    login.loginOut(req,res);
  });

  app.get('/people/:name',function(req,res){
    people.show(req,res);
  });

  app.get('/setting',function(req,res){
    setting.show(req,res);
  });

  app.get('/stock/:uid',function(req,res){
    stock.show(req,res);
  });

  app.post('/sign',function(req,res){
    //��post�����ķ�Ӧ
    login.sign(req,res);
  });

  app.post('/login',function(req,res){
    //��post�����ķ�Ӧ
    login.login(req,res);
  });
  
  app.post('/loginAjax',function(req,res){
    login.loginAjax(req,res);
  });
  
  app.get('/watchStock',function(req,res){
    stock.watch(req,res);
  });

  app.get('/stockAboutName',function(req,res){
    stock.aboutName(req,res);
  });

  app.get('/hotStock',function(req,res){
    stock.hotStock(req,res);
  });

  app.get('/watchPeople',function(req,res){
    people.watchPeople(req,res);
  });

  app.get('/unwatchPeople',function(req,res){
    people.unwatchPeople(req,res);
  });

  app.get('/peopleWatchTab',function(req,res){
    people.watchTab(req,res);
  });

  app.get('/peopleFensTab',function(req,res){
    people.fensTab(req,res);
  });

  app.get('/hotPeople',function(req,res){
    people.hotPeople(req,res);
  });

  app.post('/setting',function(req,res){
    setting.post(req,res);
  });

  app.post('/setPassword',function(req,res){
    setting.setPassword(req,res);
  });

  app.get('/talkHistory',function(req,res){
    stockroom.talkHistory(req,res);
  });

  //�ύ����
  app.post('/submitTopic',function(req,res){
    talk.submitTopic(req,res);
  });

  //��ȡ�ҵĻ���
  app.get('/myTopic',function(req,res){
    talk.myTopic(req,res);
  });

  //�ύ����
  app.post('/submitCommentTopic',function(req,res){
    talk.submitCommentTopic(req,res);
  });

  //��ȡ��������
  app.get('/getComment',function(req,res){
    talk.getComment(req,res);
  });

  //��ȡ��ػ���
  app.get('/aboutTopic',function(req,res){
    talk.aboutTopic(req,res);
  });

  app.get('/stockTopic',function(req,res){
    talk.stockTopic(req,res);
  });

  //��ȡ�û���ע�Ĺ�Ʊ�Ļ���
  app.get('/aboutStockTopic',function(req,res){
    talk.aboutStockTopic(req,res);
  });
  //��ȡ@�ҵĻ���
  app.get('/atmeTopic',function(req,res){
    talk.atmeTopic(req,res);
  });

  app.get('/test',function(req,res){
    test.redis(req,res);
  });
};
