/**
 * Created by Дарья on 06.05.2018.
 */

var login = prompt('Login','');
var message = (login == 'Вася')? alert('Привет'):
    (login == 'Директор')? alert('Здравствуйте'):
        (login == '')? alert('Нет логина'):
            '';
