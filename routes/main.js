var express = require('express');
var router = express.Router();
var pool = require('../db/connection');


router.get('/', function(req, res, next) {
  // res.set('Content-Type', 'application/json; charset=utf-8')
  res.set('Content-Type', 'application/json; charset=utf-8')
  // connection.connect();
  // console.log(connection.state)

  // var sql = `SHOW DATABASES;`
  // connection.query('SHOW DATABASES;', function(err, rows, fields) {
  //   console.log('SHOW DATABASES')
  //   if (err) throw err;
  //   console.log('rows', rows);
  //   console.log('fields', fields);
  // })
  // connection.query('USE test;', function(err, rows, fields) {
  //   console.log('USE test')
  //   if (err) throw err;
  //   console.log('rows', rows);
  //   console.log('fields', fields);
  //   return connection;
  // })
  // connection.query('SHOW TABLES;', function(err, rows, fields) {
  //   console.log('SHOW TABLES')
  //   if (err) throw err;
  //   console.log('rows', rows);
  //   console.log('fields', fields);
  // })
  // var createTableSql = `CREATE TABLE student (
  //   id int(100) unsigned NOT NULL AUTO_INCREMENT,
  //   name varchar(32) NOT NULL DEFAULT '' COMMENT '姓名',
  //   class varchar(20) NOT NULL DEFAULT '' COMMENT '班级',
  //   PRIMARY KEY (id)
  // )ENGINE=InnoDB;`
  // connection.query(createTableSql, function(err, rows, fields) {
  //   console.log('Create Table')
  //   if (err) throw err;
  //   console.log('rows', rows);
  // })
  // connection.query('DROP TABLE IF EXISTS user_accounts;', function(err, rows, fields) {
  //   if (err) throw err;
  //   console.log('rows', rows);
  // })
  // var createTableSql = `CREATE TABLE user_accounts (
  //     id int(100) unsigned NOT NULL AUTO_INCREMENT primary key,
  //     password varchar(32) NOT NULL DEFAULT '' COMMENT '用户密码',
  //     reset_password tinyint(32) NOT NULL DEFAULT 0 COMMENT '用户类型: 0-不需要重置密码; 1-需要重置密码;',
  //     mobile varchar(32) NOT NULL DEFAULT '' COMMENT '手机',
  //     create_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  //     update_at timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  //     UNIQUE INDEX idx_user_mobile(mobile)
  //   )
  //   ENGINE=InnoDB DEFAULT CHARSET=utf8
  //   COMMENT='用户表信息';
  // `
  // connection.query(createTableSql, function(err, rows, fields) {
  //   if (err) throw err;
  //   console.log('rows', rows)
  // })
  // var insertSql = `INSERT INTO user_accounts (mobile, password) VALUES ('17682488600', '123456')
  // ON DUPLICATE KEY UPDATE mobile=VALUES(mobile), password=VALUES(password);`
  // connection.query(insertSql, function(err, rows, fields) {
  //   if (err) throw err;
  //   console.log('insert inte success')
  //   console.log(rows)
  // })
  // connection.query(searchSql, function(err, rows, fields) {
  //   if (err) throw err;
  //   console.log('search sql')
  //   console.log(rows)
  //   console.log('connection.release', connection.release)
  //   connection.release && connection.release()
  //   res.send(JSON.stringify(rows));
  //   connection.end()
  // })

  pool.getConnection(function(err, con) {
    if (err) throw err;
    var searchSql = `SELECT * FROM user_accounts`;
    con.query(searchSql, function(err, rows) {
      if (err) throw err;
      con.release();
      const data = {
        code: 0,
        message: '',
        data: rows
      }
      res.send(JSON.stringify(data));
    })
  })

});

router.get('/:id', function(req, res) {
  var searchSql = `SELECT * FROM user_accounts WHERE id=${req.params.id} limit 1`;
  pool.getConnection(function (err, con) {
    if (err) throw err;
    con.query(searchSql, function(err, rows) {
      if (err) throw err;
      con.release();
      const data = {
        code: 0,
        message: '',
        data: rows[0] || {}
      }
      res.send(JSON.stringify(data));
    })
  })
})

router.post('/', function(req, res){
  pool.getConnection(function(err, con){
    if (err) throw err;
    const insertSql = `INSERT INTO user_accounts (mobile, password) VALUES (${req.body.mobile}, ${req.body.password}) ON DUPLICATE KEY UPDATE mobile=VALUES(mobile), password=VALUES(password);`
    con.query(insertSql, function(err, rows) {
      if (err) throw err;
      con.release();
      const data = {
        code: 0,
        message: '',
        data: rows[0] || {}
      }
      if (rows.insertId > 0) {
        data.message = 'ok'
      } else {
        data.message = 'not change'
      }
        res.send(JSON.stringify(data));
    })
  })
})

router.put('/:id', function(req, res) {
  var updateSql = `UPDATE user_accounts SET mobile=${req.body.mobile} WHERE id=${req.params.id} `
  pool.getConnection(function(err, con) {
    if(err) throw err;
    con.query(updateSql, function(err, rows) {
      if(err) throw err;
      con.release();
      const data = {
        code: 0,
        message: '',
        data: rows[0] || {}
      }
      if (rows.changedRows > 0) {
        data.message = 'ok'
      } else {
        data.message = 'not change'
      }
      res.send(JSON.stringify(data));
    })
  })
})

router.delete('/:id', function(req, res) {
  var deleteSql = `DELETE FROM user_accounts WHERE id=${req.params.id};`
  pool.getConnection(function(err, con) {
    if(err) throw err;
    con.query(deleteSql, function(err, rows) {
      if(err) throw err;
      const data = {
        code: 0,
        message: '',
        data: rows[0] || {}
      }
      if (rows.affectedRows > 0)  {
        data.message = 'ok'
      } else {
        data.message = 'not change'
      }
      res.send(JSON.stringify(data));
    })
  })
})

module.exports = router;
