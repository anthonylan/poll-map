let map = L.map('map').setView([39.0119, -98.4842], 5)

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>',
    maxZoom: 10,
  }).addTo(map);

 
     // let iconCus = L.icon({
    //   iconUrl: '../icons/tra.png',
    //   iconSize: [65, 65],
    //   iconAnchor: [22, 50],
    //   popupAnchor:  [-3, -50]
    // })

    // for (var i = 0; i < locations.length; i++) {
		// 	marker = new L.marker([locations[i][1],locations[i][2]], /*{icon: iconCus}*/)
		// 		marker.bindPopup(locations[i][0])
    //   marker.addTo(map);
    //   marker.on('mouseover', function (e) {
    //         this.openPopup();
    //   });
    //   marker.on('mouseout', function (e) {
    //     this.closePopup();
    //   });

//Geocoding



  // var locations = [
	// 	[`<span class="votes">Albama Electoral Votes 👍🏼 9</span>`, 32.3182, -86.9023],
	// 	[`<span class="votes">Alaska Electoral Votes 👍🏼 3</span>`, 64.2008, -149.4937],
  //   [`<span class="votes">Arizona Electoral Votes 👍🏼 11</span>`, 34.0489, -111.0937],
  //   [`<span class="votes">Arkanas Electoral Votes 👍🏼 6</span>`, 35.2010, -91.8318],
  //   [`<span class="votes">California Electoral Votes 👍🏼 55</span>`, 36.7783, -119.4179],
  //   [`<span class="votes">Colorado Electoral Votes 👍🏼 9</span>`, 39.5501, -105.7821],
  //   [`<span class="votes">Connecticut Electoral Votes 👍🏼 7</span>`, 41.6032, -73.0877],
  //   [`<span class="votes">Delaware Electoral Votes 👍🏼 3</span>`, 38.9108, -75.5277],
  //   [`<span class="votes">Washington DC Electoral Votes 👍🏼 3</span>`, 38.9072, -77.0369],
  //   [`<span class="votes">Florida Electoral Votes 👍🏼 29</span>`, 27.6648, -81.5158],
  //   [`<span class="votes">Georgia Electoral Votes 👍🏼 16</span>`, 32.1656, -82.9001],
  //   [`<span class="votes">Hawaii Electoral Votes 👍🏼 4</span>`, 19.8968, -155.5828],
  //   [`<span class="votes">Idaho Electoral Votes 👍🏼 4</span>`, 44.0682, -114.7420],
  //   [`<span class="votes">Illinois Electoral Votes 👍🏼 20</span>`, 40.6331, -89.3985],
  //   [`<span class="votes">Indiana Electoral Votes 👍🏼 11</span>`, 40.2672, -86.1349],
  //   [`<span class="votes">Iowa Electoral Votes 👍🏼 6</span>`, 41.8780, -93.0977],
  //   [`<span class="votes">Kansas Electoral Votes 👍🏼 6</span>`, 39.0119, -98.4842],
  //   [`<span class="votes">Kentucky Electoral Votes 👍🏼 8</span>`, 37.8393, -84.2700],
  //   [`<span class="votes">Louisiana Electoral Votes 👍🏼 8</span>`, 30.9843, -91.9623],
  //   [`<span class="votes">Maine Electoral Votes 👍🏼 4</span>`, 45.2538, -69.4455],
  //   [`<span class="votes">Maryland Electoral Votes 👍🏼 10</span>`, 39.0458, -76.6413],
  //   [`<span class="votes">Massachusetts Electoral Votes 👍🏼 11</span>`, 42.4072, -71.3824],
  //   [`<span class="votes">Michigan Electoral Votes 👍🏼 16</span>`, 44.3148, -85.6024],
  //   [`<span class="votes">Minnesota Electoral Votes 👍🏼 10</span>`, 46.7296, -94.6859],
  //   [`<span class="votes">Mississippi Electoral Votes 👍🏼 6</span>`, 32.3547, -89.3985],
  //   [`<span class="votes">Missouri Electoral Votes 👍🏼 10</span>`, 37.9643, -91.8318],
  //   [`<span class="votes">Montana Electoral Votes 👍🏼 3</span>`, 46.8797, -110.3626],

  //   [`<span class="votes">Nebraska Electoral Votes 👍🏼 5</span>`, 41.4925, -99.9018],
  //   [`<span class="votes">Nevada Electoral Votes 👍🏼 6</span>`, 38.8026, -116.4194],
  //   [`<span class="votes">New Hampshire Electoral Votes 👍🏼 4</span>`, 43.1939, -71.5724],
  //   [`<span class="votes">New Jersey Electoral Votes 👍🏼 14</span>`, 40.0583, -74.4057],
  //   [`<span class="votes">New Mexico Electoral Votes 👍🏼 5</span>`, 34.5199, -105.8701],
  //   [`<span class="votes">New York Electoral Votes 👍🏼 29</span>`, 40.7128, -74.0060],
  //   [`<span class="votes">North Carolina Electoral Votes 👍🏼 15</span>`, 35.7596, -79.0193],
  //   [`<span class="votes">North Dakota Electoral Votes 👍🏼 3</span>`, 47.5515, -101.0020],
  //   [`<span class="votes">Ohio Electoral Votes 👍🏼 18</span>`, 40.4173, -82.9071],
  //   [`<span class="votes">Oklahoma Electoral Votes 👍🏼 7</span>`, 35.0078, -97.0929],
  //   [`<span class="votes">Oregon Electoral Votes 👍🏼 7</span>`, 43.8041, -120.5542],
  //   [`<span class="votes">Pennsylvania Electoral Votes 👍🏼 20</span>`, 41.2033, -77.1945],
  //   [`<span class="votes">Puerto Rico Electoral Votes 👍🏼 0</span>`, 18.2208, -66.5901],
  //   [`<span class="votes">Rhode Island Electoral Votes 👍🏼 9</span>`, 41.5801, -71.4774],
  //   [`<span class="votes">South Carolina Electoral Votes 👍🏼 9</span>`, 33.8361, -81.1637],
  //   [`<span class="votes">South Dakota Electoral Votes 👍🏼 3</span>`, 43.9695, -99.9018],
  //   [`<span class="votes">Tennessee Electoral Votes 👍🏼 11</span>`, 35.5175, -86.5804],
  //   [`<span class="votes">Texas Electoral Votes 👍🏼 38</span>`, 31.9686, -99.9018],
  //   [`<span class="votes">Utah Electoral Votes 👍🏼 6</span>`, 39.3210, -111.0937],
  //   [`<span class="votes">Vermont Electoral Votes 👍🏼 3</span>`, 44.5588, -72.5778],
  //   [`<span class="votes">Virginia Electoral Votes 👍🏼 13</span>`, 37.4316, -78.6569],
  //   [`<span class="votes">Washington Electoral Votes 👍🏼 12</span>`, 47.7511, -120.7401],
  //   [`<span class="votes">West Virginia Electoral Votes 👍🏼 5</span>`, 38.5976, -80.4549],
  //   [`<span class="votes">Wisconsin Electoral Votes 👍🏼 10</span>`, 43.7844, -88.7879],
  //   [`<span class="votes">Wyoming Electoral Votes 👍🏼 3</span>`, 43.0760, -107.2903],
	// 	];


 
      
//Set Icons Individually
L.marker([32.3182, -86.9023], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/alabama.jpg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Albama Electoral Votes 👍🏼 9</span>`).on('mouseover', function () { this.openPopup()});
L.marker([64.2008, -149.4937], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/Alaska.jpeg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Alaska Electoral Votes 👍🏼 3</span>`).on('mouseover', function () { this.openPopup()});
L.marker([34.0489, -111.0937], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/arizona.jpeg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Arizona Electoral Votes 👍🏼 11</span>`).on('mouseover', function () { this.openPopup()});
L.marker([35.2010, -91.8318], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/arkansas.gif', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Arkanas Electoral Votes 👍🏼 6</span>`).on('mouseover', function () { this.openPopup()});
L.marker([36.7783, -119.4179], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/California.jpeg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">California Electoral Votes 👍🏼 55</span>`).on('mouseover', function () { this.openPopup()});
L.marker([39.5501, -105.7821], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/colorado.jpeg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Colorado Electoral Votes 👍🏼 9</span>`).on('mouseover', function () { this.openPopup()});
L.marker([41.6032, -73.0877], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/connecticut.png', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Connecticut Electoral Votes 👍🏼 7</span>`).on('mouseover', function () { this.openPopup()});
L.marker([38.9108, -75.5277], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/delaware.gif', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Delaware Electoral Votes 👍🏼 3</span>`).on('mouseover', function () { this.openPopup()});
L.marker([38.9072, -77.0369], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/WashingtonDC.jpg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Washington DC Electoral Votes 👍🏼 3</span>`).on('mouseover', function () { this.openPopup()});
L.marker([27.6648, -81.5158], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/Florida.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Florida Electoral Votes 👍🏼 29</span>`).on('mouseover', function () { this.openPopup() });

L.marker([32.1656, -82.9001], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/georgia.jpeg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Georgia Electoral Votes 👍🏼 16</span>`).on('mouseover', function () { this.openPopup()});
L.marker([19.8968, -155.5828], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/hawaii.jpeg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Hawaii Electoral Votes 👍🏼 4</span>`).on('mouseover', function () { this.openPopup()});
L.marker([44.0682, -114.7420], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/Idaho.jpeg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Idaho Electoral Votes 👍🏼 4</span>`).on('mouseover', function () { this.openPopup()});
L.marker([40.6331, -89.3985], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/ILLINOIS.jpg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Illinois Electoral Votes 👍🏼 20</span>`).on('mouseover', function () { this.openPopup()});
L.marker([40.2672, -86.1349], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/Indiana.jpg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Indiana Electoral Votes 👍🏼 11</span>`).on('mouseover', function () { this.openPopup()});
L.marker([41.8780, -93.0977], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/iowa.jpg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Iowa Electoral Votes 👍🏼 6</span>`).on('mouseover', function () { this.openPopup()});
L.marker([39.0119, -98.4842], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/Kansas.jpg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Kansas Electoral Votes 👍🏼 6</span>`).on('mouseover', function () { this.openPopup()});
L.marker([37.8393, -84.2700], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/kentucky.jpeg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Kentucky Electoral Votes 👍🏼 8</span>`).on('mouseover', function () { this.openPopup()});
L.marker([30.9843, -91.9623], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/louisiana.jpg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Louisiana Electoral Votes 👍🏼 8</span>`).on('mouseover', function () { this.openPopup()});
L.marker([45.2538, -69.4455], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/maine.png', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Maine Electoral Votes 👍🏼 4</span>`).on('mouseover', function () { this.openPopup() });

L.marker([39.0458, -76.6413], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/Maryland.jpg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Maryland Electoral Votes 👍🏼 10</span>`).on('mouseover', function () { this.openPopup()});
L.marker([42.4072, -71.3824], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/massachusetts.jpg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Massachusetts Electoral Votes 👍🏼 11</span>`).on('mouseover', function () { this.openPopup()});
L.marker([44.3148, -85.6024], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/michigan.png', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Michigan Electoral Votes 👍🏼 16</span>`).on('mouseover', function () { this.openPopup()});
L.marker([46.7296, -94.6859], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/minnesota.jpeg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Minnesota Electoral Votes 👍🏼 10</span>`).on('mouseover', function () { this.openPopup()});
L.marker([32.3547, -89.3985], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/mississippi.jpg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Mississippi Electoral Votes 👍🏼 6</span>`).on('mouseover', function () { this.openPopup()});
L.marker([37.9643, -91.831], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/Missouri.jpeg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Missouri Electoral Votes 👍🏼 10</span>`).on('mouseover', function () { this.openPopup()});
L.marker([46.8797, -110.3626], {icon:L.icon({iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/Montana.jpg', iconSize: [38, 38],iconAnchor: [22, 50], popupAnchor:  [-3, -50]})}).addTo(map).bindPopup(`<span class="votes">Montana Electoral Votes 👍🏼 3</span>`).on('mouseover', function () { this.openPopup()});
L.marker([41.4925, -99.9018], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/Nebraska.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Nebraska Electoral Votes 👍🏼 5</span>`).on('mouseover', function () { this.openPopup() });
L.marker([38.8026, -116.4194], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/Navada.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Nevada Electoral Votes 👍🏼 6</span>`).on('mouseover', function () { this.openPopup() });
L.marker([43.1939, -71.5724], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/newhampshire.gif', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">New Hampshire Electoral Votes 👍🏼 4</span>`).on('mouseover', function () { this.openPopup() });


L.marker([40.0583, -74.4057], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/NewJersey.png', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">New Jersey Electoral Votes 👍🏼 14</span>`).on('mouseover', function () { this.openPopup() });
L.marker([34.5199, -105.8701], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/NewMexico.png', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">New Mexico Electoral Votes 👍🏼 5</span>`).on('mouseover', function () { this.openPopup() });
L.marker([40.7128, -74.0060], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/newyork.jpeg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">New York Electoral Votes 👍🏼 29</span>`).on('mouseover', function () { this.openPopup() });
L.marker([35.7596, -79.0193], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/northcarolina.png', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">North Carolina Electoral Votes 👍🏼 15</span>`).on('mouseover', function () { this.openPopup() });
L.marker([47.5515, -101.0020], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/NorthDakota.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">North Dakota Electoral Votes 👍🏼 3</span>`).on('mouseover', function () { this.openPopup() });
L.marker([40.4173, -82.9071], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/ohio.jpeg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Ohio Electoral Votes 👍🏼 18</span>`).on('mouseover', function () { this.openPopup() });
L.marker([35.0078, -97.0929], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/Oklahoma.jpeg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Oklahoma Electoral Votes 👍🏼 7</span>`).on('mouseover', function () { this.openPopup() });
L.marker([43.8041, -120.5542], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/oregon.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Oregon Electoral Votes 👍🏼 7</span>`).on('mouseover', function () { this.openPopup() });
L.marker([41.2033, -77.1945], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/pennsylvania.jpeg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Pennsylvania Electoral Votes 👍🏼 20</span>`).on('mouseover', function () { this.openPopup() });
L.marker([18.2208, -66.5901], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/PuertoRican_.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Puerto Rico Electoral Votes 👍🏼 0</span>`).on('mouseover', function () { this.openPopup() });

L.marker([41.5801, -71.4774], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/rhode-island-flag.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Rhode Island Electoral Votes 👍🏼 9</span>`).on('mouseover', function () { this.openPopup() });
L.marker([33.8361, -81.1637], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/southCarolina.jpeg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">South Carolina Electoral Votes 👍🏼 9</span>`).on('mouseover', function () { this.openPopup() });
L.marker([43.9695, -99.9018], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/southdakota.jpeg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">South Dakota Electoral Votes 👍🏼 3</span>`).on('mouseover', function () { this.openPopup() });
L.marker([35.5175, -86.5804], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/tennessee.gif', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Tennessee Electoral Votes 👍🏼 11</span>`).on('mouseover', function () { this.openPopup() });
L.marker([31.9686, -99.9018], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/texas-flag.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Texas Electoral Votes 👍🏼 38</span>`).on('mouseover', function () { this.openPopup() });
L.marker([39.3210, -111.0937], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/utah.gif', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Utah Electoral Votes 👍🏼 6</span>`).on('mouseover', function () { this.openPopup() });
L.marker([44.5588, -72.5778], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/vermont.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Vermont Electoral Votes 👍🏼 3</span>`).on('mouseover', function () { this.openPopup() });
L.marker([37.4316, -78.6569], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/virginia.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Virginia Electoral Votes 👍🏼 13</span>`).on('mouseover', function () { this.openPopup() });
L.marker([47.7511, -120.7401], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/Washington.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Washington Electoral Votes 👍🏼 12</span>`).on('mouseover', function () { this.openPopup() });
L.marker([38.5976, -80.4549], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/west-virginia.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">West Virginia Electoral Votes 👍🏼 5</span>`).on('mouseover', function () { this.openPopup() });

L.marker([43.7844, -88.7879], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/wisconsin.png', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Wisconsin Electoral Votes 👍🏼 10</span>`).on('mouseover', function () { this.openPopup() });
L.marker([43.0760, -107.2903], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/wyoming.jpeg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Wyoming Electoral Votes 👍🏼 3</span>`).on('mouseover', function () { this.openPopup() });

//New States
L.marker([14.2710, -170.1322], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/AmericanSomoa.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">American Samoa Electoral Votes 👍🏼 0</span>`).on('mouseover', function () { this.openPopup() });
L.marker([13.4443, 144.7937], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/guam.jpeg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Guam Electoral Votes 👍🏼 0</span>`).on('mouseover', function () { this.openPopup() });
L.marker([15.0979, 145.6739], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/northern-mariana-islands-.jpg', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">Northern Mariana Islands Electoral Votes 👍🏼 0</span>`).on('mouseover', function () { this.openPopup() });
L.marker([18.3358, -64.8963], { icon: L.icon({ iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icons/usvirginisland.png', iconSize: [38, 38], iconAnchor: [22, 50], popupAnchor: [-3, -50] }) }).addTo(map).bindPopup(`<span class="votes">U S Virgin Island Electoral Votes 👍🏼 0</span>`).on('mouseover', function () { this.openPopup() });





//UI FUNCTIONS
const stateSite = document.querySelector('.state-site')
const votePageURL = document.querySelector('.vote-page-url')


document.querySelector('.--state-trigger').addEventListener('click', (e) => {
  e.preventDefault()
  stateSite.style.transform = 'translateX(0)'
})
document.querySelector('.close-state').addEventListener('click', (e) => {
  e.preventDefault()
  stateSite.style.transform = 'translateX(100%)'
})

//Close URL
document.querySelector('.voter-page').addEventListener('click', (e) => {
  e.preventDefault()
  votePageURL.style.transform = 'translateX(0)'
})
document.querySelector('.close-url').addEventListener('click', (e) => {
  votePageURL.style.transform = 'translateX(100%)'
})





document.querySelectorAll('.vote-page-url a').forEach((voteUrl) => {
  voteUrl.setAttribute('target', '_blank')
})

document.querySelectorAll('.state-wrapper a').forEach((stateUrl) => {
  stateUrl.setAttribute('target', '_blank')
})


















  




  