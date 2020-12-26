Webcam.set({
  width:280,
  height:300,
  image_format: "png",
  png_quality:90,
  constraints:{
      facingMode:"environment"
  }
});
 
Webcam.attach("#camera")

function click(){

   Webcam.snap(function (pic){
     document.getElementById("snap").innerHTML=`<img src=${pic} id='snapshot'>`
   })
}

console.log("ml5version" , ml5.version)

classifier=ml5.imageClassifier("MobileNet" , modelloaded)

function modelloaded(){
  console.log("Model has been loaded")
}

function predict(){

   img = document.getElementById("snapshot")
   classifier.classify(img , getresults)
}

function getresults(error,results){
  if (error){
    console.log(error)
  }
  else{
    console.log(results)

  }
}