import { Redirect } from 'expo-router'
import { ReactElement } from 'react'

const Index = (): ReactElement => {
    return <Redirect href='auth/sign_up' />
}

export default Index
