document.getElementById("contuct").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "flex";
    document.body.style.overflow = "hidden"; // Stop page scroll
});

document.querySelector(".closebtn").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
    document.body.style.overflow = "auto"; // Resume page scroll

});


// function for link opening in new tab

btns = document.querySelectorAll('#readmorbtn');

    for (btn of btns){
        btn.addEventListener("click", ()=>{
            const url='https://github.com/rohandey-00';
            window.open(url);
        });
    }


// track cursor and change the image..



document.querySelector(".distwo").addEventListener("click", () => {
    document.querySelector(".thirdLeftPic img").src = "./Assets/fruits.jpg"; 
});

document.querySelector(".disone").addEventListener("click", () => {
    document.querySelector(".thirdLeftPic img").src = "./Assets/pexels-darya-gryazeva-73722285-10111555.jpg"; 
});
document.querySelector(".disthree").addEventListener("click", () => {
    document.querySelector(".thirdLeftPic img").src = "./Assets/cake.jpg";  
});
