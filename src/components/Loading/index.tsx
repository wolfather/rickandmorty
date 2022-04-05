import { View, ActivityIndicator } from 'react-native';

export const Loading = () => {
    return (
        <View style={{flex: 1,justifyContent: 'center', alignContent: 'center'}}>
            <ActivityIndicator size={80} color={'#666'}/>
        </View>
    )
}