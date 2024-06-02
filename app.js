document.getElementById("contuct").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
});

document.querySelector(".closebtn").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});


// function for link opening in new tab

btns = document.querySelectorAll('#readmorbtn');

    for (btn of btns){
        btn.addEventListener("click", ()=>{
            const url='https://www.fylehq.com/';
            window.open(url);
        });
    }


// track cursor and change the image..



document.querySelector(".distwo").addEventListener("click", () => {
    document.querySelector(".thirdLeftPic img").src = "./Assets/image.png"; 
});

document.querySelector(".disone").addEventListener("click", () => {
    document.querySelector(".thirdLeftPic img").src = "./Assets/hand.jpg"; 
});
document.querySelector(".disthree").addEventListener("click", () => {
    document.querySelector(".thirdLeftPic img").src = "./Assets/unique.jpg";  
});
