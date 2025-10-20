"use client";

import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from "react-icons/fa";
import Image from "next/image";
import { useLanguage } from '@/contexts/LanguageContext';

export function Navbar() {
    const { language, setLanguage, t } = useLanguage();
    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen((v) => !v);
    const closeMenu = () => setOpen(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        const prev = document.body.style.overflow;
        if (open) document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = prev;
        };
    }, [open]);

    return (
        <div className="pb-20">
            <div className="w-full bg-gray-900 fixed top-0 z-50">
                <nav className="flex items-center justify-between p-6">
                    {/* Logo */}
                    <div>
                        <Link href={"/"} onClick={closeMenu}>
                            <Image
                                src="/logo.png"
                                width={160}
                                height={40}
                                className="logo"
                                alt="Your logo"
                            />
                        </Link>
                    </div>

                    {/* Desktop nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {/* Navigation Links */}
                        <div className="space-x-8 text-white">
                            <Link href="/" className="text-xl hover:text-green-400 hover:underline hover:font-bold hover:text-2xl">
                                {t("nav.home")}
                            </Link>
                            <Link href="/projects" className="text-xl hover:text-green-400 hover:underline hover:font-bold hover:text-2xl">
                                {t("nav.projects")}
                            </Link>
                            <Link href="/news" className="text-xl hover:text-green-400 hover:underline hover:font-bold hover:text-2xl">
                                {t("nav.news")}
                            </Link>
                            <Link href="/contact" className="text-xl hover:text-green-400 hover:underline hover:font-bold hover:text-2xl">
                                {t("nav.contact")}
                            </Link>
                        </div>

                        {/* Language Toggle Buttons */}
                        <div className="flex gap-2 ml-6">
                            <button
                                onClick={() => setLanguage("en")}
                                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                                    language === "en"
                                        ? "bg-green-600 text-white"
                                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                }`}
                            >
                                EN
                            </button>
                            <button
                                onClick={() => setLanguage("de")}
                                className={`px-3 py-1 rounded text-sm font-medium transition-colors ${
                                    language === "de"
                                        ? "bg-green-600 text-white"
                                        : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                                }`}
                            >
                                DE
                            </button>
                        </div>
                    </div>

                    {/* Mobile toggle button */}
                    <button
                        className="md:hidden text-2xl text-green-500"
                        onClick={toggleMenu}
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                </nav>
            </div>

            {/* Mobile drawer */}
            {open && (
                <div
                    id="mobile-menu"
                    className="md:hidden fixed inset-0 mt-20 bg-gray-900 text-white z-40 flex flex-col p-6 space-y-4"
                    role="dialog"
                    aria-modal="true"
                >
                    <Link href="/" onClick={closeMenu} className="text-xl px-4 py-3 rounded hover:bg-green-600 transition">
                        {t("nav.home")}
                    </Link>
                    <Link href="/projects" onClick={closeMenu} className="text-xl px-4 py-3 rounded hover:bg-green-600 transition">
                        {t("nav.projects")}
                    </Link>
                    <Link href="/news" onClick={closeMenu} className="text-xl px-4 py-3 rounded hover:bg-green-600 transition">
                        {t("nav.news")}
                    </Link>
                    <Link href="/contact" onClick={closeMenu} className="text-xl px-4 py-3 rounded hover:bg-green-600 transition">
                        {t("nav.contact")}
                    </Link>

                    {/* Language toggle */}
                    <div className="mt-6 grid grid-cols-2 gap-2">
                        <button
                            onClick={() => {
                                setLanguage("en");
                                closeMenu();
                            }}
                            className={`w-full px-4 py-2 rounded font-bold ${
                                language === "en" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300"
                            }`}
                        >
                            EN
                        </button>
                        <button
                            onClick={() => {
                                setLanguage("de");
                                closeMenu();
                            }}
                            className={`w-full px-4 py-2 rounded font-bold ${
                                language === "de" ? "bg-green-600 text-white" : "bg-gray-700 text-gray-300"
                            }`}
                        >
                            DE
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export function Footer() {
    const { t } = useLanguage();

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        const yearElement = document.getElementById('currentYear');
        if (yearElement) {
            yearElement.textContent = currentYear.toString();
        }
    }, []);

    return (
        <footer className="bg-gray-900 shadow max-w-screen w-full">
            <div className="w-full mx-auto max-w-screen-xl p-4">
                {/* First Row: Useful Links, Help Links, and Image*/}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div>
                        <h3 className="text-xl font-bold">{t('footer.useful_links')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className={"hover:text-green-400 hover:underline hover:font-bold"}>
                                    <p className="flex items-center space-x-2">
                                        <span>{t('nav.home')}</span>
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/projects" className={"hover:text-green-400 hover:underline hover:font-bold"}>
                                    <p className="flex items-center space-x-2">
                                        <span>{t('nav.projects')}</span>
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/news" className={"hover:text-green-400 hover:underline hover:font-bold"}>
                                    <p className="flex items-center space-x-2">
                                        <span>{t('nav.news')}</span>
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold">{t('footer.help')}</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/contact" className={"hover:text-green-400 hover:underline hover:font-bold"}>
                                    <p className="flex items-center space-x-2">
                                        <span>{t('nav.contact')}</span>
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/imprint" className={"hover:text-green-400 hover:underline hover:font-bold"}>
                                    <p className="flex items-center space-x-2">
                                        <span>{t('footer.imprint')}</span>
                                    </p>
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy-policy" className={"hover:text-green-400 hover:underline hover:font-bold"}>
                                    <p className="flex items-center space-x-2">
                                        <span>{t('footer.privacy_policy')}</span>
                                    </p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    {/* Image added here*/}
                    <div className="flex justify-end">
                        <Image src="/logo.png" width={160} height={40} alt="Your logo" className="h-auto" />
                    </div>
                </div>

                {/* Second Row: Social Media Icons*/}
                <div className="flex justify-center mt-6 space-x-4 text-2xl">
                    <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-white hover:text-green-400" aria-label={"GitHub"}/>
                    </Link>

                    <Link href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-white hover:text-green-400" aria-label="LinkedIn"/>
                    </Link>
                </div>

                {/* Third Row: Copyright + Auto update current year*/}
                <div className="flex justify-center mt-8">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        © Your website name {"<since>"}-<span id="currentYear"></span>
                    </p>
                </div>
            </div>
        </footer>
    );
}