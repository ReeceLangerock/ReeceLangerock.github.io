function changePortfolioSectionDisplayed(index){

  $('#portfolio-placeholder').fadeOut('slow', function(){
    $('#portfolio-placeholder').load(`portfolio.html #${index}`).fadeIn('slow');
  });

}
