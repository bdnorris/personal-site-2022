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
			diameter: 50,
			stroke: 12,
			color: '#F38666',
		});

		// update & render
		illo.updateRenderGraph();

		function animate() {
			// rotate illo each frame
			// illo.rotate.y += 0.03;	
			if ( isSpinning ) {
				illo.rotate.y += 0.015;
				illo.rotate.x += 0.01;
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
				<canvas style={{display: 'inline', position: 'relative', top: '0.05em'}} className="zdog-canvas" width="72" height="64" ></canvas>
			</div>
		)
	}
}

export default Shape;