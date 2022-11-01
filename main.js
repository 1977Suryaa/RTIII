previese_results=""

function setup() {
  canvas = createCanvas(300,300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classified=ml5.imageClassifier("Mobilenet",modelLoaded)
}
function draw(){
  image(video,0,0,300,300)
   classified.classify(video,gotResult)
}
function modelLoaded(){
  console.log("hello my eriend I am ml5.js")
}
function gotResult(error,results){
  if(error){
    console.log("some thing is wrong please try again !!!")

  }
  else{
    if(results[0].confidence>0.5 && previese_results!=results[0].lable){
      document.getElementById("hhh").innerHTML="object : "+results[0].label
      document.getElementById("ttt").innerHTML="Accuracy : "+results[0].confidence
      var sinth= window.speechSynthesis()
      var spp=results[0].label
      var uttrr=new SpeechSynthesisUtterance(results[0].label)
      sinth.speak(uttrr)

    }
  }
}



