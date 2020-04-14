var event, ok;
var mas = [];

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        mas.push(works.a00);
        mas.push(works.a1);
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
            mas.push(isAnswer);
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                mas.push(works.b00);
                mas.push(works.b1);
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                    mas.push(isAnswer);
                } while (!ok);
                mas.push(works.d00);
                mas.push(works.d1);
                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                mas.push(works.b00);
                mas.push(works.b2);
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                    mas.push(isAnswer);
                } while (!ok);
                mas.push(works.d00);
                mas.push(works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        mas.push(works.a00);
        mas.push(works.a2);
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
            mas.push(isAnswer);
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                mas.push(works.c00);
                mas.push(works.c1);
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                    mas.push(isAnswer);
                } while (!ok);
                mas.push(works.d00);
                mas.push(works.d1);
                break;
            case 2: // Второе действие
                mas.push(works.c00);
                mas.push(works.c1);
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                    mas.push(isAnswer);
                } while (!ok);
                mas.push(works.d00);
                mas.push(works.d2);
                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

do {
    event = +prompt(works.e00 + '-1 - Выход из игры');
    if (event == -1) {
        break;
    }
    if (event == 1){
        alert(mas[0]+mas[1]);
    }
    else if(event == 2){
        alert(mas[3]+mas[4]);
    }
    else if(event == 3){
        alert(mas[6]+mas[7]);
    }
    else{
        alert("Неверный ввод!");
    }
        
} while (true);

//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

