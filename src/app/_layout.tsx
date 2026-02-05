import { Stack } from 'expo-router'
import { ReactElement } from 'react'

const Layout = (): ReactElement => {
    return <Stack screenOptions={{
        headerStyle: {
            backgroundColor: '#467FD3',
        },
        headerTintColor: '#FFFFFF',
        headerTitle: 'Memo App',
        headerBackTitle: 'Back',
        headerTitleStyle: {
            fontSize: 22,
            fontWeight: 'bold'
        }
    }} />
}

export default Layout
