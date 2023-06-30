//https://teachablemachine.withgoogle.com/models/Jrcf_CKEF/
Webcam.set({
    width:350,
    height:300,
    image_format:'jpg',
    jpg_quality:90

});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src=" '+data_uri+' ">';
    });
}

console.log('ml5 verison:',ml5.worship);
//ml5.js provides a pre-trained model which detects the images from a video OR webcam live view.
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Jrcf_CKEF/model.json',modelLoaded);
//imageClassifier is a predefined function of ml5.js that is used to trigger the ml5.js image classification function.
function modelLoaded(){
    console.log("Model loaded");
    
}