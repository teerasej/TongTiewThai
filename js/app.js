$(document).ready(function() {
    
    console.log('ready')

    $.getJSON('data/place.js', function(data) {
        console.log('data back: ' + data);
    })
})
