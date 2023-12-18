'use client';

import { Footer } from 'flowbite-react';

const styles = {
    height: 100
};

export default function () {
    return (
        <Footer container style={styles}>
            <Footer.Copyright href="#" by="InvestRate.pl™" year={2024} />
            <Footer.LinkGroup>
                <Footer.Link href="/">Home</Footer.Link>
                <Footer.Link href="/posts">Blog</Footer.Link>
                <Footer.Link href="/feedback">Feedback</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    );
}
