/*
Что такое модуль?
модуль - это скрипт, вынесенный в отдельный файл, объединенный общей идеей и предназначенный для использования в других участках кода.

Объясните принцип работы директив export и import.
export - обозначает элементы кода, которые будут доступны вне модуля (переменные, функции, классы и тд)
import - указывает на функционал другого модуля, который будет использован в данном скрипте

Исправьте ошибку в нижеприведённом коде:
*/
import {sayLike} from './sayLike.js';

alert(sayLike);

sayLike('Javascript');

