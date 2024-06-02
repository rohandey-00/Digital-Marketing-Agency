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

