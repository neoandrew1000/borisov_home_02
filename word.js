// JavaScript Document
var vowel = String ('аеёиоуыэюяАЕЁИОУЫЭЮЯ'); //Вводим гласные буквы
var cons  = String ('бвгджзйклмнпрстфхцчшщБВГДЖЗКЛМНПРСТФХЦЧШЩ'); //Вводим согласные буквы
function getVowelString (s) { //Функция отсеивания гласных букв
	var tmpl = String (); //Текущий символ
	var vowelArr = new Array (); //Массив гласных букв
	for (var i = 0; i < s.length; i++) {
		tmpl = s.substr (i,1);
		if (vowel.indexOf (tmpl) !=-1) {
			vowelArr.push (tmpl); continue;
		} //if (vowel.indexOf (tmpl) !=-1)
	} //for (var i = 0; i < s.length; i++)
	return vowelArr.join('|');
} //function getVowelString (s)
function getConsString (s) { //Функция отсеивания согласных букв
	var tmpl = String (); //Текущий символ
	var consArr = new Array (); //Массив согласных букв
	for (var i = 0; i < s.length; i++) {
		tmpl = s.substr (i,1);
		if (cons.indexOf (tmpl) !=-1) {
			consArr.push (tmpl); continue;
		} //if (cons.indexOf (tmpl) !=-1)
	} //for (var i = 0; i < s.length; i++)
	return consArr.join('|');
} //function getConsString (s)