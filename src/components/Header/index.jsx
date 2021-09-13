import React from 'react';
import s from './style.module.css';

export const Header = (props) => {
	if (!props) return;
	const { title, descr } = props;
	return (
		<header className={s.root}>
			<div className={s.forest} />
			<div className={s.container}>
				<h1>{title}</h1>
				<p>{descr}!</p>
			</div>
		</header>
	);
};
