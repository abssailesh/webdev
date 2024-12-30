
const books = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      reviews: [
        "A captivating classic!",
        "Beautifully written, but tragic.",
        "The characters are so real.",
        "A masterpiece of American literature.",
        "Timeless themes and a haunting story."
      ]
    },
    {
      title: "1984",
      author: "George Orwell",
      reviews: [
        "A chilling dystopian tale.",
        "Profound and thought-provoking.",
        "An essential read for everyone.",
        "A gripping narrative on totalitarianism.",
        "Terrifyingly relevant."
      ]
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      reviews: [
        "Heartbreaking and inspiring.",
        "The narrative is so powerful.",
        "One of the best books ever written.",
        "A tale of justice and morality.",
        "A book that everyone should read."
      ]
    }
  ];
  
  const bookList = document.getElementById('book-list');
  books.forEach((book) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <div class="reviews">
        <strong>Reviews:</strong>
        <ul>
          ${book.reviews.map(review => `<li class="review">${review}</li>`).join('')}
        </ul>
      </div>
    `;
    document.getElementById('book-list').appendChild(bookDiv);
  });

