import {Box, Typography} from "@mui/material"

export const metadata = {
	title: "Maintenance",
	description: "Page en cours de maintenance.",
}

export default function Maintenance() {
	return (
		<Box height="100vh" width={1} display="flex" justifyContent="center" alignItems="center">
			<Box>
				<Typography component="h1" variant="h4" textAlign="center" mb={1} sx={{fontWeight: 600}}>
					Page en Maintenance
				</Typography>
				<Typography component="p" textAlign="center">
					Nous effectuons actuellement une maintenance. Merci de revenir ultérieurement.
				</Typography>
			</Box>
		</Box>
	)
}
