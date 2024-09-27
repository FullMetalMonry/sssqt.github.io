const images = [
    'bg1.jpg',
    'bg2.jpg',
    'bg3.jp'
];


function changeBackground() {
    const randomIndex = Math.floor(Math.random() * images.length); // Генерируем случайный индекс
    document.body.style.backgroundImage = `url(${images[randomIndex]})`; // Устанавливаем случайное изображение как фон
    document.body.style.backgroundSize = 'cover'; // Заполнение всего фона
    document.body.style.backgroundPosition = 'center';
}
setTimeout(changeBackground, 3000);