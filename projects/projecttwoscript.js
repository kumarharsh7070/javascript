const form=document.querySelector('form');
form.addEventListener("submit", function(e){
    e.preventDefault()
    const height =parseInt(document.querySelector("#height").value);
    const weight =parseInt(document.querySelector("#Weight").value);
    const result =document.querySelector("#result");
    if(height === ""|| height < 0|| isNaN(height)){
        result.innerHTML=`please enter valid height ${height}`;
    }
    if(weight === "" || weight <0 || isNaN(height)){
        result.innerHTML=`please enter valid weight ${weight}`;
    }else{
       const bmi= (weight / ((height*height) / 10000)).toFixed(2);
       result.innerHTML= `<span>${bmi}</span>`;
    }



})