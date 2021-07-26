config = {
    width:400,
    location: true,
    projection: "airy",
    canvasheight:250, //my height canvas to custom
    addcontent:true,
    datapath: "../data/",
    form: false,         // Display form for interactive settings. Needs a div with
                        // id="celestial-form", created automatically if not present
    location: false,    // Display location settings. Deprecated, use formFields below
    formFields: {"location": true,  // Set visiblity for each group of fields with the respective id
                 "general": true,  
                 "stars": true,  
                 "dsos": true,  
                 "constellations": true,  
                 "lines": true,  
                 "other": true,  
                 "download": true},  
    advanced: true,     // Display fewer form fields if false 
    //adaptable: false,    // Sizes are increased with higher zoom-levels
    //interactive: false,
    planets:true,
    stars: {
      show: true,    // Show stars
      limit: 6,      // Show only stars brighter than limit magnitude
      colors: false,  // Show stars in spectral colors, if not use "color"
      style: { fill: "#ffffff", opacity: 1 }, // Default style for stars
      names: false,  // Show star names (Bayer, Flamsteed, Variable star, Gliese, whichever applies first)
      proper: false, // Show proper name (if present)
      desig: false,  // Show all names, including Draper and Hipparcos
      namelimit: 2.5,  // Show only names for stars brighter than namelimit
      namestyle: { fill: "#ddddbb", font: "7px Georgia, Times, 'Times Roman', serif", align: "left", baseline: "top" },
      size: 4,       // Maximum size (radius) of star circle in pixels
      //data: 'stars.14.json' // Data source for stellar data
      data: 'stars.6.json' // Alternative deeper data source for stellar data
    },
    planets: {  //Show planet locations, if date-time is set
      show: true,
      // List of all objects to show
      which: ["sol", "mer", "ven", "ter", "lun", "mar", "jup", "sat", "ura", "nep"],
      // Font styles for planetary symbols
      symbols: {  // Character and color for each symbol in 'which' above (simple circle: \u25cf), optional size override for Sun & Moon
        "sol": {symbol: "\u2609", letter:"Su", fill: "#ffff00", size:""},
        "mer": {symbol: "\u263f", letter:"Me", fill: "#cccccc"},
        "ven": {symbol: "\u2640", letter:"V", fill: "#eeeecc"},
        "ter": {symbol: "\u2295", letter:"T", fill: "#00ccff"},
        "lun": {symbol: "\u25cf", letter:"L", fill: "#ffffff", size:""}, // overridden by generated crecent, except letter & size
        "mar": {symbol: "\u2642", letter:"Ma", fill: "#ff6600"},
        "cer": {symbol: "\u26b3", letter:"C", fill: "#cccccc"},
        "ves": {symbol: "\u26b6", letter:"Ma", fill: "#cccccc"},
        "jup": {symbol: "\u2643", letter:"J", fill: "#ffaa33"},
        "sat": {symbol: "\u2644", letter:"Sa", fill: "#ffdd66"},
        "ura": {symbol: "\u2645", letter:"U", fill: "#66ccff"},
        "nep": {symbol: "\u2646", letter:"N", fill: "#6666ff"},
        "plu": {symbol: "\u2647", letter:"P", fill: "#aaaaaa"},
        "eri": {symbol: "\u26aa", letter:"E", fill: "#eeeeee"}
      },
      symbolStyle: { fill: "#00ccff", font: "bold 17px 'Lucida Sans Unicode', Consolas, sans-serif", 
               align: "center", baseline: "middle" },
      symbolType: "disk",  // Type of planet symbol: 'symbol' graphic planet sign, 'disk' filled circle scaled by magnitude
                             // 'letter': 1 or 2 letters S Me V L Ma J S U N     
      names: false,          // Show name in nameType language next to symbol
      nameStyle: { fill: "#00ccff", font: "14px 'Lucida Sans Unicode', Consolas, sans-serif", align: "right", baseline: "top" },
      namesType: "desig"     // Language of planet name (see list below of language codes available for planets), 
                             // or desig = 3-letter designation
    },
    constellations: {
      names: false,      // Show constellation names 
      namesType: "iau", // Type of name Latin (iau, default), 3 letter designation (desig) or other language (see list below)
      nameStyle: { fill:"#cccc99", align: "center", baseline: "middle", 
                   font: ["11px Helvetica, Arial, sans-serif",  // Style for constellations
                          "10px Helvetica, Arial, sans-serif",  // Different fonts for diff.
                          "9px Helvetica, Arial, sans-serif"]},// ranked constellations
      lines: true,   // Show constellation lines, style below
      lineStyle: { stroke: "#cccccc", width: 1, opacity: 0.6 }, 
      bounds: false, // Show constellation boundaries, style below
      boundStyle: { stroke: "#cccc00", width: 0.5, opacity: 0.8, dash: [2, 4] }
    },  
    dsos: {
      show: true,    // Show Deep Space Objects 
      limit: 6,      // Show only DSOs brighter than limit magnitude
      colors: false,  // // Show DSOs in symbol colors if true, use style setting below if false
      style: { fill: "#cccccc", stroke: "#cccccc", width: 2, opacity: 1 }, // Default style for dsos
      names: false,   // Show DSO names
      namesType: "name",  // Type of DSO ('desig' or language) name shown
                          // (see list below for languages codes available for dsos)
      nameStyle: { fill: "#cccccc", font: "11px Helvetica, Arial, serif", 
                   align: "left", baseline: "top" }, // Style for DSO names
      nameLimit: 6,  // Show only names for DSOs brighter than namelimit
      size: null,    // Optional seperate scale size for DSOs, null = stars.size
      exponent: 1.4, // Scale exponent for DSO size, larger = more non-linear
      data: 'dsos.bright.json', // Data source for DSOs, 
                                // opt. number indicates limit magnitude
     
    },
    lines: {
      graticule: { show: false, stroke: "#cccccc", width: 0.6, opacity: 0.8 },    // Show graticule lines
      equatorial: { show: false, stroke: "#aaaaaa", width: 1.3, opacity: 0.7 },   // Show equatorial plane
      ecliptic: { show: false, stroke: "#66cc66", width: 1.3, opacity: 0.7 },     // Show ecliptic plane
      galactic: { show: false, stroke: "#cc6666", width: 1.3, opacity: 0.7 },     // Show galactic plane
      supergalactic: { show: false, stroke: "#cc66cc", width: 1.3, opacity: 0.7 } // Show supergalactic plane
    }
    //geopos:{ lo37.7749,122.4194}
  };
  Celestial.display(config);
  mapboxgl.accessToken = 'pk.eyJ1IjoidHJ1bmdzaW4iLCJhIjoiT2huZERJQSJ9.wVEOXlXtNWVgx-AmgYDY8A';
  var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  types: 'country,region,place,postcode,locality,neighborhood'
  });
   
  geocoder.addTo('#geocoder');
  // Add geocoder result to container.
  geocoder.on('result', function (e) {
    console.log(e.result.geometry);
    // Get the geocoder results container.
    var results = document.getElementById('result');
    var yourplace = document.getElementById('yourlocation');
    yourplace.innerText=e.result.place_name;
    Celestial.skyview({"location" : [e.result.geometry.coordinates[1],e.result.geometry.coordinates[0]]});
  });
   
  // Clear results container when search is cleared.
  geocoder.on('clear', function () {
    //results.innerText = '';
  });
  $("#gyourdate").change(function(){
    $("#yourdate").text($("#gyourdate").val());
  });
  $("#gyourtime").change(function(){
    $("#yourtime").text($("#gyourtime").val());
  });
  $("#gyourtext").change(function(){
    $("#contentlocaltime").text($("#gyourtext").val());
  });
  $(".BLACK theme-color-container").click(function(){
    alert("sdsd");
  });
