// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require twitter/bootstrap

google.load("feeds", "1");

function findDone(result) {
  // Make sure we didn't get an error.
  if (!result.error) {
    // Get content div
    var html = '';
    var urls = [];

    // Loop through the results and print out the title of the feed and link to
    // the url.
    for (var i = 0; i < result.entries.length; i++) {
      var entry = result.entries[i];

      if (urls.indexOf(entry.url) != -1)
      {
        continue;
      }
      urls.push(entry.url);

      html += " \
        <div class='well content'> \
          <div class='entry-item'> \
    			  <h3> \
    		"
    	html += "<a href='" + entry.link + "'><i class='favicon-engadget' style='background-image: url(\"http://www.google.com/s2/u/0/favicons?domain=" + entry.link.substring(7, entry.link.length-1) + "\")'></i>" + entry.title + "</a>";
    	html += " \
              <span style='float:right'> \
                <a class='btn btn-primary btn-small' href='#'><i class='icon-plus icon-white'></i></a> \
              </span> \
    	      </h3> \
    	      <div> \
    	  ";
      	html += "<a href='" + entry.link + "'>" + entry.link + "</a>";
    	html += " \
    	      </div> \
    	      <div class='entry-summary'> \
    	  ";
    	html += entry.contentSnippet;
    	html += " \
    	      </div> \
    	    </div> \
    	  </div> \
    	  ";
    }
    $('#search-results').html(html);
  }
}

$(function() {
  $('#feed-search').submit(function() {
    var query = $('#search-val').val();
    google.feeds.findFeeds(query, findDone);
    return false;
  });
  $("#search-val").keyup(function() {
    var query = $('#search-val').val();
    google.feeds.findFeeds(query, findDone);
    return false;
  });
  $('#alert-test').alert();
  $('#alert-test-close').click(function() {
    $('#alert-test').removeClass('in');
  });
  $('.span9').click(function() {
    var element = $('#alert-test');
    element.addClass('in');
    setTimeout(function() { element.removeClass('in') }, 10000);
  });
});

