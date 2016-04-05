
	var maps = [];
	var colours = [];

	var map = new Array(10);
	var map2 = new Array(20);
	var map3 = new Array(40);
	var map4 = new Array(60);
	var map5 = new Array(80);
	var map6 = new Array(100);
	var map7 = new Array(120);

		maps.push(map);
		maps.push(map2);
		maps.push(map3);
		maps.push(map4);
		maps.push(map5);
		maps.push(map6);
		maps.push(map7);

		colours.push(new HeatMapColour(map, 'red'));
		colours.push(new HeatMapColour(map2, 'yellow'));
		colours.push(new HeatMapColour(map3, 'blue'));
		colours.push(new HeatMapColour(map4, 'green'));
		colours.push(new HeatMapColour(map5, 'purple'));
		colours.push(new HeatMapColour(map6, 'orange'));
		colours.push(new HeatMapColour(map7, 'black'));
	

$(document).ready(function(){

	for(var i = 0; i < maps.length; i++){
		$('.demo').append('<div class="map map-'+ i +'" title="Length of Array: ' + maps[i].length + '"></div>')

		for(var x = 0; x < maps[i].length; x++){
			var span = document.createElement('span');
				span.style['position'] = 'absolute';
				span.style['height'] = '100%';
			var width = parseInt(Math.random()*100, 10);
			
			while(width > 20){
				width = width/2
			}

			span.style['width'] = width + '%';
			span.style['left'] = parseInt(Math.random()*(100-width), 10) + '%';
			span.style['background-color'] = colours[i].rgba;

			$('.map-' + i).append(span);
		}

		
	}

});
	