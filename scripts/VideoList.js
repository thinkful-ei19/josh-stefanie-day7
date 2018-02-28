'use strict';
/*global $, store, api*/
//eslint-disable-next-line no-unused-vars//

const videoList = (function(){
  const generateVideoItemHtml = function (video) {
    return `
        <div>
          <li> 
            <p>"ID:  ${video.id}"</p>
            <p>"TITLE:  ${video.title}"</p>
              <img src='${video.thumbnail}'>
          </li>
        </div>`;
  };
  const render = function () {
    const videoGroup = store.videos.map(generateVideoItemHtml);
    $('.results').html(videoGroup);
  };
  const handleFormSubmit = function () {
    $('form').submit(function(){
      event.preventDefault();
      const newSearchInput = $('#search-term');
      const newSearchTerm = newSearchInput.val();
      store.newSearchInput = newSearchInput;
      newSearchInput.val('');
      api.fetchVideos(newSearchTerm, function(response){
        const videos = api.decorateResponse(response);
        store.setVideos(videos);
        render();
      });
    });
  };
  const bindEventListeners = function(){
    handleFormSubmit();
  };
  return bindEventListeners;
});