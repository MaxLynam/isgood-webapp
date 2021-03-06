import { Link, BlitzPage, useMutation } from "blitz"
import Layout from "app/layouts/Layout"
import logout from "app/auth/mutations/logout"
import { useCurrentUser } from "app/hooks/useCurrentUser"
import { Suspense } from "react"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Manager = () => {
  const currentUser = useCurrentUser()
  
  const [logoutMutation] = useMutation(logout)

  {
    return (
      <>
        <button
          className="button small"
          onClick={async () => {
            await logoutMutation()
          }}
        >
          Logout
        </button>
        
        <div>
         
            <Link href="/projects">
            <a className="button small">
              <strong>projects</strong>
            </a>
            </Link>
            <Link href="/beneficiaries">
            <a className="button small">
              <strong>beneficiaries</strong>
            </a>
            </Link>
            {/* <Link href="/demographics">
            <a className="button small">
              <strong>demographics</strong>
            </a>
            </Link> */}
            <Link href="/projectIndicators">
            <a className="button small">
             <strong>projectIndicators</strong> 
            </a>
            </Link>
          
        </div>
        
      </>
    )
  } 
}

Manager.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Manager
