import { ReactElement } from 'react'
import { View, StyleSheet } from 'react-native'
import { router } from 'expo-router'

import Icon from '../../components/Icon'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'

const handlePress = ():void => {
    router.push('/memo/create')
}

const List = (): ReactElement => {
    return (
        <View style={styles.container}>
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton onPress={handlePress}>
                <Icon name='plus' size={40} color='#FFFFFF' />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
})

export default List
