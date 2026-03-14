const articles = [
{
	id: 1,
	title: 'Septimus Heap Book One: Magyk',
	date: 'July 5, 2022',
	description:
		'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
	imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
	imgAlt: 'Book cover for Septimus Heap 1',
	ages: '10-14',
	genre: 'Fantasy',
	stars: '⭐⭐⭐⭐'
},
{
	id: 2,
	title: 'Magnus Chase Book One: Sword of Summer',
	date: 'December 12, 2021',
	description:
		'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
	imgSrc:
		'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
	imgAlt: 'Book cover for Magnus Chase 1',
	ages: '12-16',
	genre: 'Fantasy',
	stars: '⭐⭐⭐⭐'
},
{
	id: 3,
	title: "Belgariad Book One: Pawn of Prophecy",
	date: "Feb 12, 2022",
	description:
	"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
	imgSrc:
	"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
	imgAlt: "Book cover for Pawn of Prophecy",
	ages: "12-16",
	genre: "Fantasy",
	stars: "⭐⭐⭐⭐⭐"
}
];

const container = document.querySelector("#articles");

articles.forEach(article => {

const book = document.createElement("div");
book.classList.add("book");

book.innerHTML = `
    <article class="book_info">
        <p><i>${article.date}</i></p>
        <p>${article.ages}</p>
        <p>${article.genre}</p>
        <p><span>${article.stars}</span></p>
    </article>

    <article class="book_main">
        <h2>${article.title}</h2>
        <img src="${article.imgSrc}" alt="${article.imgAlt}">
        <p>${article.description}</p>
    </article>
`;

container.appendChild(book);

});

const span = document.querySelectorAll('article.book_info p span')

span.forEach(span => {
    const stars = span.innerText.length;
    span.setAttribute('aria-label', `${stars} out of 5 stars`)
});