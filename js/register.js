function registerForm(){
    var userName = document.getElementById("username").value;
    document.getElementById("tbusername").innerHTML = userName;

    var firstName = document.getElementById("firstname").value;
    document.getElementById("tbfirstname").innerHTML = firstName;

    var lastName = document.getElementById("lastname").value;
    document.getElementById("tblastname").innerHTML = lastName;
    
    var email = document.getElementById("email").value;
    document.getElementById("tbemail").innerHTML = email;

    var DOB = document.getElementById("dob").value;
    document.getElementById("tbdob").innerHTML = DOB; 

    if(document.getElementById("male").checked){
        var gm=document.getElementById("male").value;
         document.getElementById("tbgender").innerHTML = gm;
     }
     if(document.getElementById("female").checked){
         var gm=document.getElementById("female").value;
          document.getElementById("tbgender").innerHTML = gm;
      }
 
}