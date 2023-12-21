'use client';

import { Footer } from 'flowbite-react';

const styles = {
    height: 100
};

export default function () {
    return (
        <div className="border-t border-solid border-primary">
            <div className="container mx-auto">
                <Footer container className="shadow-none">
                    <Footer.Copyright href="#" by="InvestRate.pl™" year={2024} className="flex justify-center align-middle md:mb-0 mb-2"/>
                    <Footer.LinkGroup className="md:flex justify-center">
                        <Footer.Link href="/">Home</Footer.Link>
                        <Footer.Link href="/posts">Blog</Footer.Link>
                        <Footer.Link href="/feedback">Feedback</Footer.Link>
                    </Footer.LinkGroup>

                    <Footer.LinkGroup className="md:flex justify-center">
                        <Footer.Link href="/">English</Footer.Link>
                        <Footer.Link href="/posts">Polska</Footer.Link>
                        <Footer.Link href="/feedback">Українська</Footer.Link>
                    </Footer.LinkGroup>
                </Footer>
            </div>
        </div>
    );
}
