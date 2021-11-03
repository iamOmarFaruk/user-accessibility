jQuery(document).ready(function ($) {
  const body_for_purely_option_panel = document.querySelector('body');
  
    


  let option_panel_layout = `
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol id="tools" viewBox="0 0 16 16" >
        <path 
          d="M1 0L0 1l2.2 3.081a1 1 0 0 0 .815.419h.07a1 1 0 0 1 .708.293l2.675 2.675-2.617 2.654A3.003 3.003 0 0 0 0 13a3 3 0 1 0 5.878-.851l2.654-2.617.968.968-.305.914a1 1 0 0 0 .242 1.023l3.356 3.356a1 1 0 0 0 1.414 0l1.586-1.586a1 1 0 0 0 0-1.414l-3.356-3.356a1 1 0 0 0-1.023-.242L10.5 9.5l-.96-.96 2.68-2.643A3.005 3.005 0 0 0 16 3c0-.269-.035-.53-.102-.777l-2.14 2.141L12 4l-.364-1.757L13.777.102a3 3 0 0 0-3.675 3.68L7.462 6.46 4.793 3.793a1 1 0 0 1-.293-.707v-.071a1 1 0 0 0-.419-.814L1 0zm9.646 10.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708zM3 11l.471.242.529.026.287.445.445.287.026.529L5 13l-.242.471-.026.529-.445.287-.287.445-.529.026L3 15l-.471-.242L2 14.732l-.287-.445L1.268 14l-.026-.529L1 13l.242-.471.026-.529.445-.287.287-.445.529-.026L3 11z"
        ></path>
      </symbol>
    </svg>



        <div class="option-panel-purely-uer-accessibility">
            <div class="option-panel-purely-wrapper">
                <button class="accessibility-controller"><svg
            width="1.75em"
            height="1.75em"
            fill="#fff"
          >
            <use xlink:href="#tools"></use>
          </svg></button>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam corrupti quaerat esse consectetur rerum animi deserunt culpa molestiae quibusdam iste labore ab incidunt possimus mollitia ratione enim minus, exercitationem a!</p>
            </div>
        </div>
    `;
  //  layout template close

    

  // lets inject the layout template into the body of page
  body_for_purely_option_panel.insertAdjacentHTML('beforeend', option_panel_layout)



  // grab the option panel layout
  const option_panel_purely_uer_accessibility = document.querySelector(
    ".option-panel-purely-uer-accessibility"
  );
    

  // let's grab the button from the option panel
  const accessibility_controller = document.querySelector(".accessibility-controller");
  accessibility_controller.addEventListener('click', (e) => {
    e.preventDefault();
      



    // toggle the accessibility view start 
    if (option_panel_purely_uer_accessibility.classList.contains("show-option-panel-purely-uer-accessibility")) {
      option_panel_purely_uer_accessibility.classList.remove(
        "show-option-panel-purely-uer-accessibility"
      );
    } else {
      option_panel_purely_uer_accessibility.classList.add(
        "show-option-panel-purely-uer-accessibility"
      );
    }
    // toggle the accessibility view close
      


    // toggle button open and close
    if (accessibility_controller.classList.contains('button_state_open')) {
      accessibility_controller.classList.remove('button_state_open');
    } else {
      accessibility_controller.classList.add('button_state_open');
    }

  })
  

});







