import Layout from "./_components/Layout"
import projectConfig from "../../configs/project"

export const metadata = projectConfig

export default function AppLayout({children}) {
	return <Layout>{children}</Layout>
}
