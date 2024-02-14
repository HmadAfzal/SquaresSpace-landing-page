let t=gsap.timeline()

t.from(".logo,.nav,.login",{
    y:-50,
    duration:0.5,
    delay:1,
    opacity:0,
    stagger:0.3
})

t.from(".center",{
    y:200,
    duration:0.5,
    opacity:0,
    stagger:0.2
})
t.from(".img1,.img2,.img3,.img4",{
    scale:0,
    duration:0.5,
    opacity:0,
    stagger:0.2
})


