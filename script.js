 let data = document.getElementById("mybtn");

 data.addEventListener("click",function(e){
    //e.preventDefault();
    console.log("data validation");
    const NAME_REQUIRED="Please enter the name";
    const ROLNO_REQUIRED="Please enter the rollno";
    let name=document.myForm.name.value;
    console.log(name);
    let rol=document.myForm.roll.value;
    console.log(rol);
    console.log(name.length);
    console.log(rol.length);
    if(name.trim()==="" && rol.trim()===""){
          document.getElementById("sname").innerHTML="Name should not be empty";
          document.getElementById("rolno").innerHTML="RollNo should not be empty";
          return false; 
        console.log("Name should not be empty");
    }else if(name.length <= 6){
        document.getElementById("sname").innerHTML="Name should be atleast 6 character long";
        document.getElementById("rolno").innerHTML="";
        return false; 
        console.log("Name should be atleast 6 character long");
    }else if(rol.length <= 6){
        document.getElementById("sname").innerHTML="";
        document.getElementById("rolno").innerHTML="RollNo must be atleast 6 digits long";
        console.log("RollNo must be atleast 6 digits long");
        return false; 
    }else if(isNaN(rol)){
        document.getElementById("sname").innerHTML="";
        document.getElementById("rolno").innerHTML="Roll No must be in numbers";
        console.log("Roll No must be in numbers");
        return false; 
    }else{
        // document.getElementById("sname").innerHTML="";
        // document.getElementById("rolno").innerHTML="";
        console.log("Success");
        return true; 
    }
});
// data.click();
