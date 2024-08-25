import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
    weight: ['400', '700'],
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // Adding Inter to the body element will apply the font throughout the application.
    // We are also adding Tailwind antialiased class which smooths out the font to add a nice touch.
    return (
        <html lang="en">
            <body className={ `${inter.className} antialiased`}>{children}</body>
        </html>
    );
}
