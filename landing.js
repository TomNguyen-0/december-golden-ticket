// const timeLine = gsap.timeline({defaults: {ease: 'power1.out'}});
// timeLine.to('.rocket', {transformOrigin: "right center", rotation: -30})
// timeLine.fromTo(".rocket", { xPercent: 40, y: 50}, {x: 100, y: -800, duration: 3, ease: "none" });
// timeLine.to('.intro', {y: "-100%", duration: 1}, "-=1");

// gsap.set("#turkey", {xPercent:-50, yPercent:-50, transformOrigin:"50% 50%"});
// gsap.to("#turkey", {duration: 5, motionPath:"#path"});


function move_santa(){
    gsap.from('.santa_sled2', {duration:6, ease: "back.inOut(1.7)", x:'-100vh'});
    gsap.to('.santa_sled2',{duration:10,ease: "elastic.inOut(1.20, .4)", x:'100vh', delay:12});
    gsap.to('.santa_sled2',{duration:1, opacity:0, delay:18});
}
// gsap.from('.santa_sled2', {duration:7, x:'-100vh'})
// gsap.to('.santa_sled2',{duration:2, x:'50%', delay:1})
// gsap.to('.santa_sled2',{duration:1, x:'100%', ease:'slow', delay:3})
// gsap.to('.santa_sled2',{duration:1, opacity:0, delay:4})

// gsap.to('.golden_ticket',{duration:1,opacity:1,delay:2.5})
// TweenMax.to('.golden_ticket',5,{rotation:1440, repeat:-1})

// https://greensock.com/docs/v3/Installation
// https://www.youtube.com/watch?v=m6PDUIF24v4


// CAN'T DO
// https://www.youtube.com/watch?v=BAFAtHe5Cwk
// https://www.youtube.com/watch?v=3FbYrkDzgd4
// https://www.youtube.com/watch?v=cFhIc30crWA
// http://www.clker.com/inc/svgedit/svg-editor.html