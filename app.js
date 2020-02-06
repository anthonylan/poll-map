let map = L.map('map').setView([39.0119, -98.4842], 5)

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>',
    maxZoom: 10,
  }).addTo(map);

 
//Geocoding
var geocodeService = L.esri.Geocoding.geocodeService();

// map.on('click', function (e) {
//   geocodeService.reverse().latlng(e.latlng).run(function (error, result) {
//     if (error) {
//       return;
//     }

//     L.marker(result.latlng).addTo(map).bindPopup(result.address.Match_addr).openPopup();
//   });
// });


  var locations = [
		[`<span class="votes">Albama Electoral Votes 👍🏼 9</span>`, 32.3182, -86.9023],
		[`<span class="votes">Alaska Electoral Votes 👍🏼 3</span>`, 64.2008, -149.4937],
    [`<span class="votes">Arizona Electoral Votes 👍🏼 11</span>`, 34.0489, -111.0937],
    [`<span class="votes">Arkanas Electoral Votes 👍🏼 6</span>`, 35.2010, -91.8318],
    [`<span class="votes">California Electoral Votes 👍🏼 55</span>`, 36.7783, -119.4179],
    [`<span class="votes">Colorado Electoral Votes 👍🏼 9</span>`, 39.5501, -105.7821],
    [`<span class="votes">Connecticut Electoral Votes 👍🏼 7</span>`, 41.6032, -73.0877],
    [`<span class="votes">Delaware Electoral Votes 👍🏼 3</span>`, 38.9108, -75.5277],
    [`<span class="votes">Washington DC Electoral Votes 👍🏼 3</span>`, 38.9072, -77.0369],
    [`<span class="votes">Florida Electoral Votes 👍🏼 29</span>`, 27.6648, -81.5158],
    [`<span class="votes">Georgia Electoral Votes 👍🏼 16</span>`, 32.1656, -82.9001],
    [`<span class="votes">Hawaii Electoral Votes 👍🏼 4</span>`, 19.8968, -155.5828],
    [`<span class="votes">Idaho Electoral Votes 👍🏼 4</span>`, 44.0682, -114.7420],
    [`<span class="votes">Illinois Electoral Votes 👍🏼 20</span>`, 40.6331, -89.3985],
    [`<span class="votes">Indiana Electoral Votes 👍🏼 11</span>`, 40.2672, -86.1349],
    [`<span class="votes">Iowa Electoral Votes 👍🏼 6</span>`, 41.8780, -93.0977],
    [`<span class="votes">Kansas Electoral Votes 👍🏼 6</span>`, 39.0119, -98.4842],
    [`<span class="votes">Kentucky Electoral Votes 👍🏼 8</span>`, 37.8393, -84.2700],
    [`<span class="votes">Louisiana Electoral Votes 👍🏼 8</span>`, 30.9843, -91.9623],
    [`<span class="votes">Maine Electoral Votes 👍🏼 4</span>`, 45.2538, -69.4455],
    [`<span class="votes">Maryland Electoral Votes 👍🏼 10</span>`, 39.0458, -76.6413],
    [`<span class="votes">Massachusetts Electoral Votes 👍🏼 11</span>`, 42.4072, -71.3824],
    [`<span class="votes">Michigan Electoral Votes 👍🏼 16</span>`, 44.3148, -85.6024],
    [`<span class="votes">Minnesota Electoral Votes 👍🏼 10</span>`, 46.7296, -94.6859],
    [`<span class="votes">Mississippi Electoral Votes 👍🏼 6</span>`, 32.3547, -89.3985],
    [`<span class="votes">Missouri Electoral Votes 👍🏼 10</span>`, 37.9643, -91.8318],
    [`<span class="votes">Montana Electoral Votes 👍🏼 3</span>`, 46.8797, -110.3626],
    [`<span class="votes">Nebraska Electoral Votes 👍🏼 5</span>`, 41.4925, -99.9018],
    [`<span class="votes">Nevada Electoral Votes 👍🏼 6</span>`, 38.8026, -116.4194],
    [`<span class="votes">New Hampshire Electoral Votes 👍🏼 4</span>`, 43.1939, -71.5724],
    [`<span class="votes">New Jersey Electoral Votes 👍🏼 14</span>`, 40.0583, -74.4057],
    [`<span class="votes">New Mexico Electoral Votes 👍🏼 5</span>`, 34.5199, -105.8701],
    [`<span class="votes">New York Electoral Votes 👍🏼 29</span>`, 40.7128, -74.0060],
    [`<span class="votes">North Carolina Electoral Votes 👍🏼 15</span>`, 35.7596, -79.0193],
    [`<span class="votes">North Dakota Electoral Votes 👍🏼 3</span>`, 47.5515, -101.0020],
    [`<span class="votes">Ohio Electoral Votes 👍🏼 18</span>`, 40.4173, -82.9071],
    [`<span class="votes">Oklahoma Electoral Votes 👍🏼 7</span>`, 35.0078, -97.0929],
    [`<span class="votes">Oregon Electoral Votes 👍🏼 7</span>`, 43.8041, -120.5542],
    [`<span class="votes">Pennsylvania Electoral Votes 👍🏼 20</span>`, 41.2033, -77.1945],
    [`<span class="votes">Puerto Rico Electoral Votes 👍🏼 0</span>`, 18.2208, -66.5901],
    [`<span class="votes">Rhode Island Electoral Votes 👍🏼 9</span>`, 41.5801, -71.4774],
    [`<span class="votes">South Carolina Electoral Votes 👍🏼 9</span>`, 33.8361, -81.1637],
    [`<span class="votes">South Dakota Electoral Votes 👍🏼 3</span>`, 43.9695, -99.9018],
    [`<span class="votes">Tennessee Electoral Votes 👍🏼 11</span>`, 35.5175, -86.5804],
    [`<span class="votes">Texas Electoral Votes 👍🏼 38</span>`, 31.9686, -99.9018],
    [`<span class="votes">Utah Electoral Votes 👍🏼 6</span>`, 39.3210, -111.0937],
    [`<span class="votes">Vermont Electoral Votes 👍🏼 3</span>`, 44.5588, -72.5778],
    [`<span class="votes">Virginia Electoral Votes 👍🏼 13</span>`, 37.4316, -78.6569],
    [`<span class="votes">Washington Electoral Votes 👍🏼 12</span>`, 47.7511, -120.7401],
    [`<span class="votes">West Virginia Electoral Votes 👍🏼 5</span>`, 38.5976, -80.4549],
    [`<span class="votes">Wisconsin Electoral Votes 👍🏼 10</span>`, 43.7844, -88.7879],
    [`<span class="votes">Wyoming Electoral Votes 👍🏼 3</span>`, 43.0760, -107.2903],
		];


    let iconCus = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/anthonylan/poll-map/master/icon.png',

      iconSize: [38, 38],
      iconAnchor: [22, 50],
      popupAnchor:  [-3, -76]
    })

    for (var i = 0; i < locations.length; i++) {
			marker = new L.marker([locations[i][1],locations[i][2]], {icon: iconCus})
				marker.bindPopup(locations[i][0])
      marker.addTo(map);
      marker.on('mouseover', function (e) {
            this.openPopup();
      });
      marker.on('mouseout', function (e) {
        this.closePopup();
      });

      

      marker.on('click', (e) => {
        geocodeService.reverse().latlng(e.latlng).run(function (error, result) {
          if (error) {
            return;
          }
          let votersRegUrl = document.querySelector('.vote-regist-url')
          let state = result.address.Region//.Match_addr

          switch (state) {
            case 'Alabama': votersRegUrl.href = 'https://www.sos.alabama.gov/alabama-votes/voter/register-to-vote';
              break;
            case 'Alaska': votersRegUrl.href = 'https://voterregistration.alaska.gov/';
              break;
            case 'Arizona': votersRegUrl.href = 'https://voterregistration.alaska.gov/';
              break;
              case 'Arkansas': votersRegUrl.href = 'https://www.sos.arkansas.gov/elections/voter-information/voter-registration-information';
              break;
              case 'California': votersRegUrl.href = 'https://www.sos.ca.gov/elections/voter-registration/';
              break;
              case 'Colorado': votersRegUrl.href = 'https://www.sos.state.co.us/pubs/elections/vote/VoterHomeMobile.htm';
              break;
              case 'Connecticut': votersRegUrl.href = 'https://www.sos.state.co.us/pubs/elections/vote/VoterHomeMobile.htm';
              break;
              case 'Delaware': votersRegUrl.href = 'https://www.sos.state.co.us/pubs/elections/vote/VoterHomeMobile.htm';
              break;
              case 'Washington DC': votersRegUrl.href = 'https://www.dcboe.org/FAQS/Voter-Registration';
              break;
              case 'Florida': votersRegUrl.href = 'https://dos.myflorida.com/elections/for-voters/voter-registration/register-to-vote-or-update-your-information/';
              break;
              case 'Georgia': votersRegUrl.href = 'https://sos.ga.gov/index.php/Elections/register_to_vote';
              break;
              case 'Hawaii': votersRegUrl.href = 'https://elections.hawaii.gov/voters/registration/';
              break;
              case 'Idaho': votersRegUrl.href = 'https://elections.hawaii.gov/voters/registration/';
              break;
              case 'Illinois': votersRegUrl.href = 'https://ova.elections.il.gov/';
              break;
              case 'Indiana': votersRegUrl.href = 'https://www.in.gov/sos/elections/2403.htm';
              break;
              case 'Iowa': votersRegUrl.href = 'https://sos.iowa.gov/elections/voterinformation/voterregistration.html';
              break;
              case 'Kansas': votersRegUrl.href = 'https://www.kdor.ks.gov/apps/voterreg/default.aspx';
              break;
              case 'Kentucky': votersRegUrl.href = 'https://vrsws.sos.ky.gov/ovrweb/';
              break;
              case 'Louisiana': votersRegUrl.href = 'https://www.sos.la.gov/ElectionsAndVoting/Pages/OnlineVoterRegistration.aspx';
              break; 
              case 'Maine': votersRegUrl.href = 'https://www.maine.gov/sos/cec/elec/voter-info/votreg.html';
              break;
              case 'Maryland': votersRegUrl.href = 'https://elections.maryland.gov/voter_registration/index.html';
              break;
              case 'Massachusetts': votersRegUrl.href = 'https://www.sec.state.ma.us/ovr/';
              break;
              case 'Michigan': votersRegUrl.href = 'https://mvic.sos.state.mi.us/RegisterVoter';
              break;
              case 'Minnesota': votersRegUrl.href = 'https://www.sos.state.mn.us/elections-voting/register-to-vote/';
              break;
              case 'Mississippi': votersRegUrl.href = 'https://www.sos.ms.gov/Elections-Voting/Pages/Voter-Registration-Information.aspx';
              break;
              case 'Missouri': votersRegUrl.href = 'https://www.sos.mo.gov/elections/goVoteMissouri/register';
              break;
              case 'Montana': votersRegUrl.href = 'https://sosmt.gov/elections/vote/';
              break;
              case 'Nebraska': votersRegUrl.href = 'https://www.nebraska.gov/apps-sos-voter-registration/';
              break;
              case 'Nevada': votersRegUrl.href = 'https://www.nvsos.gov/sosvoterservices/Registration/Step0.aspx';
              break;
              case 'New Hampshire': votersRegUrl.href = 'https://sos.nh.gov/HowRegVote.aspx';
              break;
              case 'New Jersey': votersRegUrl.href = 'https://nj.gov/state/elections/site-maintenance.shtml';
              break;
              case 'New Mexico': votersRegUrl.href = 'https://www.sos.state.nm.us/voting-and-elections/voter-information/voter-registration-information/';
              break;
              case 'New York': votersRegUrl.href = 'https://www.elections.ny.gov/votingregister.html';
              break;
              case 'North Carolina': votersRegUrl.href = 'https://www.ncsbe.gov/voters/registering-to-vote';
              break;
              case 'North Dakota': votersRegUrl.href = 'https://vip.sos.nd.gov/PortalListDetails.aspx?ptlhPKID=79&ptlPKID=7';
              break;
              case 'Ohio': votersRegUrl.href = 'https://olvr.ohiosos.gov/';
              break;
              case 'Oklahoma': votersRegUrl.href = 'https://www.ok.gov/elections/Online_Voter_Registration.html';
              break;
              case 'Oregon': votersRegUrl.href = 'https://sos.oregon.gov/voting/Pages/registration.aspx?lang=en';
              break;
              case 'Pennsylvania': votersRegUrl.href = 'https://www.pavoterservices.pa.gov/Pages/VoterRegistrationApplication.aspx';
              break;
              case 'Puerto Rico': votersRegUrl.href = 'https://www.eac.gov/voters/puerto-rico-elections-office';
              break;
              case 'Rhode Island': votersRegUrl.href = 'http://www.elections.ri.gov/voting/registration.php';
              break;
              case 'South Carolina': votersRegUrl.href = 'https://info.scvotes.sc.gov/eng/ovr/start.aspx';
              break;
              case 'South Dakota': votersRegUrl.href = 'https://sdsos.gov/elections-voting/voting/register-to-vote/default.aspx';
              break;
              case 'Tennessee': votersRegUrl.href = 'https://sos.tn.gov/products/elections/register-vote';
              break;
              case 'Texas': votersRegUrl.href = 'https://www.votetexas.gov/register-to-vote/';
              break;
              case 'Utah': votersRegUrl.href = 'https://secure.utah.gov/voterreg/index.html;jsessionid=ce3fcba4661811f5adba3e64d93d';
              break;
              case 'Vermont': votersRegUrl.href = 'https://www.sec.state.vt.us/elections/voters/registration.aspx';
              break;
              case 'Virginia': votersRegUrl.href = 'https://vote.elections.virginia.gov/VoterInformation';
              break;
              case 'Washington': votersRegUrl.href = 'https://www.sos.wa.gov/elections/register.aspx';
              break;
              case 'West Virginia': votersRegUrl.href = 'https://ovr.sos.wv.gov/Register/Landing';
              break;
              case 'Wisconsin': votersRegUrl.href = 'https://myvote.wi.gov/en-US/VoterRegistration';
              break;
              case 'Wyoming': votersRegUrl.href = 'https://soswy.state.wy.us/Forms/Elections/General/VoterRegistrationForm.pdf';
              break;
              
            default: votersRegUrl.href = 'http://www.elections.ri.gov/voting/registration.php';
              
          }
          
          votersRegUrl.querySelector('span').innerHTML = state
          console.log(state);
          
          
        });
        

      
      })
}
    

//Search
 let results = L.layerGroup().addTo(map);
 let searchControl = L.esri.Geocoding.geosearch().addTo(map);
searchControl.on("results", function(data) {
    for (var i = data.results.length - 1; i >= 0; i--) {
        results.addLayer(L.marker(data.results[i].latlng));
    }
});


let stateUrlEl = document.querySelector('.state-site')



//Hide State
document.querySelector('.state-trigger').addEventListener('click', () => {
  if (stateUrlEl.style.transform == 'translateY(100%)') {
    stateUrlEl.style.transform = 'translateY(0%)'
  } else {
    stateUrlEl.style.transform = 'translateY(100%)'
  }
})
  



//Slide States
  var button = document.querySelector('#slide');
  button.onclick = function () {
      var container = document.querySelector('#container');
      sideScroll(container,'right',15,200,10);
  };
  
  var back = document.querySelector('#slideBack');
  back.onclick = function () {
      var container = document.querySelector('#container');
      sideScroll(container,'left',15,200,10);
  };
  
  function sideScroll(element,direction,speed,distance,step){
      scrollAmount = 0;
      var slideTimer = setInterval(function(){
          if(direction == 'left'){
              element.scrollLeft -= step;
          } else {
              element.scrollLeft += step;
          }
          scrollAmount += step;
          if(scrollAmount >= distance){
              window.clearInterval(slideTimer);
          }
      }, speed);
  }



//Set attribute on State Site
document.querySelectorAll('.state-site a').forEach((ss) => {
  ss.setAttribute('target', '_blank')
})




// // center of the map
// let center = [41.8719, 12.5674];

// // Create the map
// let map = L.map('map').setView(center, 10);



// //QUERY=======================
// let tiles = L.esri.basemapLayer("Streets").addTo(map);

// // create the geocoding control and add it to the map
// let searchControl = L.esri.Geocoding.geosearch().addTo(map);

// // create an empty layer group to store the results and add it to the map
// let results = L.layerGroup().addTo(map);
// ///=====================



// // Set up the OSM layer
// L.tileLayer(
//   'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: 'Data © <a href="http://osm.org/copyright">OpenStreetMap</a>',
//     maxZoom: 18
//   }).addTo(map);


// // Initialise the FeatureGroup to store editable layers
// var editableLayers = new L.FeatureGroup();
// map.addLayer(editableLayers);

// var options = {
//   position: 'topleft',
//   draw: {
//     polygon: {
//       allowIntersection: false, // Restricts shapes to simple polygons
//       drawError: {
//         color: '#e1e100', // Color the shape will turn when intersects
//         message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
//       },
//       shapeOptions: {
//         color: '#97009c'
//       }
//     },
//     polyline: {
//     	shapeOptions: {
//         color: '#f357a1',
//         weight: 10
//           }
//     },
//     // disable toolbar item by setting it to false
//     polyline: false,
//     circle: false, // Turns off this drawing tool
//     polygon: true,
//     marker: false,
//     rectangle: false,
//     circlemarker: false
//   },
//   edit: {
//     featureGroup: editableLayers, //REQUIRED!!
//       remove: false,
//       edit: false
//   }
// };

// // Initialise the draw control and pass it the FeatureGroup of editable layers
// var drawControl = new L.Control.Draw(options);
// map.addControl(drawControl);

// var editableLayers = new L.FeatureGroup();
// map.addLayer(editableLayers);


// //ASSIGN SOME VARIABLES
// let drawBar = document.querySelector('.dr-map')
// let searchBar = document.querySelector('.sr-map')

// let cancelDrawBtn = document.querySelector('.cancel')



// // //DRAW POLYGON ON MAP
// // map.on('draw:created', function(e) {
// //     var type = e.layerType;
// //     var layer = e.layer;


// //     let cords = layer.getLatLngs()

// //     cords.forEach((co) => {    
  
// //     L.esri.Geocoding.reverseGeocode().latlng(co[0]).run(function (error, result, response) {
            
// //         const locationEl = document.querySelector('.location')
// //         const city = result.address.City

// //          if (error) {
// //             locationEl.innerHTML = ''
// //          } else if (isNaN(result.address.Match_addr)) {
// //             locationEl.innerHTML = result.address.Match_addr
// //          } else {
// //             locationEl.innerHTML = city
// //          }

            
// //     });
      
// //         map.setView(co[0], 11)
// //     })
 

// //     editableLayers.addLayer(layer);
// //     const polygonControl = document.querySelector('.leaflet-draw-draw-polygon')


// //     //Wait for call
// //     function clearLayerOnCall() {
// //         editableLayers.removeLayer(layer)
// //         polygonControl.style.display = 'block'
// //     }
    


// //     //LISTEN FOR DRAWING
// //     // map.on('draw:drawstop', (e) => {

// //     //     polygonControl.style.display = 'none'
// //     //       cancelDrawBtn.style.opacity = '1'

// //     //       cancelDrawBtn.addEventListener('click', (e) => {
// //     //           clearLayerOnCall()
// //     //           cancelDrawBtn.style.opacity = '0'
// //     //       })
            
// //     // })
// // });




// //SEARCH LOCATION USING REVERSE GEOCODING
// // listen for the results event and add every result to the map
// searchControl.on("results", function(data) {
//     results.clearLayers();
//     for (var i = data.results.length - 1; i >= 0; i--) {
//         results.addLayer(L.marker(data.results[i].latlng));
//         // console.log(data.results[i].text);
//         const locationEl = document.querySelector('.location')
//         const addr = data.results[i].text
//         locationEl.innerHTML = addr
        
//     }
// });







// //UI FUNCTIONS
// // let searchIcon = document.querySelector('.geocoder-control-input')
// // let drawIcon =  document.querySelector('.leaflet-draw-toolbar .leaflet-draw-draw-polygon')
// // let notify = document.querySelector('.notify')
// // let heplerNote01 = document.querySelector('.helper_01')
// // let heplerNote02 = document.querySelector('.helper_02')


// // document.querySelector('.sr-map').addEventListener('click', () => {
// //     searchIcon.style.opacity = '1'
// //     drawIcon.style.display = 'none'
// //     searchBar.style.color = '#216a95'
// //     drawBar.style.color = '#555'

// //     notify.style.transform = 'translateY(200%)'

    
// // })


// // document.querySelector('.dr-map').addEventListener('click', () => {
  

// //     if (cancelDrawBtn.style.opacity == 0) {
// //         searchIcon.style.opacity = '0'
// //         drawIcon.style.display = 'block'
// //         searchBar.style.color = '#555'
// //         drawBar.style.color = '#216a95'
    
// //         notify.style.transform = 'translateY(0%)'
// //         heplerNote01.style.display = 'block'
// //     }
   
// // })




// // drawIcon.addEventListener('click', () => {

// //     notify.style.transform = 'translateY(0%)'
// //     heplerNote01.style.display = 'none'
// //     heplerNote02.style.display = 'block'

// //     setTimeout(() => {
// //         notify.style.transform = 'translateY(200%)'
// //     }, 10000)
    
// // })

// // drawIcon.style.display = 'none'



//SHOPIUFY
//theme.liquid
