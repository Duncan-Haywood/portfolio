import UIfx from 'uifx'
import waterDropAudio from '../soundFiles/water-drop-click-production.mp3'
import Howl from 'howler'
import chimesAudio from '../soundFiles/deep-chimes.mp3'
/*
* Audio functions
*/


export function playClickFxAudio(props) {
		let soundFx = new props.UIfx(props.soundFxAudio);
		soundFx.play(0.25)
	}
playClickFxAudio.defaultProps = {
	soundFxAudio: waterDropAudio, UIfx: UIfx 
} // change sound played here


export function playBackgroundSound( props ) {
	let backgroundSound = new props.Howl({
    src: props.audioBackgroundFile,
    autoplay: true,
    loop: true,
    volume: 0.03
    })
    backgroundSound.play()
}
playBackgroundSound.defaultProps = {
	audioBackgroundFile: chimesAudio, Howl: Howl
} // change sound played here

