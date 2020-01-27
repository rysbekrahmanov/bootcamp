/*— все HTML-элементы strong и окрасьте их в зеленый цвет
— найдите все HTML-элементы em и добавьте им класс .selected
— Найдите все элементы mark, которые находятся в div с классом row и задайте им класс .selected
— Найдите все гиперссылки и удалите у них подчеркивания
— Найдите все HTML-элементы, который содержат слово «Задания» и находятся в элементе с классом .container
— Переключите элементы strong с классом some в состояние без этого класса, а тем элементам (strong), у которых небыло этого класса — добавьте.
— среди набора элементов с классом .row удалите класс у второго элемента
— прочитайте CSS-свойство color у второй гиперсылки в тексте */

$('strong').css('color','green');

$('em').addClass('selected');

$('.row mark').addClass('selected');

$('a').css('text-decoration', 'none');

$('strong').toggleClass('some');

$('.row:eq(1)').removeClass('row');

console.log($('a:eq(1)').css('color'));