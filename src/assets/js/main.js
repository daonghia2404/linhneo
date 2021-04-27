window.onload = () => {
  // tabEvent.init();
  header.init()
  owlCarousel.init();
  projects.init();
}

const header = {
  init: function() {
    this.openCloseMenu()
  },
  openCloseMenu: function() {
    const btnMenu = document.querySelector('header .btn-menu-mobile')
    const mainMenu = document.querySelector('header .header-nav')
    btnMenu.addEventListener('click', () => {
      mainMenu.classList.toggle('active')
    })
    const linkListMenu = mainMenu.querySelectorAll('.nav-item')
    linkListMenu.forEach(item => item.addEventListener('click', (I) => {
      mainMenu.classList.remove('active')
    }))
  }
}

const owlCarousel = {
  init: function () {
    this.setupPartnerCarousel();
    this.setupClientsCarousel();
  },
  setupPartnerCarousel: function () {
    var $owl = $("#carousel-partners ").owlCarousel({
      responsive: {
        0: {
          items: 5,
        },
      },
      loop: true,
      rewind: false,
      autoWidth: true,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 600,
      mouseDrag: true,
      nav: false,
      dots: false,
      margin: 30,
    });
    $owl.trigger("refresh.owl.carousel");
  },
  setupClientsCarousel: function() {
    var $owl = $("#carousel-clients").owlCarousel({
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
      },
      loop: true,
      rewind: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      smartSpeed: 600,
      mouseDrag: true,
      nav: true,
      dots: false,
      navText: ['<img src="./assets/icons/icon-angle-left-white.svg" alt="" />', '<img src="./assets/icons/icon-angle-right-white.svg" alt="" />'],
      margin: 20,
    });
    $owl.trigger("refresh.owl.carousel");
  },
};

const tabEvent = {
  init: function () {
    this.setupTabEvent();
  },
  setupTabEvent: function () {
    const main = document.querySelectorAll(".tab-wrapper");
    if (main.length !== 0) {
      main.forEach((mainTarget) => {
        const tabClick = mainTarget.querySelectorAll(".tabs-group .tab-item");
        const tabMain = mainTarget.querySelectorAll(
          ".tabs-main-group .tab-item"
        );

        tabClick.forEach((item, index) =>
          item.addEventListener("click", () => {
            tabClick.forEach((i) => i.classList.remove("active"));
            tabMain.forEach((i) => i.classList.remove("active"));

            tabClick[index].classList.add("active");
            tabMain[index].classList.add("active");
          })
        );
      });
    }
  },
};


const projects = {
  init: function() {
    this.filterIsotope()
  },
  filterIsotope: function() {
    const $filter = $('.grid-filter-wrapper').isotope({
      itemSelector: '.grid-filter-item',
      layoutMode: 'fitRows',
    });

    $('.grid-filter-button-group').on('click', '.tab-item', function() {
      $('.grid-filter-button-group .tab-item').removeClass('active')
      $(this).addClass('active')

      const filterValue = $(this).attr('data-filter')
      $filter.isotope({ filter: filterValue })
    });
  },
}