// Copyright (C) 2015  Teerasej Jiraphatchandej

// This program is free software: you can redistribute it and/or modify it
// under the terms of the GNU General Public License as published by the Free
// Software Foundation, either version 3 of the License, or (at your option)
// any later version.

// This program is distributed in the hope that it will be useful, but WITHOUT
// ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
// FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for
// more details.

// You should have received a copy of the GNU General Public License along
// with this program.  If not, see <http://www.gnu.org/licenses/>.

// Resource URL: http://th.wikipedia.org/wiki/ไหว้พระ_9_วัด_กรุงเทพมหานคร

var places;
var selectedPlace;

$(document).ready(function() {

    console.log('ready');

    $(document).on('pagecontainerbeforehide', function(event, ui) {

        var nextPage = ui.nextPage[0];
        var prevPage = ui.prevPage[0];

        // console.log('Previous page: ' + prevPage.id);
        // console.log('Next page: ' + nextPage.id);

        if (nextPage.id == 'author') {
        	$(nextPage).find('.profile').css('background-image', 'url(assets/images/profile.jpg');
        }

        // Get place object to show in detail page.
        if (nextPage.id == 'detail') {

        	// Set header title with place's name
        	$(nextPage).find('header h1').html(selectedPlace.name);

        	// Set image's source with place's photo path
        	$(nextPage).find('.cover').css('background-image', 'url(assets/images/' + selectedPlace.imageFile + ')');
        	$(nextPage).find('.cover').css('-webkit-background-size', 'cover');
        	$(nextPage).find('.cover').css('background-size', 'cover');
        	
        	// Set description with place's content
        	$(nextPage).find('article p').html(selectedPlace.description);

        }



    });



    $.mobile.loading('show');

    $.getJSON('data/place.js', function(data) {

        $.mobile.loading('hide');

        // Keep in global variable
        places = data;

        //// Start populate place view

        $('#placeList').html('');
        var item;
        var link;

        $.each(data, function(index, val) {
            // console.log(val.name);
            item = $('<li></li>');

            link = $('<a href="#detail" data-transition="slide"></a>');

            link.append('<img src="assets/images/' + val.thumbFile + '">');
            link.append('<h2>' + val.name + '</h2>');
            // link.append('<p>' + val.description + '</p>');

            item.append(link);
            $('#placeList').append(item);
        });

        // Refresh Listview
        $('#placeList').listview('refresh');

        // Detect click event on list view
        $('#placeList').on('click', ' > li', function() {
            var selected_index = $(this).index();
            console.log('Selected id: ' + selected_index);

            selectedPlace = places[selected_index];

            console.log('Selected place: ' + selectedPlace.name);
        });
    });
});
