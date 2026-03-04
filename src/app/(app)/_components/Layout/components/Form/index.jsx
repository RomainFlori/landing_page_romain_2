/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable arrow-body-style */
import {Button, Card, CardActions, CardContent, Grid} from "@mui/material"
import {Field, Form, Formik} from "formik"
import * as Yup from "yup"
import {TextField} from "formik-material-ui"
import {env} from "../../../../../../configs/env"

const initialValues = {
	firstName: "",
	lastName: "",
	job: "",
	company: "",
	email: "",
	phone: "",
	country: "",
}

const validationSchema = Yup.object().shape({
	firstName: Yup.string().required("Required"),
	phone: Yup.string()
		.matches(/(?=.{10,})/, "Doit contenir 10 caractères !")
		.required("Required"),
	lastName: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
})

const UserForm = ({handleClose}) => {
	const endpoint = "/api"
	const url = `${env.BASE_URL}${endpoint}`
	const onSubmit = async (values) => {
		await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				firstName: values.firstName,
				lastName: values.lastName,
				email: values.email,
				job: values.job,
				company: values.company,
				phone: values.phone,
				country: values.country,
			}),
		})
		handleClose()
	}

	return (
		<Grid>
			<Grid item md={6}>
				<Card>
					<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
						{({values}) => {
							return (
								<Form className="shadow-white">
									<CardContent>
										<div className="flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5">
											<div className="space-y-5">
												<Grid item xs={12} sm={6} md={6}>
													<Field label="Votre prénom" variant="outlined" fullWidth name="firstName" value={values.firstName} component={TextField} />
												</Grid>
												<Grid item xs={12} sm={6} md={6}>
													<Field label="Votre email profesionnel" variant="outlined" fullWidth name="email" value={values.email} component={TextField} />
												</Grid>
												<Grid item xs={12} sm={6} md={6}>
													<Field label="Votre entreprise" variant="outlined" fullWidth name="company" value={values.company} component={TextField} />
												</Grid>
											</div>
											<div className="space-y-5">
												<Grid item xs={12} sm={6} md={6}>
													<Field label="Votre Nom" variant="outlined" fullWidth name="lastName" value={values.lastName} component={TextField} />
												</Grid>
												<Grid item xs={12} sm={6} md={6}>
													<Field label="Votre téléphone" variant="outlined" fullWidth name="phone" value={values.phone} component={TextField} />
												</Grid>
												<Grid item xs={12} sm={6} md={6}>
													<Field label="Votre fonction" variant="outlined" fullWidth name="job" value={values.job} component={TextField} />
												</Grid>
											</div>
										</div>
									</CardContent>
									<CardActions className="flex items-center">
										<Button
											autoFocus
											type="submit"
											style={{backgroundColor: "var(--pink-color)"}}
											className="my-4 text-white hover:scale-105 duration-200 font-semibold py-2 px-4 rounded-lg"
										>
											C<span className="lowercase">ontacter un de nos experts</span>
										</Button>
									</CardActions>
								</Form>
							)
						}}
					</Formik>
				</Card>
			</Grid>
		</Grid>
	)
}

export default UserForm
