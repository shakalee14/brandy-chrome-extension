$( document ).ready(function() {
  var quotes = [
    "I Wanna Be Down",
    "I would like to get to know if I could be the kind of girl you that you could be down for ",
    "Cuz when I look at you I feel something tell me ",
    "That your the kind of guy that I should make a move on ",
    "And if I don't let you know ",
    "Then I won't be for real ",
    "I could be wrong but I feel like something could be going on ",
    "The more I see you the more that it becomes so true ",
    "There ain't no other for me it's only you",
    "I wanna be down",
    "With what you're going through",
    "I wanna be down",
    "I wanna be down with you",
    "No matter what time of day or night it's true",
    "I wanna be down",
    "I know anybody's gonna be lonely",
    "Without the reason they got someone to care for",
    "Maybe all you need's a shoulder to cry on",
    "If that's a fact than I'll be more than you ever could dream of",
    "If all you need is the time that I got plenty of ",
    "I'll dedicate all my love until you call baby ",
    "I wanna stay by your side ",
    "Be there to call you up ",
    "And let you know everything will be all right"
  ]

  function newQuote(){
    var randomNumber = Math.floor(Math.random() * quotes.length)
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
  }

  $("button").on('click', function(event){
    event.preventDefault()
    console.log('hey hey hey')
    newQuote()
  })

});
