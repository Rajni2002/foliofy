import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Header() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header>
            <div className="container">
                <h1 className="hero__title">{siteConfig.title}</h1>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <div>
                    <Link
                        className="button button--secondary button--lg"
                        to="/docs/intro">
                        Be the first one 🚀
                    </Link>
                </div>
            </div>
        </header>
    );
}