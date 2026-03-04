import {ErrorBoundary} from "next/dist/client/components/error-boundary"
import Error from "./error"
import projectConfig from "../configs/project"
import "../styles/reset.css"
import "../styles/global.css"

export default function RootLayout({children}) {
	return (
		<html lang={projectConfig.lang}>
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
				<base href="/" />
			</head>
			<body>
				<ErrorBoundary errorComponent={Error}>{children}</ErrorBoundary>
			</body>
		</html>
	)
}
