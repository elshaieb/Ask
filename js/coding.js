/*global $, document, alert*/

$(document).ready(function () {
    'use strict';

    var parent_of_wall,
        wall_data,
        prefab;
    
    //$('#holding').fadeOut(500).fadeIn(500);
    
    $('#wall_data').keyup(function () {
        wall_data = $(this).val();
    });

    $('#publish_btn').click(function () {
        if ($('#wall_data').val() === '') {
            alert('you need to write something');
        } else {
            $('#wall_data').val('');
            prefab = $('<div class="data bg-white p-4 mb-2"> <h2 class = "py-8 text-grey-darkest"> UI designer </h2> <div class = "round inline-block" ><img src = "img/kaka.jpg" alt = "p1" ></div> <div id = "wall_data"class = "inline-block px-8 relative" ><h4 class = "text-grey text-sm">sara sayed <span class = "px-2 text-2xl" > . </span> <span id = "time_change"> about 1 hour </span> </h4> </div> <p class = "text-lg text-grey-dark leading-normal" > I have seen enoughfor one life, i have lived my life as best as could.can i have the bill please ? He who was scored the first goal. </p> <div class = "flex flex-wrap text-grey py-4 border-b border-grey-dark" ><div class = "w-2/3" ><i class = "fa fa-heart fa-2x"> </i> </div> <div class = "w-1/3 text-right"><i class = "fa fa-home fa-2x px-2 pb-2" > </i> <i class = "fa fa-user fa-2x px-2 pb-2"> </i> <i class = "fa fa-users fa-2x px-2" > </i> <i class = "fa fa-users fa-2x px-2"> </i> </div> </div> <p class = "py-4 text-lg text-grey-dark leading-normal"> <span class = "text-blue-dark"> +1 answer in : </span>' + wall_data + '</p></div>');
            
            prefab.fadeOut(1000).fadeIn(2000);
            
            parent_of_wall = $('#wall');

            parent_of_wall.prepend(prefab);
        }
    });
});
