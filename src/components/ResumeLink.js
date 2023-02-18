import React from 'react'
import { Link } from 'gatsby'

export default function ResumeLink() {
	return (
		<li>
		<h3>Meta</h3>
		<ul>
			<li>
				<Link to="/resume">Résumé</Link>
			</li>
		</ul>
	</li>
	)
}