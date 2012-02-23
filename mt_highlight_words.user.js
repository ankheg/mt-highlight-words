
// ==UserScript==
// @name          mt highlight words
// @namespace     http://www.dserg.com
// @description	  website moderator tool: highlight abusive words on page (russian, utf8)
// @include       *
// ==/UserScript==

(function() {

  var words = ['ужас', 'отврат', 'жутк', 'дерьм', 'хуй', 'говн', 'гавн', 'тупая', 'тупой', 'тупые', 'хам', 'пизд', 'пидор', 'пида', 'пидр', 'мудак', 'дебил', 'гемор', ' лох', 'мошен', 'развод', ' кину', ' кида', 'заср', 'хер', 'школ', 'малолет', 'уеб', 'уёб', 'ебан', 'ебал', 'ёба', 'долбо', 'отсто', 'урод', 'сдох', 'бабл', 'нах ', 'лаж', 'лузер', 'убог', 'жульн', 'воры', 'вору', 'украл', 'гони', ' уг ', ' уг.', 'туфт', 'параш', 'парш', 'криворук', 'сосе', 'сосу', 'соса', 'дрян', 'шара', 'черт', 'чёрт', 'бред', 'хрен', 'угроз', 'угрож', 'хохл', 'дохл', 'кошма', 'жуть', 'жлоб'];
  var c = document.body;
  var str = c.innerHTML;
  
  for (var i = 0; i < words.length; i++) {
    str = str.replace(words[i], '&bull;&bull; ' + words[i], 'gi');
    //str = str.replace(words[i], '<span style="background-color: yellow;">' + words[i] + '</span>', 'gi');
  }
  c.innerHTML = str; 
  
})();
