// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает до последующего отжатия клавиши. */

// console.log('keypress');
// console.log('charCode: ' + event.charCode); //q 113 Q 81
// console.log('code: ' + event.code);
// console.log('key: ' + event.key);
// console.log('keyCode: ' + event.keyCode);

//отменяем стандартное поведение tab, alt что бы input не терял фокус
document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.code == 'Tab' || evt.code == 'AltLeft' || evt.code == 'AltRight') {
        evt.preventDefault();
    }
};

let keys = document.querySelectorAll('.key');
let input = document.querySelector('.i-11');

//добавляем класс
function classShow(elem, className) {
    elem.classList.add(className);
}

//удаляем класс
function classRemove(elem, className) {
    elem.classList.remove(className);
}

function t11(event) {

    keys.forEach(item => {
        //если есть атрибут data 
        if (item.getAttribute('data') !== null) {
            // то проверяем его на равенство с  event.code
            if (item.getAttribute('data') == event.code) {
                //при совпадении добавляем класс активности 
                classShow(item, 'active');
            } else {
                //и удаляем у остальных 
                classRemove(item, 'active');
            }

            // если атрибута data нет, то проверяем равно ли event.key текту в названии клавиши в разных регистрах
        } else if (item.textContent == event.key || item.textContent.toUpperCase() == event.key) {
            //при совпадении добавляем класс активности 
            classShow(item, 'active');

        } else {
            //и удаляем у остальных 
            classRemove(item, 'active');

        }
    });

}

function t12() {
    keys.forEach(item => {
        classRemove(item, 'active');
    });

}

// ваше событие здесь!!!
input.onkeydown = t11;
input.onkeyup = t12;