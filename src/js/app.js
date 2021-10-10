Survey
  .StylesManager
  .applyTheme("modern");


jQuery(function ($) {
  
  var foo = $.get("inquerito/inquerito.yml");
  
  foo.done(function(inquerito) {
    var json = jsyaml.load(inquerito);
    window.survey = new Survey.Model(json);
    survey.locale = 'pt';
    $("#surveyElement").Survey({model: survey});
    
    
    // On complete
    
    survey.onComplete.add(function (sender) {
        
        //$.post()
        document
          .querySelector('#surveyResult')
          .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
        
      });

    survey.showPreviewBeforeComplete = 'showAnsweredQuestions';
    
  });
  
});



