'use client'

import Script from 'next/script'

export function GoogleAnalytics() {
    return (
        <>
            <Script
                src="https://www.googletagmanager.com/gtag/js?id=G-QZV1PBW1MG"
                strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-QZV1PBW1MG');
                `}
            </Script>
        </>
    )
}