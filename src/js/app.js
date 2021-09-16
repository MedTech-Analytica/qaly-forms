jQuery(function ($) {

  //var foo = $.getJSON("inquerito/inquerito.json");
  var foo = $.get("inquerito/inquerito.yml");
  
  foo.done(function(inquerito) {

    var json = jsyaml.load(inquerito);

    Survey
      .StylesManager
      .applyTheme("modern");
    
    window.survey = new Survey.Model(json);

    survey
      .onComplete
      .add(function (sender) {
        document
          .querySelector('#surveyResult')
          .textContent = "Result JSON:\n" + JSON.stringify(sender.data, null, 3);
      });

    survey.locale = 'pt';
    $("#surveyElement").Survey({model: survey});
  });
  
});



