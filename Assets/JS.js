
//make 10 columns each representing a time
    //the first 3 will be the past hours, the next will be the current hour, and the last 6 will be the next hours
        //use moment to update the time 
//allow user to input text to the right of time
// store the message with click of button to the right of text
var currentHour= moment().format("h A");
var minus1hour = moment().subtract(1,'hour').format("h A");
var minus2hour = moment().subtract(2,'hour').format("h A");
var minus3hour = moment().subtract(3,'hour').format("h A");
var plus1hour = moment().add(1,'hour').format("h A");
var plus2hour = moment().add(2,'hour').format("h A");
var plus3hour = moment().add(3,'hour').format("h A");
var plus4hour = moment().add(4,'hour').format("h A");
var plus5hour = moment().add(5,'hour').format("h A");
var plus6hour = moment().add(6,'hour').format("h A");
var currentDate = moment().format("MMM Do, YYYY" );
var save1 = $("#saveOne")
var save1 = $("#saveTwo")
var save1 = $("#saveThree")
var save1 = $("#saveFour")
var save1 = $("#saveFive")
var save1 = $("#saveSix")
var save1 = $("#saveSeven")
var save1 = $("#saveEight")
var save1 = $("#saveNine")
var save1 = $("#saveTen")


$("#currentDay").text(currentDate);
$("#currentHour").text(currentHour);
$("#minusOne").text(minus1hour);
$("#minusTwo").text(minus2hour);
$("#minusThree").text(minus3hour);
$("#plusOne").text(plus1hour);
$("#plusTwo").text(plus2hour);
$("#plusThree").text(plus3hour);
$("#plusFour").text(plus4hour);
$("#plusFive").text(plus5hour);
$("#plusSix").text(plus6hour);

function save1Func (){
   var text1HTML = $("#text1").innerHTML
    localStorage.setItem('saveText1', 'text1HTML')
    text1HTML = localStorage.getItem('saveText1')


}
function save2Func (){
    var text2HTML = $("#text2").innerHTML
     localStorage.setItem('saveText2', 'text2HTML')
     text1HTML = localStorage.getItem('saveText2')
 
 
 }
function save3Func (){
    var text3HTML = $("#text3").innerHTML
     localStorage.setItem('saveText3', 'text3HTML')
     text1HTML = localStorage.getItem('saveText3')
 
 
 }
function save4Func (){
    var text4HTML = $("#text4").innerHTML
     localStorage.setItem('saveText4', 'text4HTML')
     text1HTML = localStorage.getItem('saveText4')
 
 
 }
function save5Func (){
    var text5HTML = $("#text5").innerHTML
     localStorage.setItem('saveText5', 'text5HTML')
     text1HTML = localStorage.getItem('saveText5')
 
 
 }
function save6Func (){
    var text6HTML = $("#text6").innerHTML
     localStorage.setItem('saveText6', 'text6HTML')
     text1HTML = localStorage.getItem('saveText6')
 
 
 }
function save7Func (){
    var text7HTML = $("#text7").innerHTML
     localStorage.setItem('saveText7', 'text7HTML')
     text1HTML = localStorage.getItem('saveText7')
 
 
 }
function save8Func (){
    var text8HTML = $("#text8").innerHTML
     localStorage.setItem('saveText8', 'text8HTML')
     text1HTML = localStorage.getItem('saveText8')
 
 
 }
function save9Func (){
    var text9HTML = $("#text9").innerHTML
     localStorage.setItem('saveText9', 'text9HTML')
     text1HTML = localStorage.getItem('saveText9')
 
 
 }
function save10Func (){
    var text10HTML = $("#text10").innerHTML
     localStorage.setItem('saveText10', 'text10HTML')
     text1HTML = localStorage.getItem('saveText10')
 
 
 }
   
 
save1.on('click', save1Func() )
save2.on('click', save2Func() )
save3.on('click', save3Func() )
save4.on('click', save4Func() )
save5.on('click', save5Func() )
save6.on('click', save6Func() )
save7.on('click', save7Func() )
save8.on('click', save8Func() )
save9.on('click', save9Func() )
save10.on('click', save10Func() )




