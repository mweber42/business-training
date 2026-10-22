const E=require('../assets/eu261.js'), a=require('assert');
const CDG=[49.0097,2.5479], JFK=[40.6413,-73.7781], LIS=[38.7742,-9.1342], HEL=[60.3172,24.9633], MAD=[40.4719,-3.5626], TFS=[28.0445,-16.5725], BCN=[41.2974,2.0833];
a.ok(Math.abs(E.distanceKm(CDG,JFK)-5837)<30);
// short delay
a.equal(E.assess({fromCountry:'FR',toCountry:'ES',km:1050,event:'delay',arrivalDelayH:3.2,cause:'technical'}).amount,250);
a.equal(E.assess({fromCountry:'FR',toCountry:'ES',km:1050,event:'delay',arrivalDelayH:2.9}).amount,0);
// intra-EU > 3500 (Paris -> Réunion ~9300 km) = 400
a.equal(E.assess({fromCountry:'FR',toCountry:'RE',km:9300,event:'delay',arrivalDelayH:5}).amount,400);
// long haul 3-4h delay = 300
a.equal(E.assess({fromCountry:'FR',toCountry:'US',km:5837,event:'delay',arrivalDelayH:3.5}).amount,300);
a.equal(E.assess({fromCountry:'FR',toCountry:'US',km:5837,event:'delay',arrivalDelayH:4.5}).amount,600);
// inbound non-EU carrier -> none
a.equal(E.assess({fromCountry:'US',toCountry:'FR',km:5837,euCarrier:'no',event:'delay',arrivalDelayH:5}).scope,'none');
a.equal(E.assess({fromCountry:'US',toCountry:'FR',km:5837,euCarrier:'yes',event:'delay',arrivalDelayH:5}).amount,600);
// UK
a.equal(E.assess({fromCountry:'GB',toCountry:'US',km:5500,euCarrier:'no',event:'delay',arrivalDelayH:5}).scope,'uk');
// cancellation
a.equal(E.assess({fromCountry:'FR',toCountry:'ES',km:1050,event:'cancel',noticeDays:'14+'}).amount,0);
a.equal(E.assess({fromCountry:'FR',toCountry:'ES',km:1050,event:'cancel',noticeDays:'<7',reroute:{earlierDepH:0,laterArrH:1.5}}).amount,0);
a.equal(E.assess({fromCountry:'FR',toCountry:'ES',km:1050,event:'cancel',noticeDays:'<7',reroute:{earlierDepH:0,laterArrH:1.9}}).amount,0);
a.equal(E.assess({fromCountry:'FR',toCountry:'ES',km:1050,event:'cancel',noticeDays:'<7',reroute:{earlierDepH:0,laterArrH:2}}).amount,125);
a.equal(E.assess({fromCountry:'FR',toCountry:'ES',km:1050,event:'cancel',noticeDays:'<7',reroute:{earlierDepH:0,laterArrH:5}}).amount,250);
a.equal(E.assess({fromCountry:'FR',toCountry:'ES',km:1050,event:'cancel',noticeDays:'<7',reroute:null}).amount,250);
a.equal(E.assess({fromCountry:'FR',toCountry:'ES',km:1050,event:'delay',arrivalDelayH:4,cause:'weather'}).eligible,'maybe');
console.log('eu261 ok');
