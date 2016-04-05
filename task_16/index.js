/**
 * Created by lqq on 16-3-21.
 */
/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};
var cityinput=document.getElementById("aqi-city-input");
var aqiinput=document.getElementById("aqi-value-input");
/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
    var city=cityinput.value.trim();
    var aqi=aqiinput.value.trim();
    if(!city.match(/^[A-Za-z\u4E00-\u9FA5]+$/)){
            alert("只能输入中英文字");
//        ！记得要return呀，出错了就不能继续下去了，下面也是！
        return;
    }
      if(!aqi.match(/^\d+$/)){
           alert("只能输入数字");
          return;

      }
    aqiData[city]=aqi;
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
    var src="<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>";
       for(var city in aqiData){
           src+="<tr><td>"+city+"</td><td>"+aqiData[city]+"</td><td><button>删除</button></td></tr>";
           document.getElementById("aqi-table").innerHTML(src);
       }
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
    addAqiData();
    renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
    // do sth.
    renderAqiList();
}

function init() {

    // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
document.getElementById(add-button)
    // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
