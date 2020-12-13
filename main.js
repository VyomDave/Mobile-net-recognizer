Webcam.set({
    width:350 , 
    hieght:300 , 
    image_format: "png" ,
    png_quality : 90  
});

Webcam.attach("#camera")

function take_photo(){

    Webcam.snap(
     function(selfie){
         document.getElementById("result").innerHTML=`<img src=${selfie} id='captured_image'>`
     }
        );
}

console.log("ml5" , ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/3lnHXhBLZ/model.json" , modelLoaded)

function modelLoaded(){
    console.log("model has been loaded")
}

function speak(){
    var speech = window.speechSynthesis;
    var speak_data1 = "The first prediction is "+prediction1;
    var speak_data2 = "The second prediction is "+prediction2;
    var speak_this = new SpeechSynthesisUtterance (speak_data1+speak_data2);
    speech.speak(speak_this);
}

function predict(){
    img = document.getElementById('captured_image'); 
    classifier.classify(img, gotResult);
}

function gotResult(error,results){
    if (error){
        console.log(error)
    }
     else {
        console.log(results);
        prediction1 = results[0].label
        prediction2 = results[1].label
        console.log(prediction1 , prediction2);
        speak()
        document.getElementById("gesture1").innerHTML=prediction1
        document.getElementById("gesture2").innerHTML=prediction2
        if (prediction1 == "Thumbs up"){
            document.getElementById("hgesture1").innerHTML="&#128077;"
        }
        if (prediction1 == "Ok"){
            document.getElementById("hgesture1").innerHTML="&#128076;"
        }
        if (prediction1 == "Hi"){
            document.getElementById("hgesture").innerHTML="&#128075;"
        }
        if (prediction1 == "Thumbs Down"){
            document.getElementById("hgesture1").innerHTML="&#128078;"
        }
        if (prediction1 == "Victory"){
            document.getElementById("hgesture1").innerHTML="&#xe011"
        }
        if (prediction1 == "Call"){
            document.getElementById("hgesture1").innerHTML="&#x1f919;"
        }
        if(prediction1 == "Yo"){
            document.getElementById("hgesture1").innerHTML="&#129304;"
        }
        




        if (prediction2 == "Thumbs up"){
            document.getElementById("hgesture2").innerHTML="&#128077;"
        }
        if (prediction2 == "Ok"){
            document.getElementById("hgesture2").innerHTML="&#128076;"
        }
        if (prediction2 == "Hi"){
            document.getElementById("hgesture2").innerHTML="&#128075;"
        }
        if (prediction2 == "Thumbs Down"){
            document.getElementById("hgesture2").innerHTML="&#128078;"
        }
        if (prediction2 == "Victory"){
            document.getElementById("hgesture2").innerHTML="&#xe011"
        }
        if (prediction2 == "Call"){
            document.getElementById("hgesture2").innerHTML="&#x1f919;"
        }
        if(prediction2 == "Yo"){
            document.getElementById("hgesture2").innerHTML="&#129304;"
        }
    }
}