import "normalize.css";
import "/src/scss/common-styles.css"
import "/src/js/burger-menu.js"
import "/src/scss/index.scss"
import "/src/scss/services.scss"
import "/src/js/slider2";
import '/src/js/slider-rev';

import "/src/js/slider-data_s.js";



document.querySelector('.btn-estimat').addEventListener('click', function() {
  console.log(1)
  window.location.href = '../estimat/';
});