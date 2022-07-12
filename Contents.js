import React from 'react'
import {FlatList, TouchableOpacity, StyleSheet, Text, View} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {easeGradient} from 'react-native-easing-gradient'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {CardStyleInterpolators} from '@react-navigation/stack'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        resizeMode: 'cover'
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 'auto',
        maxWidth: 600,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: '5px',
        backgroundColor: 'rgb(20, 20, 20)',
        color: 'white'
    }
})

const {colors, locations} = easeGradient({
    colorStops: {
        0: {
            color: 'rgb(70, 0, 70)'
        },
        1: {
            color: 'rgb(110, 0, 110)'
        }
    },
    extraColorStopsPerTransition: 100
})

const Stack = createNativeStackNavigator()

const Home = ({navigation}) => {
    return (
        <LinearGradient colors={colors} locations={locations} style={styles.container}>
            <FlatList
                data={[
                    {key: 'Abortion is wrong.', color: 'red', screen: 'AbortWrong'},
                    {key: 'Abortion is not wrong.', color: 'blue', screen: 'AbortNotWrong'},
                    {key: 'Abortion should be banned.', color: 'red', screen: 'AbortIllegal'},
                    {key: 'Abortion shouldn\'t be banned.', color: 'blue', screen: 'AbortLegal'},
                    {key: 'Overturning Roe was a good decision.', color: 'red', screen: 'NoRoe'},
                    {key: 'Overturning Roe was a bad decision.', color: 'blue', screen: 'GoRoe'}
                ]}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                        <Text style={[styles.item, 
                                {boxShadow: '2px 2px 10px ' + item.color}]}>{item.key}</Text>
                    </TouchableOpacity>}
            />
        </LinearGradient>
    )
}

const AbortWrong = ({navigation}) => {
    return (
        <LinearGradient colors={colors} locations={locations} style={styles.container}>
            <FlatList
                data={[
                    {key: 'It\'s not that wrong, though.', color: 'blue', screen: 'AbortNotVeryWrong'},
                    {key: 'Its wrongness is of a kind that can be tolerated.', color: 'blue', screen: 'AbortNotRelevantlyWrong'},
                    {key: 'Then masturbation must also be wrong.', color: 'blue', screen: ''},
                    {key: 'Then contraception must also be wrong.', color: 'blue', screen: ''},
                    {key: 'The embryo is a living human organism.', color: 'red', screen: ''},
                    {key: 'Life is intrinsically valuable.', color: 'red', screen: ''},
                    {key: 'Even impairments less severe than death (e.g., fetal alcohol syndrome) are wrong to inflict on the fetus.', color: 'red', screen: ''},
                    {key: 'You were once an embryo.', color: 'red', screen: ''},
                    {key: 'The embryo is a person.', color: 'red', screen: ''},
                    {key: 'The embryo is likely enough a person that abortion is too morally risky.', color: 'red', screen: ''},
                    {key: 'A woman cannot do just anything with her body.', color: 'red', screen: ''},
                    {key: 'The right not to help others does not imply a right to kill the fetus.', color: 'red', screen: ''},
                    {key: 'Consent to sex is consent to pregnancy.', color: 'red', screen: ''},
                    {key: 'You don\'t get to separately consent to the effects of an action.', color: 'red', screen: ''}
                ]}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                        <Text style={[styles.item, 
                                {boxShadow: '2px 2px 10px ' + item.color}]}>{item.key}</Text>
                    </TouchableOpacity>}
            />
        </LinearGradient>
    )
}

const AbortVeryWrong = ({navigation}) => {
    return (
        <LinearGradient colors={colors} locations={locations} style={styles.container}>
            <FlatList
                data={[
                    {key: '.', color: 'blue', screen: ''}, 
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''}
                ]}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                        <Text style={[styles.item, 
                                {boxShadow: '2px 2px 10px ' + item.color}]}>{item.key}</Text>
                    </TouchableOpacity>}
            />
        </LinearGradient>
    )
}

const AbortRelevantlyWrong = ({navigation}) => {
    return (
        <LinearGradient colors={colors} locations={locations} style={styles.container}>
            <FlatList
                data={[
                    {key: '.', color: 'blue', screen: ''}, 
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''}
                ]}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                        <Text style={[styles.item, 
                                {boxShadow: '2px 2px 10px ' + item.color}]}>{item.key}</Text>
                    </TouchableOpacity>}
            />
        </LinearGradient>
    )
}

const AbortNotWrong = ({navigation}) => {
    return (
        <LinearGradient colors={colors} locations={locations} style={styles.container}>
            <FlatList
                data={[
                    {key: 'The embryo isn\'t a living human organism.', color: 'blue', screen: ''}, 
                    {key: 'The embryo isn\'t a person.', color: 'blue', screen: ''},
                    {key: 'The fetus is a parasite.', color: 'blue', screen: ''},
                    {key: 'My body, my choice—A woman\'s body is her sovereign zone.', color: 'blue', screen: ''},
                    {key: 'Women have the right to refuse the use of their bodies.', color: 'blue', screen: ''},
                    {key: 'Consent to sex is not consent to pregnancy.', color: 'blue', screen: ''}
                ]}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                        <Text style={[styles.item, 
                                {boxShadow: '2px 2px 10px ' + item.color}]}>{item.key}</Text>
                    </TouchableOpacity>}
            />
        </LinearGradient>
    )
}

const AbortNotVeryWrong = ({navigation}) => {
    return (
        <LinearGradient colors={colors} locations={locations} style={styles.container}>
            <FlatList
                data={[
                    {key: '.', color: 'blue', screen: ''}, 
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''}
                ]}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                        <Text style={[styles.item, 
                                {boxShadow: '2px 2px 10px ' + item.color}]}>{item.key}</Text>
                    </TouchableOpacity>}
            />
        </LinearGradient>
    )
}

const AbortNotRelevantlyWrong = ({navigation}) => {
    return (
        <LinearGradient colors={colors} locations={locations} style={styles.container}>
            <FlatList
                data={[
                    {key: '.', color: 'blue', screen: ''}, 
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''}
                ]}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                        <Text style={[styles.item, 
                                {boxShadow: '2px 2px 10px ' + item.color}]}>{item.key}</Text>
                    </TouchableOpacity>}
            />
        </LinearGradient>
    )
}

const AbortPractical = ({navigation}) => {
    return (
        <LinearGradient colors={colors} locations={locations} style={styles.container}>
            <FlatList
                data={[
                    {key: '.', color: 'blue', screen: ''}, 
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''}
                ]}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                        <Text style={[styles.item, 
                                {boxShadow: '2px 2px 10px ' + item.color}]}>{item.key}</Text>
                    </TouchableOpacity>}
            />
        </LinearGradient>
    )
}

const AbortImpractical = ({navigation}) => {
    return (
        <LinearGradient colors={colors} locations={locations} style={styles.container}>
            <FlatList
                data={[
                    {key: '.', color: 'blue', screen: ''}, 
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''}
                ]}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                        <Text style={[styles.item, 
                                {boxShadow: '2px 2px 10px ' + item.color}]}>{item.key}</Text>
                    </TouchableOpacity>}
            />
        </LinearGradient>
    )
}

const AbortLegal = ({navigation}) => {
    return (
        <LinearGradient colors={colors} locations={locations} style={styles.container}>
            <FlatList
                data={[
                    {key: 'Abortion is not wrong at all.', color: 'blue', screen: 'AbortNotWrong'},
                    {key: 'Abortion is not wrong enough to ban.', color: 'blue', screen: 'AbortNotVeryWrong'},
                    {key: 'The wrongness of abortion is of a kind that can be tolerated.', color: 'blue', screen: 'AbortNotRelevantlyWrong'},
                    {key: 'Legalizing abortion does not have impractical results.', color: 'blue', screen: 'AbortPractical'},
                ]}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                        <Text style={[styles.item, 
                                {boxShadow: '2px 2px 10px ' + item.color}]}>{item.key}</Text>
                    </TouchableOpacity>}
            />
        </LinearGradient>
    )
}

const AbortIllegal = ({navigation}) => {
    return (
        <LinearGradient colors={colors} locations={locations} style={styles.container}>
            <FlatList
                data={[
                    {key: 'Abortion is wrong.', color: 'blue', screen: 'AbortWrong'}, 
                    {key: 'Abortion is very wrong.', color: 'blue', screen: 'AbortVeryWrong'},
                    {key: 'The wrongness of abortion is of a kind that can\'t be tolerated.', color: 'blue', screen: 'AbortRelevantlyWrong'},
                    {key: 'Legalizing abortion has impractical results.', color: 'blue', screen: 'AbortImpractical'}
                ]}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                        <Text style={[styles.item, 
                                {boxShadow: '2px 2px 10px ' + item.color}]}>{item.key}</Text>
                    </TouchableOpacity>}
            />
        </LinearGradient>
    )
}

const NoRoe = ({navigation}) => {
    return (
        <LinearGradient colors={colors} locations={locations} style={styles.container}>
            <FlatList
                data={[
                    {key: '.', color: 'blue', screen: ''}, 
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''}
                ]}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                        <Text style={[styles.item, 
                                {boxShadow: '2px 2px 10px ' + item.color}]}>{item.key}</Text>
                    </TouchableOpacity>}
            />
        </LinearGradient>
    )
}

const GoRoe = ({navigation}) => {
    return (
        <LinearGradient colors={colors} locations={locations} style={styles.container}>
            <FlatList
                data={[
                    {key: '.', color: 'blue', screen: ''}, 
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''},
                    {key: '.', color: 'blue', screen: ''}
                ]}
                renderItem={({item}) => 
                    <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                        <Text style={[styles.item, 
                                {boxShadow: '2px 2px 10px ' + item.color}]}>{item.key}</Text>
                    </TouchableOpacity>}
            />
        </LinearGradient>
    )
}

const forFade = ({ current }) => ({
    cardStyle: {
      opacity: current.progress,
    }
  })

const Contents = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Home' 
            screenOptions={{animationEnabled: true, headerStyle: {backgroundColor: 'black'}, headerTitleStyle: {color: 'white', fontSize: 24, maxWidth: 500}, headerTintColor: 'white'}}>
            <Stack.Screen name='Home' component={Home} options={{title: 'Welcome to Bipa!', headerTitleStyle: {fontSize: 40}}} />
            <Stack.Screen name='AbortWrong' component={AbortWrong} options={{cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid, title: 'Abortion is wrong.'}} />
            <Stack.Screen name='AbortVeryWrong' component={AbortVeryWrong} options={{title: 'Abortion is very wrong.'}} />
            <Stack.Screen name='AbortRelevantlyWrong' component={AbortRelevantlyWrong} options={{title: 'Abortion has an especially reprehensible kind of wrongness.'}} />
            <Stack.Screen name='AbortNotWrong' component={AbortNotWrong} options={{title: 'Abortion is not wrong.'}} />
            <Stack.Screen name='AbortNotVeryWrong' component={AbortNotVeryWrong} options={{title: 'Abortion is not that wrong.'}} />
            <Stack.Screen name='AbortNotRelevantlyWrong' component={AbortNotRelevantlyWrong} options={{title: 'Abortion\'s wrongness is of a kind that can be tolerated.'}} />
            <Stack.Screen name='AbortPractical' component={AbortPractical} options={{title: 'Legalizing abortion does not have impractical results.'}} />
            <Stack.Screen name='AbortImpractical' component={AbortImpractical} options={{title: 'Legalizing abortion has impractical results.'}} />
            <Stack.Screen name='AbortLegal' component={AbortLegal} options={{title: 'Abortion shouldn\'t be banned.'}} />
            <Stack.Screen name='AbortIllegal' component={AbortIllegal} options={{title: 'Abortion should be banned.'}} />
            <Stack.Screen name='NoRoe' component={NoRoe} options={{title: 'Good riddance, Roe!'}} />
            <Stack.Screen name='GoRoe' component={GoRoe} options={{title: 'Bring Roe back!'}} />
        </Stack.Navigator>
    )
}

export default Contents