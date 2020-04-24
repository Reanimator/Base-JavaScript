var concept = {
    price: 0,
    count: 0,
    summa: 0
};
var ferrari = {
    price: 0,
    count: 0,
    summa: 0
};
var ford = {
    price: 0,
    count: 0,
    summa: 0
};
var ii = document.getElementById('itog');
var itog = document.createElement('li');
var ss = concept.summa + ferrari.summa + ford.summa;
var imgArr = ["concept.jpg", "ferrari.jpg", "ford.jpg"];
var imgIndex = 0;
console.log(imgArr[0]);

function slider(id) {
    var imgBlockSmall = document.getElementById(id);
    console.log(imgBlockSmall);
    var imgPath = imgBlockSmall.src.replace('small', 'big');
    var imgBlockBig = document.getElementById("big");
    imgBlockBig.src = imgPath;
}

function imgErr() {
    alert("Изображение не найдено.");
}

function buy(id) {
    var d = document.getElementById(id);
    var ol = document.getElementById('goods');
    var li = document.getElementById("li_" + id);

    if (li != null) {
        switch (id) {
            case 'concept':
                concept.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
            case 'ferrari':
                ferrari.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
            case 'ford':
                ford.count = parseInt(li.innerHTML.split(' ')[1]) + 1;
                break;
        }
    } else {
        switch (id) {
            case 'concept':
                newLi = document.createElement('li');
                newLi.innerHTML = 'concept: 1';
                newLi.id = 'li_concept';
                ol.appendChild(newLi);
                concept.count = 1;
                break;
            case 'ferrari':
                newLi = document.createElement('li');
                newLi.innerHTML = 'ferrari: 1';
                newLi.id = 'li_ferrari';
                ol.appendChild(newLi);
                ferrari.count = 1;
                break;
            case 'ford':
                newLi = document.createElement('li');
                newLi.innerHTML = 'ford: 1';
                newLi.id = 'li_ford';
                ol.appendChild(newLi);
                ford.count = 1;
                break;
        }
    }

    switch (id) {
        case 'concept':
            console.log(d.getElementsByTagName('p')[0]);
            concept.price = d.getElementsByTagName('p')[0].innerHTML;
            concept.summa = concept.count * concept.price;
            break;
        case 'ferrari':
            ferrari.price = d.getElementsByTagName('p')[0].innerHTML;
            ferrari.summa = ferrari.count * ferrari.price;
            break;
        case 'ford':
            ford.price = d.getElementsByTagName('p')[0].innerHTML;
            ford.summa = ford.count * ford.price;
            break;
    }

    if (li != null) {
        switch (id) {
            case 'concept':
                li.innerHTML = "concept: " + concept.count + " шт. за " + concept.price + " на сумму " + concept.summa;
                break;
            case 'ferrari':
                li.innerHTML = "ferrari: " + ferrari.count + " шт. за " + ferrari.price + " на сумму " + ferrari.summa;
                break;
            case 'ford':
                li.innerHTML = "ford: " + ford.count + " шт. за " + ford.price + " на сумму " + ford.summa;
                break;
        }
    } else {
        switch (id) {
            case 'concept':
                newLi.innerHTML = "concept: " + concept.count + " шт. за " + concept.price + " на сумму " + concept.summa;
                break;
            case 'ferrari':
                newLi.innerHTML = "ferrari: " + ferrari.count + " шт. за " + ferrari.price + " на сумму " + ferrari.summa;
                break;
            case 'ford':
                newLi.innerHTML = "ford: " + ford.count + " шт. за " + ford.price + " на сумму " + ford.summa;
                break;
        }
    }

    if (ii != null) {
        ii.parentNode.removeChild(ii);
    }

    itog.id = 'itog';
    ol.appendChild(itog);
    itog.innerHTML = "Итого:" + ss;
}

function forward(id) {
    var img = document.getElementById(id);
    (imgIndex == 2) ? imgIndex = 0: imgIndex++;
    img.src = "img/big//" + imgArr[imgIndex];
}

function back(id) {
    var img = document.getElementById(id);
    (imgIndex == 0) ? imgIndex = 2: imgIndex--;
    img.src = "img/big//" + imgArr[imgIndex];
}
