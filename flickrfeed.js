$(document).ready(function() {

    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";



        var tag = $searchField.val();

        $('#photos').html('');
        $.getJSON(flickerAPI, {
                tags: tag,
                format: "json"
            },
            function(data){
                var result = '';
                var count = 0;

                if (data.items.length > 0) {

                    $.each(data.items,function(i,photo) {


                        result += count % 5 ? '<td>' : '<tr><td>';
                        result += '<a href="' + photo.link + '" >';
                        result += '<img src="' + photo.media.m + '"></a>';
                        result += (count - 4) % 5 ? '</td>' : '</td></tr>';
                        count++;
                    }); // end each
                } else {
                    result = "<p>No photos found that match: " + tag + ".</p>";
                }


                $('#photos').html( result );

            }); // end getJSON


}); // end ready