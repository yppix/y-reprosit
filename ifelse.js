/**
 * Created by Дарья on 06.05.2018.
 */
var browser = prompt('Browser','');
if (browser=='IE'){
    alert( 'О, да у вас IE!' );
}
else if (browser == 'Chrome'||'Firefox'||'Safari'||'Opera'){
    alert( 'Да, и эти браузеры мы поддерживаем' );
}
else{
    alert( 'Мы надеемся, что и в вашем браузере все ок!' );
}

