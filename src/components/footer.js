'use client';

import { Footer, List } from 'flowbite-react';
import { LanguageSwitcher } from 'next-export-i18n';

export default function () {
    return (
        <div className="border-t border-solid border-primary mt-5 lg:mt-20">
            <div className="container mx-auto">
                <Footer container className="shadow-none">
                    <Footer.Copyright href="/" by="InvestRate.pl™" year={new Date().getFullYear()} className="flex justify-center align-middle md:mb-0 mb-2"/>

                    <Footer.LinkGroup className="md:flex justify-center">
                        <Footer.Link href="/">Home</Footer.Link>
                        <Footer.Link href="/posts">Blog</Footer.Link>
                        <Footer.Link href="/feedback">Feedback</Footer.Link>
                        <Footer.Link href="/privacy-policy">Privacy policy</Footer.Link>
                    </Footer.LinkGroup>

                    <List horizontal className="text-sm">
                        <List.Item><LanguageSwitcher lang="de">Deutsch</LanguageSwitcher></List.Item>
                        <List.Item><LanguageSwitcher lang="en">English</LanguageSwitcher></List.Item>
                    </List>
                </Footer>
            </div>
        </div>
    );
}
