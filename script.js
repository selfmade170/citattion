const quotes = [
    { quote: 'Единственный способ сделать великое дело — любить то, что ты делаешь.', author: 'Стив Джобс' },
    { quote: 'Будьте изменением, которое вы хотите видеть в мире.', author: 'Махатма Ганди' },
    { quote: 'Воображение важнее знаний. Знания ограничены, тогда как воображение охватывает целый мир.', author: 'Альберт Эйнштейн' },
    { quote: 'Стремитесь не к успеху, а к ценностям, которые он дает.', author: 'Альберт Эйнштейн' },
    { quote: 'Жизнь — это то, что происходит с тобой, пока ты строишь другие планы.', author: 'Джон Леннон' },
    { quote: 'Неудача — это просто возможность начать сначала, но уже более мудро.', author: 'Генри Форд' },
    { quote: 'Если вы хотите достичь величия, перестаньте просить разрешения.', author: 'Неизвестный автор' },
    { quote: 'Логика может привести вас от А к Б, а воображение — куда угодно.', author: 'Альберт Эйнштейн' },
    { quote: 'Будущее принадлежит тем, кто верит в красоту своих мечтаний.', author: 'Элеонора Рузвельт' },
    { quote: 'Всегда выбирайте самый трудный путь — на нем вы не встретите конкурентов.', author: 'Шарль де Голль' }
];

function getQuoteOfTheDay() {
    const today = new Date();
    const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    const quoteIndex = dayOfYear % quotes.length;
    return quotes[quoteIndex];
}

document.addEventListener('DOMContentLoaded', function() {
    const quoteDisplay = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');

    function displayQuote() {
        const quote = getQuoteOfTheDay();
        quoteDisplay.textContent = `"${quote.quote}" - ${quote.author}`;
    }

    // Display initial quote of the day on load
    displayQuote();

    // If the user still wants a new quote, they can click the button for a random one from the list.
    // Or, we can simply remove the button if it's strictly "quote of the day"
    newQuoteButton.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteDisplay.textContent = `"${randomQuote.quote}" - ${randomQuote.author}`;
        changeBackgroundColor();
    });

    changeBackgroundColor();
});

function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}
