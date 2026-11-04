import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import {
    getMessages,
    getTranslations,
    setRequestLocale,
} from "next-intl/server";
import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";

import StyledComponentsRegistry from "@/lib/registry";
import { routing } from "@/i18n/routing";
import GlobalStyles from "../global-styles";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
});

const SITE_URL = "https://www.christopher-nafrere.fr";

type Props = {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: "Metadata",
    });

    const canonical = `/${locale}`;

    return {
        metadataBase: new URL(SITE_URL),

        title: {
            default: t("title"),
            template: `%s | ${t("siteName")}`,
        },

        description: t("description"),

        applicationName: "RX-NAF",

        authors: [
            {
                name: "Christopher Nafrere",
            },
        ],

        creator: "Christopher Nafrere",
        publisher: "Christopher Nafrere",

        alternates: {
            canonical,
        },

        openGraph: {
            type: "website",
            locale: locale === "fr" ? "fr_FR" : "en_US",
            url: canonical,
            siteName: "RX-NAF",
            title: t("title"),
            description: t("description"),
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "RX-NAF - Portfolio de Christopher Nafrere",
                },
            ],
        },

        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-image-preview": "large",
                "max-snippet": -1,
                "max-video-preview": -1,
            },
        },
    };
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: "#101827",
};

export default async function RootLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className={spaceGrotesk.variable}>
                <GlobalStyles />
                <StyledComponentsRegistry>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
