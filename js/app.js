$(document).ready(function() {

    console.log('ready');

    $(document).on("pagecontainerbeforeshow", function(event, ui) {

        console.log('showing');
        // $(".foo", ui.prevPage ).val(""); /* reset value of .foo element on current page */
    });




    $.mobile.loading('show');

    $.getJSON('data/place.js', function(data) {

        $.mobile.loading('hide');

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
    });
});
