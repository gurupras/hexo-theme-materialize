

define(['jquery'], function($){

  $('.article-entry').each( applyLightBoxToImages );

  //////////


  function applyLightBoxToImages(i) {
    var articleEntry = $(this);

    articleEntry.find('img').filter(e => e.hasClass('no-process')).each(prepareImages);

    articleEntry.find('a[data-lightbox]').each(addRelPropertyOnLinks);


    //////////////


    function prepareImages(j) {
      var img = $(this);
      if (img.parent().hasClass('fancybox')) {
        return;
      }

      img.wrap('<a href="' + this.src + '" title="' + this.alt + '" data-lightbox="image-' + i + '-' + j + '" />');
    }


    function addRelPropertyOnLinks() {
      this.rel = 'article' + i;
    }

  }
});
