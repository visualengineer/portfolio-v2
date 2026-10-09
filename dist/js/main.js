'use strict';

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////  T H E M E   S E T T E R  ////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
/*
var today = new Date().getHours();
if (today >= 20.02 && today <= 21) {
  setTheme('theme-dark');
} else {
  setTheme('theme-light');
}

var today = new Date().getHours();
if (today >= 19.43 && today <= 19.44) {
  document.body.style.background = 'Red';
} else {
  document.body.style.background = 'Black';
}
*/
// function to toggle between light and dark theme with slider at bottom of index page
//colours in colors.scss, main-nav.scss, common-layout.scss
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}
/* ocument.addEventListener(
  'click',
  function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
    } else {
      setTheme('theme-dark');
    }

    // If the click happened inside the the container, bail
    //if (!event.target.closest('.dont-click-me')) return;

    // Otherwise, run our code...
  },
  false
);
*/





/* begin begin Back to Top button  */
// Vanillatop : Lightweight plugin in vanilla javascript to animate scrolling to the top of the page.
//
// @package    vanillatop
// @version    v1.0.3
// @author     Bernard Collet <webmaster@russianconcept.com>
// @copyright (c) 2019 Bernard Collet
// @license    MIT <https://opensource.org/licenses/MIT>
// @link       https://github.com/bernydole/vanillatop
//
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    var anchorToTop = document.querySelector('.vanillatop'),
      offset = 400, // browser window scroll (in pixels) after which the "back to top" link is shown
      scrollDuration = 10000;
    //document.querySelector('.disc-btn').classList.remove('mixitup-control-active'); taken out Nov 25th
    function scrollToTop(duration) {
      /*var start = window.pageYOffset,
        startTime = Math.floor(Date.now());

      function scroll() {
        Math.easeInOutQuad = function (t) {
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        };
        var time = Math.min(1, (Math.floor(Date.now()) - startTime) / duration);
        window.scroll(0, Math.ceil(Math.easeInOutQuad(time) * (0 - start) + start));
        if (window.pageYOffset === 0) {
          callback();
        }
        requestAnimationFrame(scroll);
      }
      scroll();*/
    }

    function scrollingDown() {
      if (document.body.scrollTop > offset || document.documentElement.scrollTop > offset) {
        anchorToTop.removeAttribute('style', 'transform: translateX(120px);');
        anchorToTop.setAttribute('style', 'transform: translateX(0);');
      } else {
        anchorToTop.removeAttribute('style', 'transform: translateX(0);');
        anchorToTop.setAttribute('style', 'transform: translateX(120px);');
      }
    }

    anchorToTop.addEventListener('click', function () {
      !window.requestAnimationFrame ? window.scrollTo(0, 0) : scrollToTop(scrollDuration);
      //remove active buttons at top of work item window
    });
    window.addEventListener('scroll', scrollingDown);
  });
})();
/* end begin Back to Top button  */


// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
    document.getElementById('slider').checked = false; //slider not present on pages other than index.html currently
  } else {
    setTheme('theme-light');
    document.getElementById('slider').checked = true; //slider not present on pages other than index.html currently
  }
})();

/*

$('body').on('click', function () {
                if ($('body').hasClass('theme-1')) {
                  $('body').addClass('theme-2');
                  $('body').removeClass('theme-1');
                } else if ($('body').hasClass('theme-2')) {
                  $('body').addClass('theme-3');
                  $('body').removeClass('theme-2');
                } else if ($('body').hasClass('theme-3')) {
                  $('body').addClass('theme-4');
                  $('body').removeClass('theme-3');
                } else if ($('body').hasClass('theme-4')) {
                  $('body').addClass('theme-5');
                  $('body').removeClass('theme-4');
                } else if ($('body').hasClass('theme-5')) {
                  $('body').addClass('theme-1');
                  $('body').removeClass('theme-5');
                }
              });


              */

// if your safari and cannot smooth scroll do some javascript smooth scrolling:
/*
const links = document.querySelectorAll('.subnav li a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
}
*/

/*
const links = document.querySelectorAll('.subnav li a');

for (const link of links) {
  link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href');
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: 'smooth',
  });
}
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////  R E S U M E   N A V   M O V E R  ////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

if (document.querySelector('.subnav') && document.querySelector('.aboutPage')) {
  const subnav = document.querySelector('.subnav');

  window.addEventListener('scroll', function () {
    subSwitch();
    //console.log('scrolling');
  });

  function subSwitch() {
    if (window.innerHeight < 970) {
      if (document.documentElement.scrollHeight <= window.innerHeight + document.documentElement.scrollTop + 300) {
        subnav.classList.add('stopfixed');
        //stopFixed = true;
      } else {
        subnav.classList.remove('stopfixed');
        //subnav.classList.add('backdown');
      }
    }
  }
  //subnav.classList.add('backdown');
  //subnav.style.bottom = '300px'
  // wait a few seconds then do this
  //subnav.classList.remove('stopfixed');
}

/*
const subnav = document.querySelector('.subnav');

window.onscroll = function () {
  subSwitch();
};
function subSwitch() {
  if (window.innerHeight < 768) {
    if (document.documentElement.scrollHeight <= window.innerHeight + document.documentElement.scrollTop + 300) {
      subnav.classList.add('stopfixed');
      //stopFixed = true;
    } else {
      subnav.classList.remove('stopfixed');
      //subnav.classList.add('backdown');
    }
  }
}
//subnav.classList.add('backdown');
//subnav.style.bottom = '300px'
// wait a few seconds then do this
//subnav.classList.remove('stopfixed');
*/
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////  P A N E L S  F O R  L O G O S  P A G E  /////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Get each modal and close button

const triggers = document.getElementsByClassName('overlay-btn');
const triggerArray = Array.from(triggers).entries();
const panels = document.getElementsByClassName('overlay-content');
const infoButtons = document.getElementsByClassName('overlay-btn');

function getToggleModal(triggerIndex) {
  return function () {
    //console.log(triggerIndex);
    panels[triggerIndex].classList.toggle('over-show');
    infoButtons[triggerIndex].classList.toggle('js-fade');
    //document.getElementsByClassName('overlay-btn').style.cursor = "pointer";
  };
}

for (let [index, trigger] of triggerArray) {
  trigger.addEventListener('click', getToggleModal(index));
  panels[index].addEventListener('click', getToggleModal(index));
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////  P R O J E C T   J U M P E R   ///////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// if dsipBtn contains classList.remove('mixitup-control-active');

//if displine filter active toggle
const dispBtn = document.getElementsByClassName('mixitup-control-active');

//const isActive = ahref.classList.contains('mixitup-control-active');

for (var i = 0; i < dispBtn.length; i++) {
  dispBtn[i].hidden = true;
  //dispBtn[i].hidden = true;
}
//console.log(i);

/*

//set initial state
let beenClicked = false;

dispBtn.addEventListener('click', function () {
  console.log('dickhead');
*/
/*
 if (!beenClicked) {
    console.log('dickhead');
    console.log(e.target);
    beenClicked = true;
  } else {
    dispBtn.classList.remove('mixitup-control-active');
    mixer.filter('all');

    beenClicked = false;
  }

});
*/
/*

const dispBtn = document.querySelector('.mixitup-control-active');

//set initial state
let beenClicked = false;

if (dispBtn) {
  dispBtn.addEventListener('click', switchOff);
  beenClicked = true;
  console.log('dickhead');
}
function switchOff() {
  if (!beenClicked) {
    beenClicked = true;
  } else {
    dispBtn.classList.remove('mixitup-control-active');
    mixer.filter('all');
    beenClicked = false;
  }
}

*/

//
//
//
//
//
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////  A D D  S H A D O W   T O   N A V   B O T T O M   O N   S C R O L L  /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const menuDesk = document.getElementsByTagName('nav')[0] || false;
if (menuDesk !== false)
  window.onscroll = function () {
    addShadow();
  };
function addShadow() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    menuDesk.classList.add('active');
  } else {
    menuDesk.classList.remove('active');
  }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////  B E G I N  S L I D ER  ////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function activityWatcher() {
  //The number of seconds that have passed
  //since the user was active.
  var secondsSinceLastActivity = 0;
  const arrows = document.querySelectorAll('.glide__arrow');
  //var arrows = document.getElementsByClassName('glide__arrows')[0];
  //Five minutes. 60 x 5 = 300 seconds.
  var maxInactivity = 1;

  //Setup the setInterval method to run
  //every second. 1000 milliseconds = 1 second.
  setInterval(function () {
    secondsSinceLastActivity++;
    //console.log(secondsSinceLastActivity + ' seconds since the user was last active');
    //if the user has been inactive or idle for longer
    //then the seconds specified in maxInactivity
    if (secondsSinceLastActivity > maxInactivity) {
      //console.log('User has been inactive for more than ' + maxInactivity + ' seconds');
      //document.getElementsByClassName('glide__arrows')[0].style.visibility = 'hidden';
      //document.getElementsByClassName('glide__arrows')[0].classList.add('hide');
      arrows.forEach((item) => item.classList.add('hide'));
      //hide the pause button on video
      //document.querySelector('.toggle-play').classList.add('hide');
      //console.log(document.querySelector('.toggle-play'));
      //Redirect them to your logout.php page.
      //location.href = 'logout.php';
    }
  }, 1000);

  //The function that will be called whenever a user is active
  function activity() {
    //reset the secondsSinceLastActivity variable
    //back to 0
    secondsSinceLastActivity = 0;
    //document.getElementsByClassName('glide__arrows')[0].style.visibility = 'visible';
    //arrows.classList.remove('hide');
    arrows.forEach((item) => item.classList.remove('hide'));
    //show the pause button on video
    //document.querySelector('.toggle-play').classList.remove('hide');
    //console.log(document.querySelector('.toggle-play'));
  }

  //An array of DOM events that should be interpreted as
  //user activity.
  var activityEvents = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'];

  //add these events to the document.
  //register the activity function as the listener parameter.
  activityEvents.forEach(function (eventName) {
    document.addEventListener(eventName, activity, true);
  });
}

activityWatcher();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////// B E G I N   V I D E O   P L A Y E R ////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (document.querySelector('.player')) {
  const player = document.querySelector('.player');
  const video = player.querySelector('.player-video');

  /*
var videosContainer = document.getElementsByClassName("videos")[0];
var menu = document.getElementsByClassName("menu")[0];
var menuOptions = menu.getElementsByClassName("options")[0];
*/
  /*
  const progress = player.querySelector('.progress');
  const progressFilled = player.querySelector('.filled-progress');
*/
  const toggle = player.querySelector('.toggle-play');
  /*
const skippers = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player-slider');
*/
  // Logic
  if (document.querySelector('.toggle-play')) {

    function togglePlay() {
      const playState = video.paused ? 'play' : 'pause';
      video[playState](); // Call play or paused method
      console.log(playState);
    }

    function updateButton() {
      const togglePlayBtn = document.querySelector('.toggle-play');

      if (this.paused) {
        togglePlayBtn.innerHTML = `<svg class="" width="45" height="45" viewBox="0 0 45 45"> <title>play</title><path d="M36.77,23.42,12.36,37.48V9.37Z"></path></svg>`;
        toggle.classList.remove('hide'); //added to show utton on pause
        //progressFilled.style.opacity = '0';
        //progressFilled.style.visibility = 'hidden';
        //console.log(this.paused);
      } else {
        togglePlayBtn.innerHTML = `<svg class="" width="45" height="45" viewBox="0 0 45 45"> <title>play</title><rect x="12" y="12" width="8" height="25" fill="#fff"/> <rect x="26" y="12" width="8" height="25"/></path></svg>`;
        //progressFilled.style.visibility = '1';
        //progressFilled.style.opacity = '1';
        //progressFilled.style.visibility = 'visible';
        toggle.classList.add('hide'); //added to hide button on play
      }
    }


    /*
  function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
  }

  function rangeUpdate() {
    video[this.name] = this.value;
  }
  */

    //function progressUpdate() {
    // const percent = (video.currentTime / video.duration) * 100;
    // progressFilled.style.flexBasis = `${percent}%`;
    //
    //progressFilled.style.transform = `translateX(${percent}%)`;
    //console.log(progressFilled);
    // && playState === pause
    /*
    console.log(video.currentTime);
    console.log(video.duration);

        if (video.currentTime === video.duration) {
          progressFilled.style.visibility = 'hidden';

          console.log(progressFilled);

          if ((progressFilled.style.visibility = 'hidden')) {
            progressFilled.style.flexBasis = '0';
            console.log(progressFilled);
          }
          if ((progressFilled.style.flexBasis = '0')) {
            progressFilled.style.visibility = 'visible';
            console.log(progressFilled);
          }
          console.log(progressFilled);
        }
  */
    /*

  var result = '';
  var i = 0;
  do {
    i += 1;
    result += i + ' ';
  }
  while (i > 0 && i < 5);
  // Despite i == 0 this will still loop as it starts off without the test

  console.log(result);

  */

    //progressFilled.style.transform = `scaleX(${percent}%)`;
    //console.log(percent);
    //}
    /*
  function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }
  */
    // Event listeners
    if(video){
      video.addEventListener('click', togglePlay);
      video.addEventListener('play', updateButton);
      video.addEventListener('pause', updateButton);
    }
    //video.addEventListener('timeupdate', progressUpdate);
    if(toggle){
      toggle.addEventListener('click', togglePlay);
    }
    /*
  skippers.forEach((button) => button.addEventListener('click', skip));
  ranges.forEach((range) => range.addEventListener('change', rangeUpdate));
  ranges.forEach((range) => range.addEventListener('mousemove', rangeUpdate));
  */
    let mousedown = false;
    //progress.addEventListener('click', scrub);
    //progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
    //progress.addEventListener('mousedown', () => (mousedown = true));
    // progress.addEventListener('mouseup', () => (mousedown = false));
  }
}


////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////  N A V  B A R   M I N I M I S E R  ////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

/*
const $mainHeader = document.getElementsByTagName('nav')[0];
let scroll_position = 0;
let scroll_direction;

window.addEventListener('scroll', function(e){
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scroll_direction = (document.body.getBoundingClientRect()).top > scroll_position ? 'up' : 'down';
    scroll_position = (document.body.getBoundingClientRect()).top;
    //console.log(scroll_direction);

  if (scroll_direction == 'up') {
    //document.getElementById("navbar").style.top = "0";
    $mainHeader.classList.remove('minimise');
  } else {
    //document.getElementById("navbar").style.top = "-50px";
    $mainHeader.classList.add('minimise');
  }
}
});
*/

////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
////////////  F A D E R S  &  S L I D E R S   //////////////
////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////

const faders = document.querySelectorAll('.fade-in');
const sliders = document.querySelectorAll('.slide-in');

const appearOptions = {
  threshold: 0.1
  //rootMargin: '0px 0px -150px 0px'
};

const appearOnScroll = new IntersectionObserver
(function(
  entries,
  appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target);
    }
  })
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

sliders.forEach(slider => {
  appearOnScroll.observe(slider);
})

