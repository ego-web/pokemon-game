import React from 'react';

export const Layout = (props) => {
	if (!props) return;
    const { title, descr, urlBg, colorBg } = props;
	return (
        <section class="root">
            <div class="wrapper">
                {urlBg && <img src={urlBg} alt="urlBg" />}
                <article>
                    <div class="title">
                        <h3>{title}</h3>
                        <span class="separator"></span>
                    </div>
                    <div class="desc full">
                        <p>{descr}</p>
                    </div>
                </article>
            </div>
        </section>
	);
};