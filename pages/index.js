import React from "react"
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import ProTip from "../components/ProTip"
import Link from "../components/Link"
import Copyright from "../components/Copyright"
import { gql, useQuery } from "@apollo/client"

const ViewerQuery = gql`
  query ViewerQuery {
    viewer {
      id
      name
    }
  }
`

export default function Index() {
  const { data, loading, error } = useQuery(ViewerQuery)
  const viewer = data?.viewer

  // console.log("data", data)
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js example {viewer?.name}
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  )
}
