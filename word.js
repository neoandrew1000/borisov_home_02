// JavaScript Document
var vowel = String ('аеёиоуыэюяАЕЁИОУЫЭЮЯ'); //Вводим гласные буквы
function getVowelString (s) {
	var tmpl = String (); //Текущий символ
	var vowelArr = new Array (); //Массив гласных букв
	for (var i = 0; i < s.length; i++) {
		tmpl = s.substr (i,1);
		if (vowel.indexOf (tmpl) !=-1) {
			vowelArr.push (tmpl); continue;
		} //if (vowel.indexOf (tmpl) !=-1)
	} //for (var i = 0; i < s.length; i++)
} //function getVowelString (s)