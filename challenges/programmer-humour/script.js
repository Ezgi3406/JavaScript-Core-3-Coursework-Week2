
// function humor(){
     const img= document.getElementById("img");
     
    
    

    
    fetch(`https://xkcd.now.sh/?comic=latest`)
     .then((response) => response.json())
    .then((data) => {
        img.src=data.img;
     
      console.log(data)
    })
    .catch((err) => console.log(err));

// }
  
