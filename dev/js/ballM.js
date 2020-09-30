import {gsap} from "gsap";

export function ballMAnimation(){
    var tl = gsap.timeline();
        tl.to(".ballM", {duration: 2, x: 200, rotation: 90, y: -150});
    return tl;
}