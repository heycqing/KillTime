
// add.test.js

var add =require('../static/module/add');
var expect = require('chai').expect;

// describe 是'测试套件'，有2个参数，第一个参数是测试名称，第二个参数是作用函数；
// 每个describe 包含一个或者以上的 it
// 
// it 是‘测试用例’ ,有2个参数，第一个参数是测试用例名称，第二个参数是作用函数；
// 
describe('加法函数的测试',function(){
    it('1+1应该等于2',function(){
        expect(add(1,1)).to.be.equal(2);
    });
});