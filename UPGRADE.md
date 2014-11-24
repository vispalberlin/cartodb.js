# Upgrading from [cartodb-gmapsv3](https://github.com/vizzuality/cartodb-gmapsv3)/[leaflet](https://github.com/vizzuality/cartodb-leaflet) to CartoDB.js

If your application is running an old CartoDB javascript library, you should take
into account that several functions won't work as expected:

- **setMap**: use ```addTo``` instead. Example in our [docs](http://docs.cartodb.com/cartodb-platform/cartodb-js.html#creating-visualizations-at-runtime).
- **setLayerOrder**: no alternative, check proper map library methods ([Leaflet](http://leafletjs.com/reference.html#tilelayer-bringtofront) | GMaps: ```map.overlayMapTypes.setAt(0, layer);```).
- **setQuery**: use ```setSQL``` instead. Example in our [docs](http://docs.cartodb.com/cartodb-platform/cartodb-js.html#sublayersetsqlsql).
- **setStyle**: use ```setCartoCSS``` instead. Example in our [docs](http://docs.cartodb.com/cartodb-platform/cartodb-js.html#sublayersetcartocsscss).
- **isAdded**: check it with proper map library functions ([Leaflet](http://leafletjs.com/reference.html#map-haslayer) | GMaps: looping through map.overlayMapTypes [MVCArray](https://developers.google.com/maps/documentation/javascript/reference#MVCArray) and comparing layers ).
- **setBounds**: you can use this function within the proper map library ([Leaflet](http://leafletjs.com/reference.html#map-fitbounds) | [GMaps](https://developers.google.com/maps/documentation/javascript/reference#Map)).