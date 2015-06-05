$(document).ready(function() {

            console.log('ready');

            $.mobile.loading('show');

            $.getJSON('data/place.js', function(data) {

                $.mobile.loading('hide');

                $('#placeList').html('');
                var item;
                var link;

                $.each(data, function(index, val) {
                    // console.log(val.name);
                    item = $('<li></li>');
                    
                    link = $('<a href="#"></a>');

                    link.append('<img src="#">');
                    link.append('<h2>Broken Bells</h2>');
                    link.append('<p>Broken Bells</p>');

                    item.append(link);
                    $('#placeList').append(item);
                });

                // Refresh Listview
                $('#placeList').listview('refresh');
            });
        });
