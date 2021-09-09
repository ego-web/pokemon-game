import React from 'react';

export const Header = ({ title, descr }) => {
	return (
		<header class="root">
			<div class="forest" />
			<div class="container">
				<h1>{title}</h1>
				<p>{descr}!</p>
			</div>
		</header>
	);
};
