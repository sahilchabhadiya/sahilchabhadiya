const scroll = new LocomotiveScroll({ //2 cdn add and this four line code add output will be smoothness screen
    el: document.querySelector('#main'),
    smooth: true
});

    var sahil=document.querySelector("#elem-container");
    var fixed=document.querySelector("#fixed-img");

    sahil.addEventListener("mouseenter",function(){
        fixed.style.display="block";
    });
    sahil.addEventListener("mouseleave",function(){
        fixed.style.display="none";
    });

    //${} :- literal templates

    var elems = document.querySelectorAll(".elem")

    elems.forEach(function(e){
        e.addEventListener("mouseenter",function(){
            var image=e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
