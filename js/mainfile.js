

$('.container_close_button').click(function resetwidth(){
   $(".container_close_button").hide();
   $(".content_full_details").css("display", "none");
  $(".data_container").removeClass("data_container_animation");
});

function placeSearch(){
	var options = {
        };
	var input          = document.getElementById('search_input');
	var autocomplete   = new google.maps.places.Autocomplete(input, options);
  var address        = document.getElementById('search_input').value;

    $('#main_search_button').click(function renderMap() {

      $( "._place_name" ).empty();
      $( "._place_weather").empty();
      $( "._place_weather_details").empty();
      $( "._place_time_date" ).empty();
      $("#content_container").empty();


      var address     = document.getElementById('search_input').value.split(',')[0];
      var geocoder    = new google.maps.Geocoder();
      var selLocLat   = 0;
      var selLocLng   = 0;
      console.log(address.locality);
      $('<h4>' +  address + '</h4>').appendTo('._place_name');


      geocoder.geocode({'address': address}, function(results, status) {
              if (status === 'OK')
              {

                  var dark_style = [
                                  {
                                        "elementType": "geometry",
                                        "stylers": [
                                          {
                                            "color": "#242f3e"
                                          }
                                        ]
                                      },
                                      {
                                        "elementType": "labels.text.fill",
                                        "stylers": [
                                          {
                                            "color": "#746855"
                                          }
                                        ]
                                      },
                                      {
                                        "elementType": "labels.text.stroke",
                                        "stylers": [
                                          {
                                            "color": "#242f3e"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "administrative.locality",
                                        "elementType": "labels.text.fill",
                                        "stylers": [
                                          {
                                            "color": "#d59563"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "poi",
                                        "elementType": "labels.text.fill",
                                        "stylers": [
                                          {
                                            "color": "#d59563"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "poi.attraction",
                                        "elementType": "geometry.fill",
                                        "stylers": [
                                          {
                                            "visibility": "on"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "poi.park",
                                        "elementType": "geometry",
                                        "stylers": [
                                          {
                                            "color": "#263c3f"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "poi.park",
                                        "elementType": "labels.text.fill",
                                        "stylers": [
                                          {
                                            "color": "#6b9a76"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "road",
                                        "elementType": "geometry",
                                        "stylers": [
                                          {
                                            "color": "#38414e"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "road",
                                        "elementType": "geometry.stroke",
                                        "stylers": [
                                          {
                                            "color": "#212a37"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "road",
                                        "elementType": "labels.text.fill",
                                        "stylers": [
                                          {
                                            "color": "#9ca5b3"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "road.highway",
                                        "elementType": "geometry",
                                        "stylers": [
                                          {
                                            "color": "#746855"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "road.highway",
                                        "elementType": "geometry.stroke",
                                        "stylers": [
                                          {
                                            "color": "#1f2835"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "road.highway",
                                        "elementType": "labels.text.fill",
                                        "stylers": [
                                          {
                                            "color": "#f3d19c"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "transit",
                                        "elementType": "geometry",
                                        "stylers": [
                                          {
                                            "color": "#2f3948"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "transit.station",
                                        "elementType": "labels.text.fill",
                                        "stylers": [
                                          {
                                            "color": "#d59563"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "water",
                                        "elementType": "geometry",
                                        "stylers": [
                                          {
                                            "color": "#17263c"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "water",
                                        "elementType": "labels.text.fill",
                                        "stylers": [
                                          {
                                            "color": "#515c6d"
                                          }
                                        ]
                                      },
                                      {
                                        "featureType": "water",
                                        "elementType": "labels.text.stroke",
                                        "stylers": [
                                          {
                                            "color": "#17263c"
                                          }
                                        ]
                                      }
                                    ]
                  var light_style = [
                                          {
                                            "elementType": "geometry",
                                            "stylers": [
                                              {
                                                "color": "#ebe3cd"
                                              }
                                            ]
                                          },
                                          {
                                            "elementType": "labels.text.fill",
                                            "stylers": [
                                              {
                                                "color": "#523735"
                                              }
                                            ]
                                          },
                                          {
                                            "elementType": "labels.text.stroke",
                                            "stylers": [
                                              {
                                                "color": "#f5f1e6"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "administrative",
                                            "elementType": "geometry.stroke",
                                            "stylers": [
                                              {
                                                "color": "#c9b2a6"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "administrative.land_parcel",
                                            "elementType": "geometry.stroke",
                                            "stylers": [
                                              {
                                                "color": "#dcd2be"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "administrative.land_parcel",
                                            "elementType": "labels.text.fill",
                                            "stylers": [
                                              {
                                                "color": "#ae9e90"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "landscape.natural",
                                            "elementType": "geometry",
                                            "stylers": [
                                              {
                                                "color": "#dfd2ae"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "poi",
                                            "elementType": "geometry",
                                            "stylers": [
                                              {
                                                "color": "#dfd2ae"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "poi",
                                            "elementType": "labels.text.fill",
                                            "stylers": [
                                              {
                                                "color": "#93817c"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "poi.attraction",
                                            "elementType": "geometry.fill",
                                            "stylers": [
                                              {
                                                "visibility": "on"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "poi.park",
                                            "elementType": "geometry.fill",
                                            "stylers": [
                                              {
                                                "color": "#a5b076"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "poi.park",
                                            "elementType": "labels.text.fill",
                                            "stylers": [
                                              {
                                                "color": "#447530"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "road",
                                            "elementType": "geometry",
                                            "stylers": [
                                              {
                                                "color": "#f5f1e6"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "road.arterial",
                                            "elementType": "geometry",
                                            "stylers": [
                                              {
                                                "color": "#fdfcf8"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "road.highway",
                                            "elementType": "geometry",
                                            "stylers": [
                                              {
                                                "color": "#f8c967"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "road.highway",
                                            "elementType": "geometry.stroke",
                                            "stylers": [
                                              {
                                                "color": "#e9bc62"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "road.highway.controlled_access",
                                            "elementType": "geometry",
                                            "stylers": [
                                              {
                                                "color": "#e98d58"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "road.highway.controlled_access",
                                            "elementType": "geometry.stroke",
                                            "stylers": [
                                              {
                                                "color": "#db8555"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "road.local",
                                            "elementType": "labels.text.fill",
                                            "stylers": [
                                              {
                                                "color": "#806b63"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "transit.line",
                                            "elementType": "geometry",
                                            "stylers": [
                                              {
                                                "color": "#dfd2ae"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "transit.line",
                                            "elementType": "labels.text.fill",
                                            "stylers": [
                                              {
                                                "color": "#8f7d77"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "transit.line",
                                            "elementType": "labels.text.stroke",
                                            "stylers": [
                                              {
                                                "color": "#ebe3cd"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "transit.station",
                                            "elementType": "geometry",
                                            "stylers": [
                                              {
                                                "color": "#dfd2ae"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "water",
                                            "elementType": "geometry.fill",
                                            "stylers": [
                                              {
                                                "color": "#b9d3c2"
                                              }
                                            ]
                                          },
                                          {
                                            "featureType": "water",
                                            "elementType": "labels.text.fill",
                                            "stylers": [
                                              {
                                                "color": "#92998d"
                                              }
                                            ]
                                          }
                                        ]
                  var mapStyle = light_style;



                  selLocLat   = results[0].geometry.location.lat();
                  selLocLng   = results[0].geometry.location.lng();

                  var pyrmont = new google.maps.LatLng(selLocLat, selLocLng);
            

                 function weather(){
                    $.ajax({
                      url: 'https://api.openweathermap.org/data/2.5/weather?'+ 'lat=' + selLocLat +'&' + 'lon='+ selLocLng + '&appid=6466c34fc1b29ca1f1bc38ba0d52fe2b&units=metric',                         
                      type: "GET",
                      dataType: "json",
                      success: function(data){
                        console.log(data.weather[0].main);
                        console.log(data);
                        console.log(data.main.temp);
                        var placeTemp = data.main.temp;
                        var placeWeather = data.weather[0].description;
                        var placeHumidity = data.main.humidity;
                        var placeWind = data.wind.speed
                        $('<h4 class ="_light_font">' +  placeTemp + "&deg;C" + '</h4>' + '<h6  class ="_bold_font">' +  placeWeather +'</h6>' ).appendTo('._place_weather');
                        $('<h6 class ="_bold_font" >' +  "Humidity : " +  placeHumidity + '</h6>' ).appendTo('._place_weather');
                        $('<h6 class ="_bold_font" >' + "Wind Speed : " +  placeWind  + '</h6>' ).appendTo('._place_time_date');
                      }
                    });
                }
               weather();

         };



            var timeStamp = new Date().getTime()/1000 + new Date().getTimezoneOffset() * 60;
            var googleTimeZoneURL ='https://maps.googleapis.com/maps/api/timezone/json?location=' + selLocLat + ',' + selLocLng + '&timestamp=' + timeStamp + '&key=AIzaSyBlHHf_22xScsVSzpJKqTQqXW1z9PmCDfM'

          $.getJSON(googleTimeZoneURL, function(timedata) {
            var dstOffset = timedata.dstOffset;
            var rawOffset = timedata.rawOffset;
            var offsets = dstOffset * 1000 + rawOffset * 1000
            var localdate = new Date(timeStamp * 1000 + offsets)
              function addZero(i) {
                    if (i < 10) {
                        i = "0" + i;
                    }
                    return i;
                }
            var placeHours   = addZero(localdate.getHours());
            var placeMinutes = addZero(localdate.getMinutes());
            var placeDay     = localdate.getDate();
            var monthNames = [ "January", "February", "March", "April", "May", "June", 
                               "July", "August", "September", "October", "November", "December" ];
            var placeMonth = monthNames[localdate.getMonth()];
            var placeYear = localdate.getFullYear();
            console.log(placeDay);
            console.log(placeMonth);
            console.log(placeYear);

                    function changeColor(){
                      var placeHours   = localdate.getHours();
                      if (placeHours >= 0 && placeHours <= 5) {
                         $("._sky").css("background", "linear-gradient(to bottom, #000000 0%,#16222a 29%,#3a6073 100%)");
                          $("._gradient_shade").css("background", "linear-gradient(45deg, #3a6073 0%,#16222a 71%,#000000 100%)");
                          $("._solid_shade").css("background", "linear-gradient(45deg, #a2ab58, #636363)");                        
                          $("._onlynightelements").css("display", "block");
                          $("._brightnesseffect_set1").css("filter", "brightness(100%)");
                          $("._brightnesseffect_set2").css("filter", "brightness(100%)");
                          $("._grayscaleeffect_set1").css("filter", "grayscale(100%)");
                          $("._grayscaleeffect_set2").css("filter", "grayscale(100%)");
                          $("._saturateeffect_set1").css("filter", "saturate(0)");
                          $("._saturateeffect_set2").css("filter", "saturate(0)");
                         mapStyle = dark_style;
                        
                      }else if (placeHours >= 6  && placeHours <= 9) {
                          $("._sky").css("background", "linear-gradient(to bottom, #3a1c71 0%,#d76d77 25%,#d76d77 25%,#ffaf7b 52%,#fcfcfc 100%)");
                          $("._gradient_shade").css("background", "linear-gradient(45deg, #fcfcfc 0%,#ffaf7b 27%,#d76d77 59%,#3a1c71 100%)");
                          $("._solid_shade").css("background", "linear-gradient(45deg, #71b280, #134e5e)");                        
                          $("._onlynightelements").css("display", "none");
                          $("._brightnesseffect_set1").css("filter", "brightness(100%)");
                          $("._brightnesseffect_set2").css("filter", "brightness(100%)");
                          $("._grayscaleeffect_set1").css("filter", "grayscale(0%)");
                          $("._grayscaleeffect_set2").css("filter", "grayscale(0%)");
                          $("._saturateeffect_set1").css("filter", "saturate(1.5)");
                          $("._saturateeffect_set2").css("filter", "saturate(1.8)");



                      }else if (placeHours >= 10 && placeHours <= 16) {
                         $("._sky").css("background", "linear-gradient(to bottom, #1c92d2, #f2fcfe)");
                          $("._gradient_shade").css("background", "linear-gradient(45deg, #f2fcfe 0%,#1c92d2 99%)");
                          $("._solid_shade").css("background", "linear-gradient(45deg, #ffffff 0%,#b2b532 34%,#7e8e07 71%,#165602 100%,#165602 100%)");                        
                          $("._onlynightelements").css("display", "none");
                          $("._brightnesseffect_set1").css("filter", "brightness(100%)");
                          $("._brightnesseffect_set2").css("filter", "brightness(100%)");
                          $("._grayscaleeffect_set1").css("filter", "grayscale(0%)");
                          $("._grayscaleeffect_set2").css("filter", "grayscale(0%)");
                          $("._saturateeffect_set1").css("filter", "saturate(1.5)");
                          $("._saturateeffect_set2").css("filter", "saturate(1.8)");


                      }else if (placeHours >= 17 && placeHours <= 21) {
                          $("._sky").css("background", "linear-gradient(to bottom, #1a2a6c, #b21f1f, #fdbb2d)");
                          $("._gradient_shade").css("background", "linear-gradient(45deg, #fdbb2d 2%,#b21f1f 53%,#1a2a6c 100%)");
                          $("._solid_shade").css("background", "linear-gradient(45deg, #ffffff , #fffc00)");                        
                          $("._onlynightelements").css("display", "none");   
                          $("._saturateeffect_set1").css("filter", "saturate(0)");
                          $("._saturateeffect_set2").css("filter", "saturate(0)");
                          $("._grayscaleeffect_set1").css("filter", "grayscale(0%)");
                          $("._grayscaleeffect_set2").css("filter", "grayscale(0%)");
                           $("._brightnesseffect_set1").css("filter", "brightness(0%)");
                          $("._brightnesseffect_set2").css("filter", "brightness(30%)");


                      }else if (placeHours >= 22 && placeHours <= 24) {
                          $("._sky").css("background", "linear-gradient(to bottom, #000000 0%,#16222a 29%,#3a6073 100%)");
                          $("._gradient_shade").css("background", "linear-gradient(45deg, #3a6073 0%,#16222a 71%,#000000 100%)");
                          $("._solid_shade").css("background", "linear-gradient(45deg, #a2ab58, #636363)");                        
                          $("._onlynightelements").css("display", "block");
                          $("._brightnesseffect_set1").css("filter", "brightness(100%)");
                          $("._brightnesseffect_set2").css("filter", "brightness(100%)");
                          $("._grayscaleeffect_set1").css("filter", "grayscale(100%)");
                          $("._grayscaleeffect_set2").css("filter", "grayscale(100%)");
                          $("._saturateeffect_set1").css("filter", "saturate(0)");
                          $("._saturateeffect_set2").css("filter", "saturate(0)");
                         mapStyle = dark_style;

                    }
                  }
                  changeColor();
                  map         = new google.maps.Map(document.getElementById('map_loader'), {
                  center: pyrmont,
                  zoom: 11,
                  styles: mapStyle 
              });

              $("._main_window_searchbar").css("display", "none");  
              $("._full_page_conatiner").css("display", "block"); 
              $( "._window_searchbar" ).addClass( "mt-2" )
              $( "._window_searchbar" ).removeClass( "_first_search_bar" );


            $('<h4 class ="_light_font">' +  placeHours + ":" + placeMinutes + '</h4>' + '<h6 class ="_bold_font">' +  placeDay + "  " + placeMonth + "  " + placeYear + '</h6>').appendTo('._place_time_date');
           });
              $('#cafebutton, #spabutton, #accommodationbutton, #cinemasbutton, #parkbutton, #barbutton').click(function(){
                  $("#content_container").empty();
                  $(".container_close_button").show();
                });
               $('#cafebutton').click(function cafeFunction(){
                      console.log("cafebutton");
                      var infowindow;
                      var request = {
                          location: pyrmont,
                          radius : 8047,
                          types: ['cafe'],
                          keyword: 'best view'
                      };
                      var service = new google.maps.places.PlacesService(map);
                      service.textSearch(request, callback); 
                           function callback(results,status){
                                if(status == google.maps.places.PlacesServiceStatus.OK){
                                for (var i=0; i <5; i++){
                                createMarker(results[i]);
                              }
                            }
                           }

                      function createMarker(place) {   
                            var placeLoc = place.geometry.location;
                            var marker = new google.maps.Marker({
                                          map:map,
                                          position: place.geometry.location
                                          });
                                          infowindow = new google.maps.InfoWindow();

                             $('<div class="content_full_details">' + '<h2>' + place.name + '</h2>' +  '<h4>' + place.formatted_address + '</h4>' +  '<h4> Rating ' + place.rating + '</h4>' + '</div>').appendTo('#content_container');
                              google.maps.event.addListener(marker, 'click', function(){
                              infowindow.setContent(place.name + '</strong><br>' + place.formatted_address);
                              infowindow.open(map, this);
                              });
                      };

                  });
                 $('#barbutton').click(function cafeFunction(){
                      console.log("cafebutton");
                      var infowindow;
                      var request = {
                      location: pyrmont,
                      radius : 8047,
                      types: ['bar'],
                      keyword: 'best view'
                      };
                      var service = new google.maps.places.PlacesService(map);
                      service.textSearch(request, callback); 
                           function callback(results,status){
                                if(status == google.maps.places.PlacesServiceStatus.OK){
                                for (var i=0; i <5; i++){
                                createMarker(results[i]);
                              }
                            }
                           }
                  
                      function createMarker(place) { 

                      
                            var placeLoc = place.geometry.location;
                            var marker = new google.maps.Marker({
                                          map:map,
                                          position: place.geometry.location
                                          });
                                          infowindow = new google.maps.InfoWindow();

                             $('<div class="content_full_details">' + '<h2>' + place.name + '</h2>' +  '<h4>' + place.formatted_address + '</h4>' +  '<h4> Rating ' + place.rating + '</h4>' + '</div>').appendTo('#content_container');
                              google.maps.event.addListener(marker, 'click', function(){
                              infowindow.setContent(place.name + '</strong><br>' + place.formatted_address);
                              infowindow.open(map, this);
                              });
                           
                      };

                     

                  });
                $('#spabutton').click(function movietheaterFunction() {
                      var typeSpa = 'spa';
                      var infowindow;
                      var request = {
                      location: pyrmont,
                      radius : 8047,
                      types: [typeSpa]
                      };
                      var service = new google.maps.places.PlacesService(map);
                      service.textSearch(request, callback); 
                           function callback(results,status){
                                if(status == google.maps.places.PlacesServiceStatus.OK){
                                for (var i=0; i <5; i++){
                                createMarker(results[i]);
                              }
                            }
                           }

                      function createMarker(place) {
                         
  
                            var placeLoc = place.geometry.location;
                            var marker = new google.maps.Marker({
                                          map:map,
                                          position: place.geometry.location
                                          });
                                          infowindow = new google.maps.InfoWindow();

                                    
                            $('<div class="content_full_details">' + '<h2>' + place.name + '</h2>' +  '<h4>' + place.formatted_address + '</h4>' +  '<h4> Rating ' + place.rating + '</h4>' + '</div>').appendTo('#content_container');
                              google.maps.event.addListener(marker, 'click', function(){
                              infowindow.setContent(place.name + '</strong><br>' + place.formatted_address);
                              infowindow.open(map, this);
                              });
                      };
                  });
                $('#accommodationbutton').click(function shoppingmallFunction() {
  
                      var typelodging = 'lodging';
                      var infowindow;
                      var request = {
                      location: pyrmont,
                      radius : 8047,
                      types: [typelodging]
                      };
                      var service = new google.maps.places.PlacesService(map);
                      service.textSearch(request, callback); 
                           function callback(results,status){
                                if(status == google.maps.places.PlacesServiceStatus.OK){
                                for (var i=0; i <5; i++){
                                createMarker(results[i]);
                                console.log(results[i]);

                              }
                            }
                           }


                      function createMarker(place) {
                            var placeLoc = place.geometry.location;
                            var marker = new google.maps.Marker({
                                          map:map,
                                          position: place.geometry.location
                                          });
                                          infowindow = new google.maps.InfoWindow();       
                            $('<div class="content_full_details">' + '<h2>' + place.name + '</h2>' +  '<h4>' + place.formatted_address + '</h4>' +  '<h4> Rating ' + place.rating + '</h4>' + '</div>').appendTo('#content_container');
                              google.maps.event.addListener(marker, 'click', function(){
                              infowindow.setContent(place.name + '</strong><br>' + place.formatted_address);
                              infowindow.open(map, this);

                              });
                      };

                 });
                 $('#parkbutton').click(function cafeFunction(){
                      var infowindow;
                      var request = {
                      location: pyrmont,
                      radius : 8047,
                      types: ['park'],
                      keyword: 'best view'
                      };
                      var service = new google.maps.places.PlacesService(map);
                      service.textSearch(request, callback); 
                           function callback(results,status){
                                if(status == google.maps.places.PlacesServiceStatus.OK){
                                for (var i=0; i < 5; i++){
                                createMarker(results[i]);
                              }
                            }
                           }

                      function createMarker(place) {   
                            var placeLoc = place.geometry.location;
                            var marker = new google.maps.Marker({
                                          map:map,
                                          position: place.geometry.location
                                          });
                                          infowindow = new google.maps.InfoWindow();

                             $('<div class="content_full_details">' + '<h2>' + place.name + '</h2>' +  '<h4>' + place.formatted_address + '</h4>' +  '<h4> Rating ' + place.rating + '</h4>' + '</div>').appendTo('#content_container');
                              google.maps.event.addListener(marker, 'click', function(){
                              infowindow.setContent(place.name + '</strong><br>' + place.formatted_address);
                              infowindow.open(map, this);
                              });
                      };

                  });                
                 $('#cinemasbutton').click(function cafeFunction(){
              
                      var infowindow;
                      var request = {
                      location: pyrmont,
                      radius : 8047,
                      types: ['movie_theater'],
                      keyword: 'rankBy=distance'
                      };
                      var service = new google.maps.places.PlacesService(map);
                      service.textSearch(request, callback); 
                           function callback(results,status){
                                if(status == google.maps.places.PlacesServiceStatus.OK){
                                for (var i=0; i < 5; i++){
                                createMarker(results[i]);
                              }
                            }
                           }

                      function createMarker(place) {   
                            var placeLoc = place.geometry.location;
                            var marker = new google.maps.Marker({
                                          map:map,
                                          position: place.geometry.location
                                          });
                                          infowindow = new google.maps.InfoWindow();

                             $('<div class="content_full_details">' + '<h2>' + place.name + '</h2>' +  '<h4>' + place.formatted_address + '</h4>' +  '<h4> Rating ' + place.rating + '</h4>' + '</div>').appendTo('#content_container');
                              google.maps.event.addListener(marker, 'click', function(){
                              infowindow.setContent(place.name + '</strong><br>' + place.formatted_address);
                              infowindow.open(map, this);
                              });
                      };

                  });
    });

  });

};

