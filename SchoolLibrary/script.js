function moveToSection(sectionIndex) {
  $.fn.fullpage.moveTo(sectionIndex);
}

$(document).ready(function () {
  $('#fullpage').fullpage({
    scrollingSpeed: 700,
    sectionsColor: '#FFFFFF',
    navigation: true,
    navigationPosition: 'right',
    afterLoad: function (origin, destination, direction) {
      if (destination.index === 1) {
        createChart();
      }
    },
  });

  // the chart
  function createChart() {
    const labels = [
      'Fantasy',
      'Science Fiction',
      'Mystery',
      'Thriller',
      'Romance',
      'Non-Fiction',
      'Bio and Memoirs',
    ];
    const data = {
      labels: labels,
      datasets: [{
        label: '# of Books',
        backgroundColor: ['#A05060', '#A06050', '#A050A0', '#E0D050', '#6050A0', '#50A060', '#A080E0'],
        borderColor: '#50A060',
        data: [303, 187, 85, 170, 114, 358, 59],
      }],
    };
    const config = {
      type: 'bar',
      data: data,
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };

    const myChart = new Chart(
      document.getElementById('myChart'),
      config
    );
  }

 //the Table
  var dataSet = [
    ["The steep & thorny way", "Cat Winters", "Mystery", "2016", "Hardcover"],
    ["Control Your Mind and Master Your Feelings", "Eric Robertson", "Non-Fiction", "2018", "Paperback"],
    ["The three little astronauts", "Georgie Adams", "Fiction", "2016", "Hardcover"],
    ["Charlotte's Web", "E. B. White", "Young Adult", "1952", "eBook"],
    ["Charlotte's Web", "E. B. White", "Young Adult", "1952", "Paperback"],
    ["Divergent", "Veronica Roth", "Romance", "2014", "Paperback"],
    ["Encyclopedia Brown, Boy Detective", "Donald J. Sobol", "Mystery", "2007", "Hardcover"],
    ["Jerry Hotter and the Adventures at Fishmarts", "Samhita Joshi", "Mystery", "2021", "eBook"],
    ["No place for a woman", "Valerie Wood", "Romance", "1998", "Paperback"],
    ["1984", "George Orwell", "Fiction", "1949", "Hardcover"],
    ["1984", "George Orwell", "Fiction", "1949", "Paperback"],
    ["Beloved", "Toni Morrison", "Literary Fiction", "1987", "Paperback"],
    ["Atomic Habits", "James Clear", "Self-improvement", "2018", "Audio"],
    ["Harry Potter and the Sorcerer's. Stone", "J.K. Rowling", "Fantasy", "1997", "Hardcover"]
  ];

  $('#bookTable').DataTable({
    data: dataSet,
    columns: [{ title: "Title" }, { title: "Author" }, { title: "Genre" }, { title: "Year" }, { title: "Type" }],
    responsive: true,
    
    pageLength: 10
  });

  $('.ReserveButton').on('click', function () {
    $(this).prop('disabled', true);
    $(this).text('Reserved');
    $(this).addClass('reserved');
  });
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


var book1 = document.getElementById("TheSteep&thornyWayModal");
var card1 = document.getElementById("TheSteep&thornyWay");
var span1 = document.getElementsByClassName("close")[0];
card1.onclick = function() {if (!event.target.matches('.ReserveButton')) {book1.style.display = "block";}}
span1.onclick = function() {book1.style.display = "none";}

var book2 = document.getElementById("ControlYourMindandMasterYourFeelingsModal");
var card2 = document.getElementById("ControlYourMindandMasterYourFeelings");
var span2 = document.getElementsByClassName("close")[1];
card2.onclick = function() {if (!event.target.matches('.ReserveButton')) {book2.style.display = "block";}}
span2.onclick = function() {book2.style.display = "none";}

var book3 = document.getElementById("TheThreeLittleAstronautsModal");
var card3 = document.getElementById("TheThreeLittleAstronauts");
var span3 = document.getElementsByClassName("close")[2];
card3.onclick = function() {if (!event.target.matches('.ReserveButton')) {book3.style.display = "block";}}
span3.onclick = function() {book3.style.display = "none";}

var book4 = document.getElementById("Charlotte'sWebModal");
var card4 = document.getElementById("Charlotte'sWeb");
var span4 = document.getElementsByClassName("close")[3];
card4.onclick = function() {if (!event.target.matches('.ReserveButton')) {book4.style.display = "block";}}
span4.onclick = function() {book4.style.display = "none";}

var book5 = document.getElementById("DivergentModal");
var card5 = document.getElementById("Divergent");
var span5 = document.getElementsByClassName("close")[4];
card5.onclick = function() {if (!event.target.matches('.ReserveButton')) {book5.style.display = "block";}}
span5.onclick = function() {book5.style.display = "none";}

var book6 = document.getElementById("EncyclopediaBrownBoyDetectiveModal");
var card6 = document.getElementById("EncyclopediaBrownBoyDetective");
var span6 = document.getElementsByClassName("close")[5];
card6.onclick = function() {if (!event.target.matches('.ReserveButton')) {book6.style.display = "block";}}
span6.onclick = function() {book6.style.display = "none";}

var book7 = document.getElementById("JerryHotterandtheAdventuresatFishmartsModal");
var card7 = document.getElementById("JerryHotterandtheAdventuresatFishmarts");
var span7 = document.getElementsByClassName("close")[6];
card7.onclick = function() {if (!event.target.matches('.ReserveButton')) {book7.style.display = "block";}}
span7.onclick = function() {book7.style.display = "none";}

var book8 = document.getElementById("NoPlaceForAWomanModal");
var card8 = document.getElementById("NoPlaceForAWoman");
var span8 = document.getElementsByClassName("close")[7];
card8.onclick = function() {if (!event.target.matches('.ReserveButton')) {book8.style.display = "block";}}
span8.onclick = function() {book8.style.display = "none";}

window.onclick = function(event) {
  if (event.target == book1) {
    book1.style.display = "none";
  }else if (event.target == book2) {
    book2.style.display = "none";
  }else if (event.target == book3) {
    book3.style.display = "none";
  }else if (event.target == book4) {
    book4.style.display = "none";
  }else if (event.target == book5) {
    book5.style.display = "none";
  }else if (event.target == book6) {
    book6.style.display = "none";
  }else if (event.target == book7) {
    book7.style.display = "none";
  }else if (event.target == book8) {
    book8.style.display = "none";
  }
}

function searchBooks() {
  var searchValue = document.getElementById("searchInput").value.toUpperCase();
  var cardContainers = document.querySelectorAll('.card-container');
  var noResultMessage = document.getElementById('noResultMessage'); 
  var foundResults = false;

  cardContainers.forEach(function (container) {
      var title = container.querySelector('h5').innerText.toUpperCase();
      
      if (title.includes(searchValue)) {
          container.style.display = 'block';
          foundResults = true;
      } else {
          container.style.display = 'none';
      }
  });

  if (!foundResults) {
      noResultMessage.style.display = 'block';
  } else {
      noResultMessage.style.display = 'none';
  }
}

document.getElementById("searchInput").addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      searchBooks();
  }
});
