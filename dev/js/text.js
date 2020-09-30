import {gsap} from "gsap";

export function textAnimation(){
    var tl = gsap.timeline();
        tl.to(".text", {duration: 2, x: 250, y: 150});
    return tl;
}