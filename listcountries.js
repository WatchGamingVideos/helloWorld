/**
 * Created by tolucadegbite on 2016-04-12.
 */
var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";



$(document).ready(function () {

    var cun = $('#countryList').val();


    var flickerAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";


    //if selected country code is equal to the country code, show for that country
    $('#countryList').change(function(){
        //alert('aaa');
        var cun = $('#countryList').val();
        $.getJSON('country_info.json', function (data) {
            var result ="<ul>";
            //console.log(data);
            $.each(data.countries.country, function(index,country){

                if (cun == country.countryCode) {
                    result += "<li>" + "<b>Main languages: </b>" + country.mainLanguages + "<br><br>" + "<b>How to say hello:</b> <br>"
                        + country.sayHello + "<br/><br/>" + "<b>Capital City:</b> <br>" + country.capital + "<br/>" + "<br/><b>Contient Name: </b>" + country.continentName + "</li>";
                }



            });

            $('#emptyP').html(result);
            console.log(result);


//flickr api
            element = document.getElementById('countryList');
            var e = element.options[ element.selectedIndex ].text;

            var tag = e;

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

//

        });
    });

}); //


