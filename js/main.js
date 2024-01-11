document.getElementById('q_1').addEventListener('click', function () {
    var container = document.getElementById('a_1');
    if (container.style.display === 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
});

document.getElementById('q_2').addEventListener('click', function () {
    var container = document.getElementById('a_2');
    if (container.style.display === 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
});

document.getElementById('q_3').addEventListener('click', function () {
    var container = document.getElementById('a_3');
    if (container.style.display === 'none') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
});


var originalText = ' Что происходит если мне не понравилось качество выполнения работы?';
var newText = ' Мы осуществляем максимальнотщательный подход к выполнению каждого проекта, чтобы удовлетворить все потребности клиента.В случае, если по каким - либо причинам работа н соответствует ожиданиям, мы готовы внести необходимые изменения и улучшения до тех пор, покаы клиент не будет полностью удовлетворен результатом.Мы убеждены, что наша работа оставит лиш положительные эмоции и впечатления';
var isChanged = false;
function changeText() {
    var textElement = document.getElementById('text');
    if (isChanged) {
        textElement.innerHTML = originalText;
        isChanged = false;
    } else {
        textElement.innerHTML = newText;
        isChanged = true;
    }
}

var originalText1 = 'Какова стоимость создания сайта? Сколько это займет времени?';
var newText1 = ' В нашей компании мы стремимся к высокому качеству и удовлетворению клиентов, поэтому каждый проект рассматривается индивидуально. Стоимость создания сайта и время, затраченное на разработку, зависят от множества факторов, таких как функциональные требования, дизайн, сложность разработки, интеграция сторонних сервисов и т.д. Мы готовы обсудить ваши потребности и предоставить вам индивидуальную оценку стоимости и времени на работу. Наша цель - обеспечить вам сайт высокого качества, который будет соответствовать вашим целям и принесет вам успех.';
var isChanged1 = false;
function changeText1() {
    var textElement1 = document.getElementById('text1');
    if (isChanged1) {
        textElement1.innerHTML = originalText1;
        isChanged1 = false;
    } else {
        textElement1.innerHTML = newText1;
        isChanged1 = true;
    }
}

var originalText2 = 'Как происходит обслуживание, и когда принимается оплата?';
var newText2 = 'Наши услуги начинаются с консультации, где менеджер вместе с клиентом обсуждает все потребности и требования по проекту. После окончательного соглашения мы приступаем к выполнению работ. При создании начального концепта сайта мы берем предоплату в размере 50% от общей стоимости. После окончания проекта мы отправляем клиенту фотодоказательство выполненной работы и начинаем ожидать оплату оставшихся 50%. После получения полной суммы мы предоставляем все материалы, файлы и прочие данные, связанные с проектом.';
var isChanged2 = false;
function changeText2() {
    var textElement2 = document.getElementById('text2');
    if (isChanged2) {
        textElement2.innerHTML = originalText2;
        isChanged2 = false;
    } else {
        textElement2.innerHTML = newText2;
        isChanged2 = true;
    }
}
