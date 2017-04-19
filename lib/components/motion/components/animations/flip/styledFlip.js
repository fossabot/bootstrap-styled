'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeFlip = makeFlip;
exports.makeFlipX = makeFlipX;
exports.makeFlipY = makeFlipY;

var _styledComponents = require('styled-components');

var flip = void 0;
var flipX = void 0;
var flipY = void 0;

function makeFlip() {
  if (!flip) {
    flip = (0, _styledComponents.keyframes)(['from {transform: perspective(450px) rotate3d(0, 1, 0, -360deg);animation-timing-function: ease-out;}40% {transform: perspective(450px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);animation-timing-function: ease-out;}50% {transform: perspective(450px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170px);animation-timing-function: ease-in;}80% {transform: perspective(450px) scale3d(.90, .90, .90);animation-timing-function: ease-in;}to {transform: perspective(450px);animation-timing-function: ease-in;}']);
  }
  return flip;
}

function makeFlipX() {
  if (!flipX) {
    flipX = (0, _styledComponents.keyframes)(['from {transform: perspective(400px) rotate3d(1, 0, 0, 90deg);animation-timing-function: ease-in;opacity: 0;}40% {transform: perspective(400px) rotate3d(1, 0, 0, -20deg);animation-timing-function: ease-in;}60% {transform: perspective(400px) rotate3d(1, 0, 0, 10deg);opacity: 1;}80% {transform: perspective(400px) rotate3d(1, 0, 0, -5deg);}to {transform: perspective(400px);}']);
  }
  return flipX;
}

function makeFlipY() {
  if (!flipY) {
    flipY = (0, _styledComponents.keyframes)(['from {transform: perspective(400px) rotate3d(0, 1, 0, 90deg);animation-timing-function: ease-in;opacity: 0;}40% {transform: perspective(400px) rotate3d(0, 1, 0, -20deg);animation-timing-function: ease-in;}60% {transform: perspective(400px) rotate3d(0, 1, 0, 10deg);opacity: 1;}80% {transform: perspective(400px) rotate3d(0, 1, 0, -5deg);}to {transform: perspective(400px);}']);
  }
  return flipY;
}