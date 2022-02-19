import React from "react";
import { Component } from "react";
import Zdog from "zdog";

class Shape extends Component {
	componentDidMount() {
		let isSpinning = true;
		// create illo
		let illo = new Zdog.Illustration({ // eslint-disable-line no-undef
			// set canvas with selector
			element: '.zdog-canvas',
			dragRotate: true,
			// stop rotation when dragging starts
			onDragStart: function() {
				isSpinning = false;
			},
		});

		// add circle
		new Zdog.Ellipse({ // eslint-disable-line no-undef
			addTo: illo,
			diameter: 60,
			stroke: 14,
			color: '#636',
		});

		// update & render
		illo.updateRenderGraph();

		function animate() {
			// rotate illo each frame
			illo.rotate.y += 0.03;
			if ( isSpinning ) {
				illo.rotate.y += 0.03;
			}
			illo.updateRenderGraph();
			// animate next frame
			requestAnimationFrame( animate );
		}
		// start animation
		animate();
	}
	render() {
		return (
			<div style={{display: 'inline'}} >
				<canvas style={{display: 'inline'}} className="zdog-canvas" width="80" height="80" ></canvas>
			</div>
		)
	}
}

export default Shape;