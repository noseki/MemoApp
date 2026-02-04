import { ReactElement } from 'react'
import { View, StyleSheet } from 'react-native'
import Icon from '../../components/Icon'

import Header from '../../components/Header'
import MemoListItem from '../../components/MemoListItem'
import CircleButton from '../../components/CircleButton'

const List = (): ReactElement => {
    return (
        <View style={styles.container}>
            <Header />
            <View>
                <MemoListItem />
                <MemoListItem />
                <MemoListItem />
            </View>
            <CircleButton>
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
