import jQuery from "jquery";
import * as Survey from "survey-jquery";
import * as widgets from "surveyjs-widgets";

// CSS
import "survey-jquery/survey.css";
import "survey-jquery/modern.css";
import "surveyjs-widgets/node_modules/nouislider/distribute/nouislider.css"
import "../css/main.css";

// DATA
import inquerito from "../inquerito/inquerito.yml";


jQuery(function ($) {

  Survey
    .StylesManager
    .applyTheme("modern");
  widgets.nouislider(Survey);
  window.survey = new Survey.Model(inquerito);
  
  survey.locale = "pt";
  $("#surveyElement").Survey({model: survey});


  // On complete

  survey.onComplete.add(function (sender) {

    //$.post()
    document
      .querySelector("#surveyResult")
      .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);

  });

  survey.showPreviewBeforeComplete = "showAnsweredQuestions";
  
});



