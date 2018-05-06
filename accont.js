 /**
 * Created by Дарья on 06.05.2018.
 */
var answer = prompt ('Введите ваш логин','');

 if (answer =='Админ') {
     var passwd = propmt();
     if (passwd =='Черный Властелин'){
         alert('Welcome');
     }
     else if (paswd==null){
         alert ('Вход отменен')
     }
     else {
         alert('Добро пожаловать отсюда');
     }
 }
 else if (answer==null) {
     alert ('Вход отменен');
 }
 else {
     alert('Я вас не знаю');
 }