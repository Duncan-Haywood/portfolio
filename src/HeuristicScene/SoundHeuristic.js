import UIfx from 'uifx'
import waterDropAudio from '../soundFiles/water-drop-click-production.mp3'
import Howl from 'howler'
import React from 'react'
import chimesAudio from '../soundFiles/deep-chimes.mp3'
/*
* Audio functions
*/


export function playWaterDropFX(props) {
		waterDrop = new props.UIfx(props.waterDropAudio);
		waterDrop.play(0.25)
	}
playWaterDropFX.defaultProps = {
	waterDropAudio: waterDropAudio, UIfx: UIfx
}


export function BackgroundSound( props ) {
	let backgroundSound = new props.Howl({
    src: props.audioFile,
    autoplay: true,
    loop: true,
    volume: 0.03
    })
    backgroundSounds.play()
}
BackgroundSound.defaultProps = {
	audioFile: chimesAudio, Howl: Howl
}
