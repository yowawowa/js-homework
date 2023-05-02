/*
асинхронность - порядок выполнения кода, при котором возможно выполнение кода вне очереди вызовов.
используя асинхронность возможно выполнять долгие сетевые запросы без блокирования основного потока.
простыми словами во время выполнения долгой операции возможно провести несколько быстрых.

callback - это функция, которая передается как аргумент в другую функцию.
в рамках асинхронности callback будет вызван по завершению каких либо действий

*/

function loadScript(src, callback) {

    let script = document.createElement('script');

    script.src = src;

    script.onload = () => callback(script);

    document.head.append(script);

}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {

    alert(`nice, script ${script.src} has been loaded!`);

    alert(_);
});


