// 阅读推荐的链接，复习JavaScript中数组的相关方法

// 写程序判断下列变量是不是数组类型。
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a));
console.log(Array.isArray(b));

// 编写程序，将下面数组中的每一项都乘以2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
b = a.map(function (item, index) {
    //执行某些操作
    return item * 2;
});
console.log(b);

// 编写程序，按下面的要求输出结果。
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var res1 = "";
for (i = 0; i < colors.length; i++) {
    res1 = res1.concat(colors[i], ' ');
}
console.log(res1);

// 编写程序，将下面数组中的数字按从大到小的顺序排序。
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]

a.sort(function (x, y) {
    if (x < y) return 1;
    else if (x > y) return -1;
    else return 0;
});
console.log(a);



// 编程程序，找出下列数组中出现频率最高的元素。
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
var tmp = {};
var maxNum = 0;
var maxSym = null;
for (i = 0; i < a.length; i++) {
    var t = a[i];
    tmp[t] === undefined ? tmp[t] = 1 : (tmp[t]++);
    // 同一个循环中判断
    if (tmp[t] > maxNum) {
        maxSym = t;
        maxNum = h[t];
    }
}
console.log('出现频率最高的元素：' + maxSym + '， 次数为：' + maxNum);

