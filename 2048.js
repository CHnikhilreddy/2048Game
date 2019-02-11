  loaded()
  function loaded(){
          var id1 = getId()
          var id2 = ""
          while(true){
            id2 = getId()
            if (id1!=id2) {
              break;
            }
          }
        for (var i = 0; i <= 3; i++) {
          for (var j = 0; j <= 3; j++) {
            document.getElementById(i+""+j).innerHTML = 0;
          }
        }
        document.getElementById(id1).innerHTML = get2or4()
        document.getElementById(id1).style.backgroundColor = getColor(parseInt(document.getElementById(id1).innerHTML));
        document.getElementById(id2).innerHTML = get2or4()
        document.getElementById(id2).style.backgroundColor = getColor(parseInt(document.getElementById(id2).innerHTML));

      }

         function get2or4(){
          var num = Math.floor(Math.random()*2)
          return num === 0 ? 2 : 4 ;
         }

         function getId()
          {
           var id1 = Math.floor(Math.random()*4)
           var id2 = Math.floor(Math.random()*4)
           var id3 = id1+""+id2
           return id3;
          }

    function left(){
      for (var i = 0; i <= 3; i++) {
        for (var j = 0; j <= 2; j++) {
          if(document.getElementById(i+""+j).innerHTML != 0){
          for (var k = j+1; k <= 3; k++) {
            if (document.getElementById(i+""+k).innerHTML != 0){
            if(document.getElementById(i+""+k).innerHTML === document.getElementById(i+""+j).innerHTML){
               document.getElementById(i+""+j).innerHTML = parseInt(document.getElementById(i+""+k).innerHTML) + parseInt(document.getElementById(i+""+j).innerHTML);
               document.getElementById(i+""+j).style.backgroundColor = getColor(parseInt(document.getElementById(i+""+j).innerHTML));
               document.getElementById(i+""+k).innerHTML = 0
               document.getElementById(i+""+k).style.backgroundColor = getColor(parseInt(document.getElementById(i+""+k).innerHTML));
               }
               break;
            }
          }
       }
      }
      for (var i = 0; i <= 3; i++) {
        for (var j = 0; j <= 2; j++) {
          if(document.getElementById(i+""+j).innerHTML== 0){
          for (var k = j+1; k <= 3; k++) {
            if(document.getElementById(i+""+k).innerHTML!=0){
               document.getElementById(i+""+j).innerHTML = document.getElementById(i+""+k).innerHTML;
               document.getElementById(i+""+j).style.backgroundColor = getColor(parseInt(document.getElementById(i+""+j).innerHTML));
               document.getElementById(i+""+k).innerHTML = 0
               document.getElementById(i+""+k).style.backgroundColor = getColor(parseInt(document.getElementById(i+""+k).innerHTML));
               break;
             }
            }
          }
       }
      }
    }
    newelement();
  }

    function up(){
      for (var i = 0; i <= 3; i++) {
        for (var j = 0; j <= 2; j++) {
          if(document.getElementById(j+""+i).innerHTML != 0){
          for (var k = j+1; k <= 3; k++) {
            if (document.getElementById(k+""+i).innerHTML != 0){
            if(document.getElementById(k+""+i).innerHTML === document.getElementById(j+""+i).innerHTML){
               document.getElementById(j+""+i).innerHTML = parseInt(document.getElementById(k+""+i).innerHTML) + parseInt(document.getElementById(j+""+i).innerHTML);
               document.getElementById(j+""+i).style.backgroundColor = getColor(parseInt(document.getElementById(j+""+i).innerHTML));
               document.getElementById(k+""+i).innerHTML = 0
               document.getElementById(k+""+i).style.backgroundColor = getColor(parseInt(document.getElementById(k+""+i).innerHTML));
              }
            break;
            }
            }
          }
       }
      }
      for (var i = 0; i <= 3; i++) {
        for (var j = 0; j <= 2; j++) {
          if(document.getElementById(j+""+i).innerHTML== 0){
          for (var k = j+1; k <= 3; k++) {
            if(document.getElementById(k+""+i).innerHTML!=0){
               document.getElementById(j+""+i).innerHTML = document.getElementById(k+""+i).innerHTML;
               document.getElementById(j+""+i).style.backgroundColor = getColor(parseInt(document.getElementById(j+""+i).innerHTML));
               document.getElementById(k+""+i).innerHTML = 0
               document.getElementById(k+""+i).style.backgroundColor = getColor(parseInt(document.getElementById(k+""+i).innerHTML));
               break;
             }
            }
          }
       }
      }
      newelement();
    }

    function right(){
      for (var i = 0; i <= 3; i++) {
        for (var j = 3; j >= 1; j--) {
          if(document.getElementById(i+""+j).innerHTML != 0){
          for (var k = j-1; k >= 0; k--) {
            if (document.getElementById(i+""+k).innerHTML != 0){
            if(document.getElementById(i+""+k).innerHTML === document.getElementById(i+""+j).innerHTML){
               document.getElementById(i+""+j).innerHTML = parseInt(document.getElementById(i+""+k).innerHTML) + parseInt(document.getElementById(i+""+j).innerHTML);
               document.getElementById(i+""+j).style.backgroundColor = getColor(parseInt(document.getElementById(i+""+j).innerHTML));
               document.getElementById(i+""+k).innerHTML = 0
               document.getElementById(i+""+k).style.backgroundColor = getColor(parseInt(document.getElementById(i+""+k).innerHTML));
             }
             break;
            }
          }
       }
      }
      for (var i = 0; i <= 3; i++) {
        for (var j = 3; j >= 1; j--) {
          if(document.getElementById(i+""+j).innerHTML== 0){
          for (var k = j-1; k >= 0; k--) {
            if(document.getElementById(i+""+k).innerHTML!=0){
               document.getElementById(i+""+j).innerHTML = document.getElementById(i+""+k).innerHTML;
               document.getElementById(i+""+j).style.backgroundColor = getColor(parseInt(document.getElementById(i+""+j).innerHTML));
               document.getElementById(i+""+k).innerHTML = 0
               document.getElementById(i+""+k).style.backgroundColor = getColor(parseInt(document.getElementById(i+""+k).innerHTML));
               break;
             }
            }
          }
       }
      }
    }
    newelement();
  }

    function down(){
      for (var i = 0; i <= 3; i++) {
        for (var j = 3; j >= 1; j--) {
          if(document.getElementById(j+""+i).innerHTML != 0){
          for (var k = j-1; k >= 0; k--) {
            if (document.getElementById(k+""+i).innerHTML != 0) {
            if(document.getElementById(k+""+i).innerHTML === document.getElementById(j+""+i).innerHTML){
               document.getElementById(j+""+i).innerHTML = parseInt(document.getElementById(k+""+i).innerHTML) + parseInt(document.getElementById(j+""+i).innerHTML);
               document.getElementById(j+""+i).style.backgroundColor = getColor(parseInt(document.getElementById(j+""+i).innerHTML));
               document.getElementById(k+""+i).innerHTML = 0
               document.getElementById(k+""+i).style.backgroundColor = getColor(parseInt(document.getElementById(k+""+i).innerHTML));
              }
              break;
             }
            }
          }
       }
      }
      for (var i = 0; i <= 3; i++) {
        for (var j = 3; j >= 1; j--) {
          if(document.getElementById(j+""+i).innerHTML== 0){
          for (var k = j-1; k >= 0; k--) {
            if(document.getElementById(k+""+i).innerHTML!=0){
               document.getElementById(j+""+i).innerHTML = document.getElementById(k+""+i).innerHTML;
               document.getElementById(j+""+i).style.backgroundColor = getColor(parseInt(document.getElementById(j+""+i).innerHTML));
               document.getElementById(k+""+i).innerHTML = 0
               document.getElementById(k+""+i).style.backgroundColor = getColor(parseInt(document.getElementById(k+""+i).innerHTML));
               break;
             }
            }
          }
       }
      }
      newelement();
    }

  function getColor(val)
  {
    var color = "#ffffff";
    switch(val) {
      case 2:   color = "#F6CED8"; break;
      case 4:   color = "#F7BE81"; break;
      case 8:   color = "#F3F781"; break;
      case 16:  color = "#BEF781"; break;
      case 32:  color = "#81F7D8"; break;
      case 64:  color = "#58D3F7"; break;
      case 128: color = "#FA58F4"; break;
      case 256: color = "#A901DB"; break;
      case 512: color = "#01DF3A"; break;
      case 1024:  color = "#D7DF01"; break;
      case 2048:  color = "#D7DF01"; break;
      default:  color = "#ffffff";
    }
    return color;
  }

  function newelement(){
    var id1 = getId()
    var id2 = ""

    while(true){
      id2 = getId()
      if (id1!=id2) {
          if(document.getElementById(id1).innerHTML == 0 && document.getElementById(id2).innerHTML){
            break;
          }
      }
    }

    document.getElementById(id1).innerHTML = get2or4()
    document.getElementById(id1).style.backgroundColor = getColor(parseInt(document.getElementById(id1).innerHTML));
    document.getElementById(id2).innerHTML = get2or4()
    document.getElementById(id2).style.backgroundColor = getColor(parseInt(document.getElementById(id2).innerHTML));

  }

    document.onkeydown = function(e) {
    e.preventDefault();//to prevent scroll of screen
    switch (e.keyCode) {
      case 37:
        left();
        break;
      case 38:
        up();
        break;
      case 39:
        right();
        break;
      case 40:
        down();
        break;
    }
  };
