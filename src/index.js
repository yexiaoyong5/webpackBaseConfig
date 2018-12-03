import _ from 'lodash';
import './style.css'
import icon  from './gold.png'
import Data from './xmldata.xml';
import print from './print.js'
import { cube } from './math.js'

function getComponent(){
   return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {  //懒加载写法，对于一些bundle文件太大，使用是加载，提高页面渲染速度
     var element = document.createElement('div');
     var _ = _.default;

     element.innerHTML = _.join(['Hello', 'webpack'], ' ');

     return element;

   }).catch(error => 'An error occurred while loading the component');
  // return ele
} 

const exportParamsExtends = function(params){
  if (typeof(params) === 'object') {
    let storage = window.localStorage
    return Object.assign({isEnableDST:storage['isEnableDST']?true : false},params)
  }else{
    throw new Error('illegal params')
  }
}

 getComponent().then(component => {
   document.body.appendChild(component);
   let s = {a:123}
   console.log(exportParamsExtends(s)) //测试下localstorage
 })

// document.body.appendChild(component())

//  if (module.hot) {
//    module.hot.accept('./print.js', function() {
//      console.log('Accepting the updated printMe module!');
//      print();
//    })
//  }