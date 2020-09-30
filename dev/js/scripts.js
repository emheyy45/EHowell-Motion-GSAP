//import * as Demo from './demo.js';

import {gsap} from "gsap";
import {squareTAnimation} from './squareT.js';
import {ballMAnimation} from './ballM.js';
import {textAnimation} from './text.js';


var mainTL = gsap.timeline({paused:true});

mainTL.add(squareTAnimation())
.add(ballMAnimation())
.add(textAnimation())
.play();

