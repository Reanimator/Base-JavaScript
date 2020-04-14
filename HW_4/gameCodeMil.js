var event, ok;
var geld = 0;
var index = 0;

function game(n00, n1, n2, n3, n4, ant){
    do {
        ok = false;
        event = +prompt(n00 + n1 + n2 + n3 + n4 + '-1 - Выйти и забрать выйгрыш');
        if (event == -1) {
            index = 0;
            return('Вы выйграли ' + geld + ' рублей');
        }
        else if (event == ant){
            geld += 250000;
            index += 1;
            return('Вы ответили правильно и в вашей копилке ' + geld + ' рублей');
        }
        else {
            ok = isAnswer(works.a0, event);
        }
    } while (!ok);
    index = 0;
    return('Вы проиграли и остались без денег.');
}

alert(game(works.a00, works.a1, works.a2, works.a3, works.a4, 1))
if(index!=0){alert(game(works.b00, works.b1, works.b2, works.b3, works.b4, 1))}
if(index!=0){alert(game(works.c00, works.c1, works.c2, works.c3, works.c4, 3))}
if(index!=0){alert(game(works.d00, works.d1, works.d2, works.d3, works.d4, 1))}
if(index==4){alert('Вопросы закончились и вы миллионер!!!')}

alert('Спасибо за игру');


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

