import {Box, Button, Typography} from "@mui/material"
import Link from "next/link"

/**
 * https://nextjs.org/docs/app/api-reference/file-conventions/not-found
 */
export default function NotFound() {
	return (
		<Box height="100vh" width={1} display="flex" justifyContent="center" alignItems="center">
			<Box>
				<Typography component="h1" variant="h1" textAlign="center" sx={{fontWeight: 600}}>
					404
				</Typography>
				<Typography component="p" variant="h6" textAlign="center">
					Page introuvable
				</Typography>
				<Box display="flex" justifyContent="center" marginTop={4}>
					<Button variant="contained" color="primary" size="large" component={Link} href="/">
						Retour à l&apos;accueil
					</Button>
				</Box>
			</Box>
		</Box>
	)
}
