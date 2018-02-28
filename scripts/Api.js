'use strict';
/*global $ */
//eslint-disable-next-line no-unused-vars//

const api = (function () {
  const API_KEY = 'AIzaSyD9OvVvRVK6mBIVJLnF3AnqyBPaM_F-0vY';
  const BASE_URL = 'https://www.googleapis.com/youtube/v3/search';
  const fetchVideos = function(searchTerm,callback){
    const query = {
      part: 'snippet',
      key: API_KEY,
      q: `${searchTerm} in:name`,
      per_page: 5
    };
    $.getJSON(BASE_URL, query, callback);
  };

}());