import { Redirect } from 'expo-router'
import { ReactElement } from 'react'

const Index = (): ReactElement => {
    return <Redirect href='auth/log_in' />
}

export default Index
