
function myFunction() {
    var val1 = document.getElementById("value1").value;
    if(val1===""){
      document.getElementById("value1").value = 0;
      val1 = 0;
    }
    var val2 = document.getElementById("value2").value;
    if(val2===""){
      document.getElementById("value2").value = 1;
      val2 = 1;
    }
    


    var x = null;
    x = document.getElementById("mySelect").value;
    var bill  = 0;
    var bill1 = 0;
    var bill2 = 0;
    var bill3 = 0;
    var bill4 = 0;
    var bill5 = 0;
    var bill6 = 0;

    var t1 = 0;
    var t2 = 0;
    var t3 = 0;
    var t4 = 0;
    var t5 = 0;
    var t6 = 0;

    if(x === "DPDC"){
      t1 = 5.26;
      t2 = 7.20;
      t3 = 7.59;
      t4 = 8.02;
      t5 = 12.67;
      t6 = 14.61;
    }
    else if( x === "NESCO"){
      t1 = 5.26;
      t2 = 7.20;
      t3 = 7.59;
      t4 = 8.02;
      t5 = 12.67;
      t6 = 14.61;
    }
    else if(x === "BPDB"){
      t1 = 5.26;
      t2 = 7.20;
      t3 = 7.59;
      t4 = 8.02;
      t5 = 12.67;
      t6 = 14.61;
    }

    else if(x === "BREB"){
      t1 = 5.26;
      t2 = 7.20;
      t3 = 7.59;
      t4 = 8.02;
      t5 = 12.67;
      t6 = 14.61;
    }
    else if(x === "Select"){

      document.getElementById("demo").innerHTML = "Error in Bill Calculation";
      document.getElementById("demo").style.color = "tomato";
      document.getElementById("demo1").innerHTML = ("");
      document.getElementById("demo2").innerHTML = ("");
      document.getElementById("demo3").innerHTML = ("");
      document.getElementById("demo4").innerHTML = ("");
      document.getElementById("demo5").innerHTML = ("");
      document.getElementById("demo6").innerHTML = ("");
      alert("Please Select A Distributor");
    }
    if( x != "Select"){
      document.getElementById("demo").innerHTML = (x + " Electricity Bill <br />");
      document.getElementById("demo").style.color = "green";

      if(val1>600){
        bill6 = t6*(val1-600);
        document.getElementById("demo1").innerHTML = ("Tariff( >600): " + (val1-600) + " x " + t6 + " = " + bill6.toFixed(2) + " taka"); 
        val1= 600;
      }
      else
        document.getElementById("demo1").innerHTML="";
      if(val1>400){
        bill5 = t5*(val1-400);
        document.getElementById("demo2").innerHTML = ("Tariff(401-600): " + (val1-400) + " x " + t5 + " = " + bill5.toFixed(2) + " taka");

        val1= 400;
      }
      else
        document.getElementById("demo2").innerHTML="";
      if(val1>300){
        bill4 = t4*(val1-300);
        document.getElementById("demo3").innerHTML = ("Tariff(301-400): " + (val1-300) + " x " + t4 + " = " + bill4.toFixed(2) + " taka");

        val1= 300;
      }
      else
        document.getElementById("demo3").innerHTML="";
      if(val1>200){
        bill3 = t3*(val1-200);
        document.getElementById("demo4").innerHTML = ("Tariff(201-300): " + (val1-200) + " x " + t3 + " = " + bill3.toFixed(2) + " taka");

        val1= 200;
      }
      else
        document.getElementById("demo4").innerHTML="";
      if(val1>75){
        bill2 = t2*(val1-75);
        document.getElementById("demo5").innerHTML = ("Tariff(76-200): " + (val1-75) + " x " + t2 + " = " + bill2.toFixed(2) + " taka");

        val1= 75;
      }
      else
        document.getElementById("demo5").innerHTML="";
      if(val1<76){

        bill1 = t1*val1;
        document.getElementById("demo6").innerHTML = ("Tariff(0-75): " + val1 + " x " + t1 + " = " + bill1.toFixed(2) + " taka");
        document.getElementById("demo6").style="";
      }
      else
      {
        //document.getElementById("demo6").innerHTML = "";
        document.getElementById("demo").innerHTML = "Wrong key pressed. Please enter numbers only.";
        document.getElementById("demo").style.color = "tomato";
      }
    }


    bill = bill1 + bill2 + bill3 + bill4 + bill5 + bill6;
    var ansD1 = document.getElementById("answer1");
    var ansD2 = document.getElementById("answer2");
    var ansD3 = document.getElementById("answer3");
    var ansD4 = document.getElementById("answer4");
    ansD1.value = bill.toFixed(2);
    ansD2.value = ((bill+(val2*42))*5/100).toFixed(2);
    ansD3.value = (val2*42).toFixed(2);
    ansD4.value = (bill + (bill+(val2*42))*5/100 + val2*42).toFixed(2);
    //document.getElementById("demo2").innerHTML = ("Exiting switch block");
  } 