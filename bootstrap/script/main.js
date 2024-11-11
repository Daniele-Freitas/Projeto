$(document).ready(function () {
    // progress bar
    
    let dataAreaOffset = $("#data-area").offset();
    let stop = 0;

    function animationData() {
        let duration = [1400, 1600, 2000, 2200];
        let number = [60, 254, 32, 5243];
        let c = 65;
        for (let toCircle = 0; toCircle < 4; toCircle++){

            let container = document.getElementById("circle" + String.fromCharCode(c));

            let circle = new ProgressBar.Circle(container, {
                color : '#f48411',
                strokeWidth: 8,
                duration: duration[toCircle],
                from: {color: '#AAA'},
                to: {color: '#f48411'},
                step: function(state, circle){
                    circle.path.setAttribute('stroke', state.color);
                    let value = Math.round(circle.value() * number[toCircle]);
                    circle.setText(value);
                }

            });
            circle.animate(1.0);
            c ++;
        }
    }

    // referencial scroll
    $(window).scroll(function (e) {
        let scroll = $(window).scrollTop();
        
        if (scroll > (dataAreaOffset.top - 700) && stop  == 0){
            animationData();
            stop++;
        }
    });


    // parallax

    setTimeout(function() {
        $("#data-area").parallax({imageSrc: 'img/cidadeparallax.png'});
    }, 250);


});
  
    // Parallax
  
    // setTimeout serve para carregar primeiro as imagens
    setTimeout(function() {
      $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
      $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
    }, 200);
  
    // Filtro portfólio
  
    $('.filter-btn').on('click', function() {
  
      let type = $(this).attr('id');
      let boxes = $('.project-box');
  
      $('.main-btn').removeClass('active');
      $(this).addClass('active');
  
      if(type == 'dsg-btn') {
        eachBoxes('dsg', boxes);
      } else if(type == 'dev-btn') {
        eachBoxes('dev', boxes);
      } else if(type == 'seo-btn') {
        eachBoxes('seo', boxes);
      } else {
        eachBoxes('all', boxes);
      }
  
    });
  
    function eachBoxes(type, boxes) {
  
      if(type == 'all') {
        $(boxes).fadeIn();
      } else {
        $(boxes).each(function() {
          if(!$(this).hasClass(type)) {
            $(this).fadeOut('slow');
          } else {
            $(this).fadeIn();
          }
        });
      }
    }
let botaoAlternar = document.querySelector('#modo-noturno');
let elementoAlterado=document.querySelector('body');
botaoAlternar.addEventListener('click', ()=>{
  let alterar =botaoAlternar.checked ? 'dark': 'ligth' 
  elementoAlterado.setAttribute("data-bs-theme",alterar)
})