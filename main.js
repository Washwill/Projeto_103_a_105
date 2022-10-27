Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
var camera = document.getElementById("camera");
Webcam.attach('#camera');


function takeSnapshot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="foto" src="'+data_uri+'"/>';
});
}
var classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5CWJYyE4w/model.json',modelLoded);
https://teachablemachine.withgoogle.com/models/5CWJYyE4w/model.json

function modelLoded(){
    console.log("Modelo Carregado");
}


function check(){
    img = document.getElementById("foto");
    classifier.classify(img, gotResult);
}


function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("resultObjectName").innerHTML = results[0].label;
        document.getElementById("resultObjectAccuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}