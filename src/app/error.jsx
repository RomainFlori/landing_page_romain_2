"use client"

import {Box, Button, Typography} from "@mui/material"
import {useEffect} from "react"

/**
 * https://nextjs.org/docs/app/building-your-application/routing/error-handling
 * @param {*} param0
 */
export default function Error({error, reset}) {
	useEffect(() => {
		// eslint-disable-next-line no-console
		console.error(error)
	}, [error])

	return (
		<Box height="100vh" width={1} display="flex" justifyContent="center" alignItems="center">
			<div>
				<Typography component="h1" variant="h1" align="center" sx={{fontWeight: 600}}>
					{/* {statusCode} */}
				</Typography>
				<Typography component="p" variant="h6" align="center">
					Oups! Une erreur inattendue s&apos;est produite: {error.message}
				</Typography>
				<Box display="flex" justifyContent="center" marginTop={4}>
					<Button variant="contained" color="primary" size="large" onClick={() => reset()}>
						Rafraichir
					</Button>
				</Box>
			</div>
		</Box>
	)
}
