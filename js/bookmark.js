const bookmark = document.querySelector('.intro__bookmark');
const circle = bookmark.querySelector('circle');
const path = bookmark.querySelector('path');
const bookmarkText = document.querySelector('.bookmark__text');

const bookmarking = () => {
	bookmark.classList.toggle('bookmarked');
	circle.classList.toggle('bookmarked');
	path.classList.toggle('bookmarked--path');
	bookmark.classList.contains('bookmarked')
		? (bookmarkText.textContent = 'Bookmarked')
		: (bookmarkText.textContent = 'Bookmark');
};

bookmark.addEventListener('click', bookmarking);
