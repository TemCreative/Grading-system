function grade(){
    var song = new Audio("audio/clapping.mp3")
    var laugh = new Audio("audio/laugh.mp3")
    var isubu = new Audio("audio/isubu.mp3")
    var fail = new Audio("audio/neverMakeIt.mp3")
    var vGood = new Audio("audio/church.mp3")

    var myScore = score.value
    if(myScore >= 70 && myScore<= 100){
      // alert("Excelent")
      board.innerText="A-Excelent"
      board.style.color="Green"
      song.play()
    }
    else if(myScore >=60 && myScore<69){
      board.innerText="B-Very-Good"
      board.style.color="purple"
      vGood.play()
    }
    else if(myScore >=50 && myScore<60){
      board.innerText="C-Credit"
      board.style.color="yellow"
      laugh.play()
    }
    else if(myScore >=45 && myScore<50){
      board.innerText="D-Average"
      board.style.color="brown"
      isubu.play()
      
    }
    else if(myScore >=35 && myScore<45){
      board.innerText="E-Poor"
      board.style.color="tomato"
      isubu.play()
    }
    else if(myScore >=0 && myScore<35){
      board.innerText="F-Fail"
      board.style.color="Red"
      fail.play()
      
    }
    else{
      board.innerText="INVALID"
      board.style.color="coral"
    }
  }