import {gsap} from "gsap";

export function squareTAnimation(){
    var tl = gsap.timeline();
        tl.to(".squareT", {duration: 2, x: 200, rotation: 90, y: -150});
    return tl;
}