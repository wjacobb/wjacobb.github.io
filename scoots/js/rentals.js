// Key/Legend
//name
//capacity
//part-reserve
//full-reserve
//part-walk
//full-walk
let text = '{"rentals":[' +
'{"name":"Honda Metro Scooter","capacity": "1","partreserve": "$20","fullreserve": "$30","partwalk": "$25","fullwalk": "$35"},' +
'{"name":"Honda Dio Scooter","capacity": "2","partreserve": "$30","fullreserve": "$40","partwalk": "$35","fullwalk": "$45"},' +
'{"name":"Honda PCX150 Scooter","capacity": "2","partreserve": "$40","fullreserve": "$50","partwalk": "$45","fullwalk": "$55"},' +
'{"name":"Honda Pioneer ATV","capacity": "4","partreserve": "$50","fullreserve": "$70","partwalk": "$60","fullwalk": "$80"},' +
'{"name":"Jeep Wrangler - 4 door with a/c","capacity": "5","partreserve": "$70","fullreserve": "$100","partwalk": "$80","fullwalk": "$125"},' +
'{"name":"Jeep Wrangler - 2 door","capacity": "4","partreserve": "$60","fullreserve": "$85","partwalk": "$70","fullwalk": "$90"}]}'
;

const obj = JSON.parse(text);

document.getElementById('name1').innerHTML = obj.rentals[0].name;
document.getElementById('capacity1').innerHTML = obj.rentals[0].capacity;
document.getElementById('partreserve1').innerHTML = obj.rentals[0].partreserve;
document.getElementById('fullreserve1').innerHTML = obj.rentals[0].fullreserve;
document.getElementById('partwalk1').innerHTML = obj.rentals[0].partwalk;
document.getElementById('fullwalk1').innerHTML = obj.rentals[0].fullwalk;

document.getElementById('name2').innerHTML = obj.rentals[1].name;
document.getElementById('capacity2').innerHTML = obj.rentals[1].capacity;
document.getElementById('partreserve2').innerHTML = obj.rentals[1].partreserve;
document.getElementById('fullreserve2').innerHTML = obj.rentals[1].fullreserve;
document.getElementById('partwalk2').innerHTML = obj.rentals[1].partwalk;
document.getElementById('fullwalk2').innerHTML = obj.rentals[1].fullwalk;

document.getElementById('name3').innerHTML = obj.rentals[2].name;
document.getElementById('capacity3').innerHTML = obj.rentals[2].capacity;
document.getElementById('partreserve3').innerHTML = obj.rentals[2].partreserve;
document.getElementById('fullreserve3').innerHTML = obj.rentals[2].fullreserve;
document.getElementById('partwalk3').innerHTML = obj.rentals[2].partwalk;
document.getElementById('fullwalk3').innerHTML = obj.rentals[2].fullwalk;

document.getElementById('name4').innerHTML = obj.rentals[3].name;
document.getElementById('capacity4').innerHTML = obj.rentals[3].capacity;
document.getElementById('partreserve4').innerHTML = obj.rentals[3].partreserve;
document.getElementById('fullreserve4').innerHTML = obj.rentals[3].fullreserve;
document.getElementById('partwalk4').innerHTML = obj.rentals[3].partwalk;
document.getElementById('fullwalk4').innerHTML = obj.rentals[3].fullwalk;

document.getElementById('name5').innerHTML = obj.rentals[4].name;
document.getElementById('capacity5').innerHTML = obj.rentals[4].capacity;
document.getElementById('partreserve5').innerHTML = obj.rentals[4].partreserve;
document.getElementById('fullreserve5').innerHTML = obj.rentals[4].fullreserve;
document.getElementById('partwalk5').innerHTML = obj.rentals[4].partwalk;
document.getElementById('fullwalk5').innerHTML = obj.rentals[4].fullwalk;

document.getElementById('name6').innerHTML = obj.rentals[5].name;
document.getElementById('capacity6').innerHTML = obj.rentals[5].capacity;
document.getElementById('partreserve6').innerHTML = obj.rentals[5].partreserve;
document.getElementById('fullreserve6').innerHTML = obj.rentals[5].fullreserve;
document.getElementById('partwalk6').innerHTML = obj.rentals[5].partwalk;
document.getElementById('fullwalk6').innerHTML = obj.rentals[5].fullwalk;