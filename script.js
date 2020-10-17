(function() {
    "use strict"; //range tööreziim vigade leidmiseks
    
    //clock

    document.addEventListener("DOMContentLoaded", function() {
        
        var c = document.getElementById("clock");
       
        //setTimeout(updateClock, 2000);
        setInterval(updateClock, 1000); //uuendab kella iga 1000 ms järel
        
        function updateClock() {
            
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            var aeg="AM";
            if (h < 10) {
                h = "0" + h;
            }
            if (h>12) {
                h= h-12;
                aeg="PM";
                if (h < 10) {
                h = "0" + h;
                
                }
                
            }

            if (m < 10) {
                m = "0" + m;
            }

            if (s < 10) {
                s = "0" + s;
            }

            c.innerHTML = h + ":" + m + ":" + s+" "+aeg;
            
        };
        
    });
    
    // forms
    
    document.getElementById("form").addEventListener("submit", estimateDelivery);
    
    var e = document.getElementById("delivery");
    e.innerHTML = "0,00 &euro;";
    
    function estimateDelivery(event) {
        event.preventDefault();
        
        var linn = document.getElementById("linn");
        var fname = document.getElementById("fname");
        var lname = document.getElementById("lname");
        var r1 = document.getElementById("r1");
        var r2 = document.getElementById("r2");
        
        
        if ((!(r1.checked)) && (!(r2.checked))) {
            
            
                alert("Vali raadionupp!");
            
            
        }
 
        if (fname.value ==="") {
            alert("Sisesta eesnimi");
        } else {
            if (fname.type != Text) {
                alert("Sisesta nimi tähtedega!");
            }
        }
         if (lname.value ==="") {
            alert("Sisesta perenimi");
        } else {
            if (lname.type != Text) {
                alert("Perenime sisestamisel kasuta tähti!");
            }
        }
       
        
        if (linn.value === "") {
            
            alert("Palun valige linn nimekirjast");
            
            linn.focus();
             e.innerHTML = "x,xx &euro;";
            return;
            
            
        } else {
            if (v1.checked) {
                var kink=5;
            } else {var kink=0;}
            
            if (v2.checked) {
                var tarne=1;
            } else {var tarne=0;}
            
            if (linn.value=="tln") {
                var linn=0;
            }
            if (linn.value==="trt") {
                var linn=2.5;
            }
            if (linn.value==="nrv") {
                var linn=2.5;
            }
            if (linn.value==="prn") {
                var linn=3;
            }
            
            
            e.innerHTML = "Tarne hind on: "+(kink+linn+tarne)+" &euro;";
        }        
        
        console.log("Tarne hind on arvutatud");
    }
    
})();

// map

var mapAPIKey = "ApG45OpASdC94J_5xl-tC371B4cqsUnmy9Gm-TUSFjuZewP3pGYDat8JIeNptnwy";

var map;

function GetMap() {
    
    "use strict";

    var centerPoint = new Microsoft.Maps.Location(
            59.42223, 24.80149
        );

    map = new Microsoft.Maps.Map("#map", {
        credentials: mapAPIKey,
        center: centerPoint,
        zoom: 6,
        mapTypeId: Microsoft.Maps.MapTypeId.road,
        disablePanning: true
    });
    
    var pushpin = new Microsoft.Maps.Pushpin(centerPoint, {
            title: 'Haridus-ja noorteamet',
            //subTitle: 'töökoht',
            //text: 'Harno'
        });
    var ylikool = new Microsoft.Maps.Location(
        58.38542, 26.72522
    );
    var pushpin2 = new Microsoft.Maps.Pushpin(ylikool, {
       title: 'Tartu Ülikool',
        
    });
   
 
    map.entities.push(pushpin);
    map.entities.push(pushpin2);


}

// https://dev.virtualearth.net/REST/v1/Locations?q=1000 Vin Scully Ave, Los Angeles,CA&key=YOUR_KEY_HERE

