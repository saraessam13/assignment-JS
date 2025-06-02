




var quotes = [
  {
    Quote: "“So many books, so little time.”",
    Name: "― Frank Zappa",
  },
  {
    Quote: "“A room without books is like a body without a soul”",

    Name: "― Marcus Tullius Cicero",
  },
  {
    Quote:
      "“Be who you are and say what you feel, because those who mind dont matter ,and those who matter dont mind.”",
    Name: "― Bernard M. Baruch",
  },
  {
    Quote: "“So many books, so little time.”",
    Name: "― Frank Zappa",
  },
  {
    Quote: "“You only live once, but if you do it right, once is enough.”",

    Name: "― Mae West",
  },
  {
    Quote: "“Be the change that you wish to see in the world.”",
    Name: "― Mahatma Gandhi",
  },
  {
    Quote:
      "“To live is the rarest thing in the world. Most people exist, that is all.”",
    Name: "― Oscar Wilde",
  },
  {
    Quote:
      "“A friend is someone who knows all about you and still loves you.”",
    Name: "― Elbert Hubbard",
  },
  {
    Quote: "“Always forgive your enemies; nothing annoys them so much.”",
    Name: "― Oscar Wilde",
  },
  {
    Quote: "“Without music, life would be a mistake.”",
    Name: "― Friedrich Nietzsche",
  },
];

function quote() {

  random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[random].Quote;
  document.getElementById("name").innerHTML = quotes[random].Name;
}

