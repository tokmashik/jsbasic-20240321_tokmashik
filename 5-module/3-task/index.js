function initCarousel() {
  const right = document.querySelector('.carousel__arrow_right');
  const left = document.querySelector('.carousel__arrow_left');
  const slide = document.querySelector('.carousel__inner');
  let article = document.querySelector('.carousel__slide');
  console.log('article', article.dataset.id);

  let articles = document.querySelectorAll('.carousel__slide')
  console.log('article', articles[0]);
  // console.log(s, 's');
  console.log('slide.offsetWidth', slide.offsetWidth);
  left.style.display = 'none'
  // console.log('article', article.dataset.id);
  right.addEventListener('click', () => {
    if (slide.offsetWidth === 988) {
      left.style.display = ''
      slide.style.transform = 'translateX(-988px)';
      console.log(666, slide.offsetParent );
      article = document.querySelector('.carousel__slide');
      console.log('article', article.dataset.id);
    }
    // if (slide.offsetWidth === 988) {
    //   left.style.display = ''
    //   slide.style.transform = 'translateX(-1976px)';
    //   // console.log(666);
    // }
    console.log(111, slide.offsetWidth);
    // slide.style.transform = 'translateX(-988px)';
    // slide.style.transform = 'translateX(-1976px)';
    // slide.style.transform = 'translateX(-2964px)';

  })

  left.addEventListener('click', () => {
    if (slide.offsetWidth === 988) {
      slide.style.transform = 'translateX(0px)';
      left.style.display = 'none'
    }
    console.log(222, slide.offsetWidth);
    // slide.style.transform = 'translateX(988px)';
    // slide.style.transform = 'translateX(1976px)';

  })
};


// function initCarousel() {
//   const right = document.querySelector('.carousel__arrow_right');
//   const left = document.querySelector('.carousel__arrow_left');
//   const slide = document.querySelector('.carousel__inner');
//   // const s = document.querySelector('.carousel__slide[data-content="penang-shrimp"]');  //penang-shrimp
//   // let article = document.querySelectorAll('.carousel__slide');
//   let article = document.querySelectorAll('.carousel__slide')
//   console.log('article', article);
//   // console.log(s, 's');
//   console.log('slide.offsetWidth', slide.offsetWidth);
//   left.style.display = 'none'
  
//   // console.log('article', article.dataset.id);


//   right.addEventListener('click', () => {
//     if (slide.offsetWidth === 988) {
//       left.style.display = ''
//       slide.style.transform = 'translateX(-988px)';
//       console.log(666, slide.offsetParent );
//       article = document.querySelector('.carousel__slide');
//       // console.log('article', article.dataset.id);
//     }
//     // if (slide.offsetWidth === 988) {
//     //   left.style.display = ''
//     //   slide.style.transform = 'translateX(-1976px)';
//     //   // console.log(666);
//     // }
//     console.log(111, slide.offsetWidth);
//     // slide.style.transform = 'translateX(-988px)';
//     // slide.style.transform = 'translateX(-1976px)';
//     // slide.style.transform = 'translateX(-2964px)';

//   })

//   left.addEventListener('click', () => {
//     if (slide.offsetWidth === 988) {
//       slide.style.transform = 'translateX(0px)';
//       left.style.display = 'none'
//       // console.log(777);
//     }
//     console.log(222, slide.offsetWidth);
//     // slide.style.transform = 'translateX(988px)';
//     // slide.style.transform = 'translateX(1976px)';

//   })

//   // document
//   // .querySelector('.carousel__inner')
//   // .addEventListener('click', function (event) {
//   //   console.log();
//   //   if (event.target.classList.contains('prev')) {
//   //     let index = currentIndex - 1;
//   //     if (index < 0) {
//   //       index = images.length - 1;
//   //     }
//   //     showImage(index);
//   //   } else if (event.target.classList.contains('next')) {
//   //     let index = currentIndex + 1;
//   //     if (index >= images.length) {
//   //       index = 0;
//   //     }
//   //     showImage(index);
//   //   }
//   // });

//   // right.style.display = 'none'
//   // right.style.display = ''

//   // left.style.display = ''
//   // left.style.display = 'none'

//   // var a = $('.owl-carousel');

//   // a.owlCarousel({ loop:true,
//   //     margin:10,
//   //     nav:true,
//   //     dots: false,
//   //     items: 2});

//   // var ad = a.data('owlCarousel');

//   // $(document).on('keydown.carousel', function(e) {
//   //     if(e.keyCode == 37) {
//   //         ad.prev();
//   //     };
//   //     if(e.keyCode == 39) {
//   //         ad.next();
//   //     };
//   // });
// };


