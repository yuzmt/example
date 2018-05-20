
//通过改变“占位符”图片的src属性的办法将其替换为参数图片
function showPic(whichpic) {
	var source = whichpic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	//当图片库页面上的某个图片链接被点击时，这个链接的title属性值将被提取并保存到text变量中
	var text = whichpic.getAttribute("title");
	//得到id是description的p元素，并保存到description变量中
	var description = document.getElementById("description");
	
	//具体到id为description的<p>元素，因为它只有一个子节点，因此用firstChild属性
   //alert(description.childNodes[0].nodeValue);
   //nodeValue不仅可以用来检索节点的值，还可以设置节点的值
   //吧description对象的第一个子节点的nodeValue属性值设置为变量text的值
   description.firstChild.nodeValue = text;
}

//事件处理函数：
//1、onmouseover——鼠标指针悬停在某个元素上时触发一个动作；
//2、onmouseout——鼠标指针离开某个元素时触发一个动作；
//3、onclick——用户点击某个链接时触发一个动作

//this表示：这个<a>元素节点，此时，showPic函数会被调用，链接被点击的默认行为也会被调用（打开新的窗口）
// return false;的作用是防止用户被带到默认的目标链接窗口
//onclick = "showPic(this); return false;"


//body元素应该只有h1、ul、img三个子元素，alert显示8个，因为childNodes属性返回所有类型的节点，不仅仅是元素节点
// function countBodyChildren() {
// 	var body_element = document.getElementsByTagName("body")[0];
// 	alert(body_element.childNodes.length);	
// }


//nodeType属性共有12种可取值，仅有3种具有实用价值
//1、元素节点的nodeType属性值是1；
//2、属性节点的nodeType属性值是2；
//3、文本节点的nodeType属性值是3；
//意味着，可以让函数
// function countBodyChildren() {
// 	var body_element = document.getElementsByTagName("body")[0];
// 	alert(body_element.nodeType);	
// }
// //在页面加载时调用countBodyChildren函数
//  window.onload = countBodyChildren;