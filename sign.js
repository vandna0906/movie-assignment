function add_location(e){
    let name=document.getElementById("name").value 
    let contact=document.getElementById("contact").value
    let email=document.getElementById("email").value
    let pass=document.getElementById("password").value
    console.log(name,contact,email,pass)

    if(name!= "" && contact!= "" && email!= "" && pass!= ""){
      let obj={
          name,contact,email,pass
      }  
      let data=localStorage.getItem("sign_data")

      if(data==null){
        data=[];
      }
      else{
        data=JSON.parse(data);
      }
     data.push(obj);
     localStorage.setItem("sign_data",JSON.stringify(data));

   }
    else{
        alert("fill the details")
    }



}