export const env = {
	BASE_URL: process.env.NODE_ENV === "development" ? `http://${process.env.NEXT_PUBLIC_BASE_URL}:${process.env.PORT || 3000}` : `https://${process.env.NEXT_PUBLIC_BASE_URL}`,
}
