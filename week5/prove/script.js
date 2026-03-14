const span = document.querySelectorAll('article.book_info p span')

span.forEach(span => {
    const stars = span.innerText.length;
    span.setAttribute('aria-label', `${stars} out of 5 stars`)
});