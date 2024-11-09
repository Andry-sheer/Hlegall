
(()=> {
  const burgerOpen = document.querySelector('.header__box-burger')
  const burgerClose = document.querySelector('.header__nav-close')
  const navigationMenu = document.querySelector('.header__nav')

  burgerOpen.addEventListener('click', () => {
    navigationMenu.classList.add('active')
  })

  burgerClose.addEventListener('click', () => {
    navigationMenu.classList.remove('active')
  })
})();

(()=> {
  const tabsItem = document.querySelectorAll('.tabs__links-item');
  const tabsContent = document.querySelectorAll('.tabs__content-item');

  tabsItem.forEach((tab, index) => {
    tab.addEventListener('click', ()=> {
      tabsContent.forEach((content)=> {
        content.classList.remove('active');
      })

      tabsItem.forEach((content)=> {
        content.classList.remove('active');
      })

      tabsItem[index].classList.add('active');
      tabsContent[index].classList.add('active');
    })
  })
})();

(()=> {
  const publicationButton = document.querySelectorAll('.publicationPage__switch-article');
  publicationButton.forEach((item, index)=> {
    item.addEventListener('click', ()=> {
      publicationButton.forEach((item)=> {
        item.classList.remove('active');
      })
      
      publicationButton[index].classList.add('active');
    })
  })
})();

(()=> {
  const langs = document.querySelectorAll('.header__langs-link');
  langs.forEach((lang, index)=> {
    lang.addEventListener('click', ()=> {
      langs.forEach((lang)=> {
        lang.classList.remove('active');
      })
      
      langs[index].classList.add('active');
    })
  })
})();


(()=> {
  const swiper = new Swiper('.swiper', {
    loop: true,
    spaceBetween: 25,
    speed: 600,
    grabCursor: true,

    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });
})();


//? ----------- CDN -------------------------------------->
const formPopup = new Popup({
  id: "form-class",
  disableScroll: true,
  content: 
    `<div class="popup-form">
        <h1 class="popup-title">We would like to help you</h1>
        <button class="popup-close">X</button>
      <form>
        <input class="input-name" id="NameID" placeholder="Name" type="text"/>
        <textarea class="input-message" id="TextAreaID" placeholder="Message" rows="6"></textarea>
        <h3 class="input-title">How to answer you?</h3>
        <input class="input-number" id="PhoneID" placeholder="Phone number" type="number"/>
        <input class="input-email" id="EmailID" placeholder="Email" type="email"/>
        <input class="input-button" type="submit" value="Send message"/>
      </form>
    </div>`,
});

(()=> {
  const popupButton = document.querySelector('.subPage__button');

  if(popupButton){
      popupButton.addEventListener('click', ()=> {
        formPopup.show();
    });
  }
})();