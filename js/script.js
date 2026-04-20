/**
 * УПРАВЛЕНИЕ МОБИЛЬНЫМ МЕНЮ
 */

// Функция для открытия/закрытия меню при нажатии на "бургер"
function mobileMenu() {
    // Ищем элемент <navbar> на странице
    var navbar = document.getElementsByTagName("navbar")[0];
    
    // Если навигация не найдена, прерываем выполнение функции
    if (!navbar) return;

    // Переключаем класс "mobile": если его нет — добавляем (меню откроется),
    // если он есть — удаляем (меню закроется)
    navbar.classList.toggle("mobile");
}

// Ждем полной загрузки структуры документа (DOM), прежде чем вешать обработчики
document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementsByTagName("navbar")[0];
    if (!navbar) return;

    // Находим все ссылки внутри навигации
    var links = navbar.getElementsByTagName("a");
    
    // Циклом проходим по каждой ссылке
    for (var i = 0; i < links.length; i++) {
        // Добавляем событие клика на каждую ссылку
        links[i].addEventListener("click", function () {
            // Если ширина экрана меньше или равна 800px (мобильный вид),
            // то при клике на ссылку закрываем меню (удаляем класс "mobile")
            // Это нужно, чтобы меню не перекрывало контент после перехода по якорю
            if (window.innerWidth <= 800) {
                navbar.classList.remove("mobile");
            }
        });
    }

    // Следим за изменением размера окна браузера
    window.addEventListener("resize", function () {
        // Если пользователь растянул окно больше 800px, 
        // принудительно убираем мобильный класс, чтобы избежать багов верстки
        if (window.innerWidth > 800) {
            navbar.classList.remove("mobile");
        }
    });
});


/**
 * ГАЛЕРЕЯ 
 */

// Функция для открытия картинки на весь экран
// Принимает в качестве аргумента (img) сам элемент картинки, на которую нажали
function openImage(img) {
    // Делаем модальное окно видимым (используем flex для центрирования)
    document.getElementById("modal").style.display = "flex";
    
    // Берем путь к картинке (src) у маленького изображения 
    // и подставляем его в большое изображение внутри модального окна
    document.getElementById("modal-img").src = img.src;
}

// Функция для закрытия модального окна
function closeImage() {
    // Просто скрываем элемент с id "modal"
    document.getElementById("modal").style.display = "none";
}