document.addEventListener("DOMContentLoaded", () => {

    const body = $('body');
    const loginButton = $('.modal__login-trigger');
    const contactsButton = $('.modal__contacts-trigger');
    const overflow = $('.overflow');
    const loginFormButton = $('#login-form__submit');
    const contactsFormButton = $('#contacts-close');

    $(loginButton).click(() => {
        $(body).toggleClass('modal-open');
    });

    $(contactsButton).click(() => {
        $(body).toggleClass('contacts-open');
    });

    $(overflow).click(() => {
        $(body).removeClass('modal-open');
        $(body).removeClass('contacts-open');
    });

    $(loginFormButton).click(() => {
        $(body).removeClass('modal-open');
    });

    $(contactsFormButton).click(() => {
        $(body).removeClass('contacts-open');
    });


    $(".image").click(function() { // Событие клика на маленькое изображение
        var img = $(this); // Получаем изображение, на которое кликнули
        var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $("body").append("<div class='popup'>" + //Добавляем в тело документа разметку всплывающего окна
            "<div class='popup_bg'></div>" + // Блок, который будет служить фоном затемненным
            "<img src='" + src + "' class='popup_img' />" + // Само увеличенное фото
            "</div>");
        $(".popup").fadeIn(200); // Медленно выводим изображение
        $(".popup_bg").click(function() { // Событие клика на затемненный фон	   
            $(".popup").fadeOut(200); // Медленно убираем всплывающее окн	
            setTimeout(function() { // Выставляем таймер
                $(".popup").remove(); // Удаляем разметку всплывающего окна
            }, 200);
        });
    });

    $(".modal__login-trigger, .modal__contacts-trigger").click(() => {
        $(".menu-popup").slideUp(200);
    });

    $(".header__hamburger,  .menu-close").click(() => {
        $(".menu-popup").slideToggle(200);
        // $('body').toggleClass('menu-open');
    });


});