const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

let text = '{"towns":[' +
'{"name":"Soda Springs","photo": "images/preston.jpg","motto": "Historic Oregon Trail Oasis. The Soda is on Us.","yearFounded": "1858","currentPopulation": "2985","averageRainfall": "15.75","events": ["February 29: Geyser Song Day","May 1-6: Days of May Celebration","October 15-16: Octoberfest"]},' +
'{"name": "Springfield","photo": "springfield.jpg","motto": "Where everyone is lifted.","yearFounded": 1826,"currentPopulation": 17852,"averageRainfall": 17,"events": [  "January 8: Spring into Winter",  "April 10-20: Celebration of Life",  "July 31-Aug 15: Dog Days of Summer Festival"]},' +
'{"name": "Fish Haven","photo": "fishhaven.jpg","motto": "This is Fish Heaven.","yearFounded": 1864,"currentPopulation": 501,"averageRainfall": 14.20,"events": [  "April 1: How Big Was That Fish Day",  "May 15-30: Rush the Creek Days",  "July 24: Bear Lake Blunder Run",  "December 12: Light the Tree"]},' +
'{"name": "Franklin","photo": "franklin.jpg","motto": "Where you will grow!","yearFounded": 1788,"currentPopulation": 30458,"averageRainfall": 21,"events": [  "March 4: March to the Drum of Donuts",  "September 5 - 11: Founder Days",  "December 1 - 26: Christmas in the Heart"]},' +
'{"name": "Greenville","photo": "greenville.jpg","motto": "Green is our way of life.","yearFounded": 1805,"currentPopulation": 33458,"averageRainfall": 25,"events": [  "February 10-12: Greenbration",  "May 8 - 18: Greenville Founder Days",  "June 20: Verde and Valiant Day",  "November 15-16: Greensome Gathering"]},' +
'{"name": "Placerton","photo": "placerton.jpg","motto": "Positive Placement in Placerton.","yearFounded": 1946,"currentPopulation": 512,"averageRainfall": 39,"events": [  "July 4: A Blaze of Glory",  "October 20: Fall through Fall"]},' +
'{"name": "Preston","photo": "preston.jpg","motto": "Home of Napoleon Dynamite.","yearFounded": 1866,"currentPopulation": 5204,"averageRainfall": 16.65,"events": [  "March 29: Work Creek Revival",  "July 8-12: Napoleon Dynamite Festival",  "November 2-4: Freedom Days"]}]}'
;

const obj = JSON.parse(text);

//Name - name
//Motto - motto
//Year founded - yearFounded
//Population - currentPopulation
//Annual Rain fall - averageRainfall
//Img -photo
document.getElementById('name1').innerHTML = obj.towns[0].name;
document.getElementById('motto1').innerHTML = obj.towns[0].motto;
document.getElementById('year1').innerHTML = obj.towns[0].yearFounded;
document.getElementById('population1').innerHTML = obj.towns[0].currentPopulation;
document.getElementById('rain1').innerHTML = obj.towns[0].averageRainfall;

document.getElementById('name2').innerHTML = obj.towns[1].name;
document.getElementById('motto2').innerHTML = obj.towns[1].motto;
document.getElementById('year2').innerHTML = obj.towns[1].yearFounded;
document.getElementById('population2').innerHTML = obj.towns[1].currentPopulation;
document.getElementById('rain2').innerHTML = obj.towns[1].averageRainfall;
// document.getElementById('photo2').innerHTML = obj.towns[1].photo;

document.getElementById('name3').innerHTML = obj.towns[2].name;
document.getElementById('motto3').innerHTML = obj.towns[2].motto;
document.getElementById('year3').innerHTML = obj.towns[2].yearFounded;
document.getElementById('population3').innerHTML = obj.towns[2].currentPopulation;
document.getElementById('rain3').innerHTML = obj.towns[2].averageRainfall;
// document.getElementById('photo3').innerHTML = obj.towns[2].photo;

document.getElementById('name4').innerHTML = obj.towns[3].name;
document.getElementById('motto4').innerHTML = obj.towns[3].motto;
document.getElementById('year4').innerHTML = obj.towns[3].yearFounded;
document.getElementById('population4').innerHTML = obj.towns[3].currentPopulation;
document.getElementById('rain4').innerHTML = obj.towns[3].averageRainfall;
// document.getElementById('photo4').innerHTML = obj.towns[3].photo;

document.getElementById('name5').innerHTML = obj.towns[4].name;
document.getElementById('motto5').innerHTML = obj.towns[4].motto;
document.getElementById('year5').innerHTML = obj.towns[4].yearFounded;
document.getElementById('population5').innerHTML = obj.towns[4].currentPopulation;
document.getElementById('rain5').innerHTML = obj.towns[4].averageRainfall;
// document.getElementById('photo5').innerHTML = obj.towns[4].photo;

document.getElementById('name6').innerHTML = obj.towns[5].name;
document.getElementById('motto6').innerHTML = obj.towns[5].motto;
document.getElementById('year6').innerHTML = obj.towns[5].yearFounded;
document.getElementById('population6').innerHTML = obj.towns[5].currentPopulation;
document.getElementById('rain6').innerHTML = obj.towns[5].averageRainfall;
// document.getElementById('photo6').innerHTML = obj.towns[5].photo;

document.getElementById('name7').innerHTML = obj.towns[6].name;
document.getElementById('motto7').innerHTML = obj.towns[6].motto;
document.getElementById('year7').innerHTML = obj.towns[6].yearFounded;
document.getElementById('population7').innerHTML = obj.towns[6].currentPopulation;
document.getElementById('rain7').innerHTML = obj.towns[6].averageRainfall;
// document.getElementById('photo7').innerHTML = obj.towns[6].photo;

//Despite my best efforts I was unable to get the loop to work. So I did it the old fashioned way.

// for (let i = 0; i < towns.length; i++ ){
//   let card = document.createElement('section');
//   let h2 = document.createElement('h2');
//   h2.textContent = towns[i].name;
//   card.appendChild(h2);
//   document.querySelector('div.cards').appendChild(card);}