# HeatMapColour
Get a suitable colour for an overlay style map - based on the length of your data.

You can add any CSS named colour (e.g. `red`, `blue`, `cyan`... etc.) or HEX colour as the second parameter (e.g. `#fff` or `#ffffff`).

[Demo Link Coming Soon](#)

Simply pass the Array/Object you want to use, along with the colour - and retrieve a suitable RGBA colour for the background of your hashmap based on the size.

```
 var map = new Array(10);
 var colour = new HeatMapColour(map, 'red').rgba; // => rgba(255,0,0,0.45)
```

#### Example

![line heatmap](/resources/HeatMapColour-2.png)
