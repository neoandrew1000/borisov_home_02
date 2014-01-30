// JavaScript Document
var vowel = String ('аеёиоуыэюяАЕЁИОУЫЭЮЯ'); // Вводим гласные буквы
var cons  = String ('бвгджзйклмнпрстфхцчшщБВГДЖЗКЛМНПРСТФХЦЧШЩ'); // Вводим согласные буквы
var brief  = String ('йЙ'); // Вводим Й
var other  = String ('ьъЬЪ'); // Вводим другие
var deaf   = String ('кпстфКПСТФ'); // Вводим глухие согласные
var voiced = String ('бвгджзлмнрхцчшщБВГДЖЗЛМНРХЦЧШЩ'); // Звонкие и шипящие согласные
function getVowelString (s) { // Функция отсеивания гласных букв
	var tmpl = String (); // Текущий символ
	var vowelArr = new Array (); // Массив гласных букв
	for (var i = 0; i < s.length; i++) {
		tmpl = s.substr (i,1);
		if (vowel.indexOf (tmpl) !=-1) {
			vowelArr.push (tmpl); continue;
		} // if (vowel.indexOf (tmpl) !=-1)
	} // for (var i = 0; i < s.length; i++)
	return vowelArr.join('|');
} // function getVowelString (s)
function getConsString (s) { // Функция отсеивания согласных букв
	var tmpl = String (); // Текущий символ
	var consArr = new Array (); // Массив согласных букв
	for (var i = 0; i < s.length; i++) {
		tmpl = s.substr (i,1);
		if (cons.indexOf (tmpl) !=-1) {
			consArr.push (tmpl); continue;
		} // if (cons.indexOf (tmpl) !=-1)
	} // for (var i = 0; i < s.length; i++)
	return consArr.join('|');
} // function getConsString (s)
function isNotLastSep (s) { // Проверка слога на наличие гласных
	var is = false;
	for (var i = 0; i < s.length; i++) {
		if (vowel.indexOf (s.substr (i, 1)) != -1) {
			is = true; break;
		} // if (vowel.indexOf (s.substr (i, 1)) != -1)
	} // for (var i = 0; i < s.length; i++)
	return is;
} // function isNotLastSep (s)
function getSeparatedString (s) { // Функция разбиения слова на слоги
	function addSep () { // Функция добавления слога в конец массива и переход к другому
		sepArr.push (tmps);
		tmps = '';		
	} // function addSep ()
	var tmpl = String (); // Текущий символ
	var tmps = String (); // Текущий слог
	var sepArr = new Array (); // Массив слогов
	for (var i = 0; i < s.length; i++){ // Проверка на признаки конца слога
		tmpl = s.substr (i, 1);
		tmps += tmpl; 
		if ((i != 0) && // Если буква равна "Й" и она не первая и не последняя и это не последний слог
		(i != s.length -1) &&
		(brief.indexOf (tmpl) != -1) &&
        (isNotLastSep (s.substr (i+1, s.length-i+1)))) {
			addSep (); continue; 
		}
        // Если текущая гласная и следующая тоже гласная
        if ((i < s.length - 1) && 
        (vowel.indexOf (tmpl) != -1) && 
        (vowel.indexOf (s.substr (i+1, 1)) != -1)) { 
			addSep (); continue; 
		}
        // Если текущая гласная, следующая согласная, а после неё гласная
        if ((i < s.length - 2) && 
        (vowel.indexOf (tmpl) != -1) && 
        (cons.indexOf (s.substr (i+1, 1)) != -1) && 
        (vowel.indexOf (s.substr (i+2, 1)) != -1)) {
			addSep (); continue; 
		}
        // Если текущая гласная, следующая глухая согласная, а после согласная и это не последний слог
        if ((i < s.length - 2) && 
        (vowel.indexOf (tmpl) != -1) && 
        (deaf.indexOf (s.substr (i+1, 1)) != -1) && 
        (cons.indexOf (s.substr (i+2, 1)) != -1) &&
        (isNotLastSep (s.substr (i+1, s.length-i+1)))) { 
			addSep (); continue; 
		}
        // Если текущая звонкая или шипящая согласная, перед ней гласная, следующая не гласная и не другая, и это не последний слог
        if ((i > 0) && 
        (i < s.length - 1) && 
        (voiced.indexOf (tmpl) != -1) && 
        (vowel.indexOf (s.substr (i-1, 1)) != -1) && 
        (vowel.indexOf (s.substr (i+1, 1)) == -1) && 
        (other.indexOf (s.substr (i+1, 1)) == -1) && 
        (isNotLastSep (s.substr (i+1, s.length-i+1)))) { 
			addSep (); continue; 
		}  
        // Если текущая другая, а следующая не гласная если это первый слог
        if ((i < s.length - 1) && 
        (other.indexOf (tmpl) != -1) &&
        ((vowel.indexOf (s.substr (i+1, 1)) == -1) || 
        (isNotLastSep (s.substr (0, i))))) { 
			addSep (); continue; 
		} 
	} // for (var i = 0; i < s.length; i++)
	sepArr.push (tmps);
	return sepArr.join('-');
} // function getSeparatedString (s)