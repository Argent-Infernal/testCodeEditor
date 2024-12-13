import type { Metadata } from 'next'

import './global.scss'
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';

const SITE_NAME = 'CodeEditor'
const SITE_DESCRIPTION = 'Test code'

export const metadata: Metadata = {
	title: {
        absolute: SITE_NAME,
        template: `%s | ${SITE_NAME}`
    },
	description: SITE_DESCRIPTION
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru'>
			<body>
                <div id='root'>
                    {children}  
                </div>
            </body>
		</html>
	)
}
