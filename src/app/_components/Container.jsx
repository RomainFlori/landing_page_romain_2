import Box from "@mui/material/Box"
import PropTypes from "prop-types"

/**
 * Le container de toutes les sections de chaque page
 * @param {object} params0 {}children, ...rest}
 */
export default function Container({children, ...rest}) {
	return (
		<Box className="container" width={1} paddingX={2} margin="auto" maxWidth={{sm: 720, md: 1236}} paddingY={{xs: 2, sm: 4, md: 4}} sx={{clear: "both", overflow: "hidden"}} {...rest}>
			{children}
		</Box>
	)
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
}
