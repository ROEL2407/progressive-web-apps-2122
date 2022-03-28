const display = document.getElementById('artItems');
display.textContent = "Loading...";

const artArray = [];
const SuggestionArray = [];
searchOpen();
itemClick();
getData();

/* fetches the data from an api so it can be displayed */
function getData() {
    const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=OoTZzgc6&ps=100'
    fetch(getURL)
        .then(response => response.json())
        .then(response => {
            response.artObjects.forEach(art => {
                artArray.push({
                    id: art.id,
                    title: art.title,
                    maker: art.principalOrFirstMaker,
                    img: art.webImage.url,
                    place: art.productionPlaces,
                    link: art.links.web
                });
            })
            renderData();
        }).catch(error => console.log(error))
}

/* renders data in multiple functions */
function renderData(){
    display.textContent = "";
    display.classList.remove("loading");
    showInfo(artArray);
    MakeInfobox(artArray);
    handleRoutes();

    artArray.forEach(e => {
        SuggestionArray.push({
            title: e.title
        })
    })
    console.log("test" + SuggestionArray);
}

function showInfo(data) {
    data.forEach(item => {
        const tempItem = document.createElement('a');
        tempItem.setAttribute("class", "art");
        tempItem.id = item.id;
        const output = '<article><div><img src="' + item.img.slice(0, -3) + "=s1000" + '" alt=""></div><h2>' + item.title + '</h2></article>';
        tempItem.innerHTML = output;
        display.appendChild(tempItem);
    })
}

/* creates an infobox which can be opened to display more information about the art piece */
function MakeInfobox(data) {
    data.forEach(item => {
        const tempInfobox = document.createElement('article');
        tempInfobox.setAttribute("class", "infobox");
        tempInfobox.setAttribute("data-route", item.id);
        tempInfobox.id = "info-box_" + item.id;
        const output = '<button class="close_popup"><div></div><div></div></button><div><img src="' + item.img.slice(0, -3) + "=s1000" + '" alt=""></div><h2>' + item.title + '</h2><p>' + item.maker + '</p><p>' + item.place + '</p><a href="' + item.link + '" target="_blank">' + item.link + '</a>' ;
        tempInfobox.innerHTML = output;
        const infoboxWrapper = document.getElementById("info_boxes");
        infoboxWrapper.appendChild(tempInfobox);
    })
}

function searchOpen() {
    /* --- get all element for use --- */
    const search_btn = document.getElementById("search_btn");
    const search = document.getElementById("search");
    
    /* If the button "search" is clicked: */
    search_btn.addEventListener("click", function (event) {
        search.classList.toggle("hidden");
        search_btn.classList.toggle("active");
    })
}


function itemClick() {
    let clickId = "";
    /* checks which item is being clicked and gives the id of the element to the hash router */
    function onClick(event) {
        if ( event.target.classList.contains("art")) {
          clickId = event.target.id;
        }
        window.location.hash = clickId;
    }
    window.addEventListener('click', onClick);
}

function updateUI(route) {
    if (route === "") {
      const infobox = document.querySelectorAll(".infobox");
      infobox.forEach(info => {
        info.classList.remove("active");
      })
    } else {
      /* checks with infobox should be active via the route in the url and gives it the class active */
      let activeinfoBox = document.querySelector(`[data-route=${route}]`);
      if (!activeinfoBox.classList.contains("active")) {
        activeinfoBox.classList.add('active');
      }
      const closePopup = document.querySelectorAll(".close_popup");
      /* removes the class from the item that was active when the user clicks the closing button */
      closePopup.forEach(function (popUp) {
        popUp.addEventListener("click", function () {
          activeinfoBox.classList.remove("active");
          window.location.hash = "";
        })
      })
    }
  }