var crsr= document.querySelector("#cursor")
var blur= document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x- 250 +"px" //250 is actually half of blur size
    blur.style.top = dets.y- 250 +"px"
})



gsap.to("#nav", {
    backgroundColor:"#fff",
    height:"110px",
    color:"#000",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11% ",
        scrub: 1,
    }
})
gsap.to("#nav h4", {
    color:"#000",
    duration:"0.5",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11% ",
        scrub: 1,
    }
})

gsap.to("#main",{
    backgroundColor:"#fff",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end: "top -70%",
        scrub:2,
    }
})