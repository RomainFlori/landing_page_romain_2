module.exports = {
	output: "standalone",
	async redirects() {
		return [
			{
				source: process.env.NEXT_PUBLIC_MAINTENANCE === "true" ? "/:path((?!maintenance$).*)" : "/maintenance",
				destination: process.env.NEXT_PUBLIC_MAINTENANCE === "true" ? "/maintenance" : "/",
				permanent: true,
			},
		]
	},
}
