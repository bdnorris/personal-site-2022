import React from "react";
// import { graphql } from 'gatsby'
import Layout from "./main.js";

const ProjectPage = (data) => {
	console.log(data);
	return (
		<Layout>
			<h1>{data.title}</h1>
		</Layout>
	)
}

export default ProjectPage