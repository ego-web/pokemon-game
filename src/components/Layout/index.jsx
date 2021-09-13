import React from 'react';
import s from './style.module.css';

export const Layout = (props) => {
	if (!props) return;
    const { title, urlBg, colorBg, children } = props;
	return (
        <section className={s.root}>
            <div className={s.wrapper}>
                {urlBg && <img src={urlBg} alt="urlBg" />}
                <article>
                    <div className={s.title}>
                        <h3>{title}</h3>
                        <span className={s.separator}></span>
                    </div>
                    <div className={`${s.desc} ${s.full}`}>
                        <p>{children}</p>
                    </div>
                </article>
            </div>
        </section>
	);
};