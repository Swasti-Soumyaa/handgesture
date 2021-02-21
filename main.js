prediction_1="";
prediction_2="";

Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:100
});

camera=document.getElementById("camera");
Webcam.attach(camera);

function takeSnapshot(){
    Webcam.snap(function(image){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+image+"'>";
    });
}

console.log(ml5.version);

classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/RFJIYzibY/model.json",modelLoaded);

function modelLoaded(){
console.log("modelLoaded!");
}

function speak(){
    synth=window.speechSynthesis;
    speakData1="The first prediction is"+prediction_1;
    speakData2="The second prediction is"+prediction_2;
    var utter_this=new SpeechSynthesisUtterance(speakData1+speakData2);
    synth.speak(utter_this);
}
