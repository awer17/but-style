import "normalize.css";

import "/src/scss/common-styles.css"
import "/src/js/burger-menu.js"
import "/src/scss/index.scss"

import "/src/js/slider2";
import '/src/js/slider-rev';
import "/src/scss/services.scss"
import '/src/js/formHandler.js'



import "/src/js/slider-data_s.js";



document.querySelector('.btn-estimat').addEventListener('click', function() {
  window.location.href = '../estimat/';
});

document.querySelectorAll('.link-request').forEach(button => {
  button.addEventListener('click', (event) => {
    const btnId = event.target.getAttribute('data-btn-id');
      window.location.href = `../estimat/`;
  });
});