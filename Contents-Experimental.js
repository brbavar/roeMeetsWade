import React from 'react'
import {FlatList, TouchableOpacity, StyleSheet, Text, View} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {easeGradient} from 'react-native-easing-gradient'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import {CardStyleInterpolators} from '@react-navigation/stack'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
        resizeMode: 'cover'
    },
    innerContainer: {
        padding: 22,
        width: '80%',
        boxShadow: '2px 2px 15px -10px white',
        borderRadius: '40px',
        maxWidth: '700px'
    },
    para: {
        color: 'white',
        fontWeight: 700
    },
    leafList: {
        // marginTop: -20
    },
    item: {
        padding: 10,
        fontSize: 18,
        fontWeight: 500,
        height: 'auto',
        maxWidth: 600,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: '5px',
        backgroundColor: 'rgb(32, 32, 32)',
        color: 'white',
        textAlign: 'left',
        textShadow: '2px 6px 5px black'
    }
})

var purples, locations1
{
    var {colors, locations} = easeGradient({
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

    purples = [...colors]
    locations1 = []
    for (var i = 0; i < locations.size; i++)
        locations1.push(locations[i])
}

var reds, locations2
{
    var {colors, locations} = easeGradient({
        colorStops: {
            0: {
                color: 'rgb(30, 0, 0)'
            },
            1: {
                color: 'rgb(70, 0, 0)'
            }
        },
        extraColorStopsPerTransition: 100
    })

    reds = [...colors]
    locations2 = []
    for (var i = 0; i < locations.size; i++)
        locations2.push(locations[i])
}

var blues, locations3
{
    var {colors, locations} = easeGradient({
        colorStops: {
            0: {
                color: 'rgb(0, 0, 30)'
            },
            1: {
                color: 'rgb(0, 0, 70)'
            }
        },
        extraColorStopsPerTransition: 100
    })

    blues = [...colors]
    locations3 = []
    for (var i = 0; i < locations.size; i++)
        locations3.push(locations[i])
}

const Stack = createNativeStackNavigator()

const screens = ['Home', 'AbortWrong', 'Kill', 'EndsLife', 'LifeConcep', 'HumConcep', 'OrgConcep', 
    'NotZygote', 'AbortVeryWrong', 'AbortRelevantlyWrong', 'AbortNotWrong', 'NoDebt', 'AbortNotVeryWrong', 
    'AbortNotRelevantlyWrong', 'AbortPractical', 'AbortImpractical', 'AbortLegal', 'AbortIllegal', 'NoRoe', 
    'GoRoe']

const specialScreens = ['Home']

const leaves = ['HumConcep']

const branches = screens.filter(screen => 
    { 
        return !leaves.includes(screen) && !specialScreens.includes(screen) 
    })

const dataSets = [
    [
        {key: 'Abortion is wrong.', color: 'red', screen: 'AbortWrong'},
        {key: 'It\'s okay to abort.', color: 'blue', screen: 'AbortNotWrong'},
        {key: 'Abortion should be banned.', color: 'red', screen: 'AbortIllegal'},
        {key: 'Abortion shouldn\'t be banned.', color: 'blue', screen: 'AbortLegal'},
        {key: 'Good riddance, Roe!', color: 'red', screen: 'NoRoe'},
        {key: 'Bring Roe back!', color: 'blue', screen: 'GoRoe'},
        {key: 'I\'m a man, so I\'ll just keep my mouth shut.', color: 'blue', screen: 'NoMen'}
    ],
    [
        {key: 'It\'s not very wrong.', color: 'blue', screen: 'AbortNotVeryWrong'},
        {key: 'Its wrongness is of a tolerable kind.', color: 'blue', screen: 'AbortNotRelevantlyWrong'},
        {key: 'Then male masturbation is wrong.', color: 'blue', screen: ''},
        {key: 'Then contraception is wrong.', color: 'blue', screen: ''},
        {key: 'Abortion is killing.', color: 'red', screen: 'Kill'},
        {key: 'Life is intrinsically valuable.', color: 'red', screen: ''},
        {key: 'Even impairments less severe than death (e.g., fetal alcohol syndrome) are wrong to inflict on the fetus.', color: 'red', screen: ''},
        {key: 'You were once a fetus.', color: 'red', screen: ''},
        {key: 'The fetus is a person.', color: 'red', screen: ''},
        {key: 'The fetus is likely enough a person that abortion is too morally risky.', color: 'red', screen: ''},
        {key: 'A woman can\'t do just anything with her body.', color: 'red', screen: ''},
        {key: 'The right not to help others doesn\'t imply a right to kill the fetus.', color: 'red', screen: ''},
        {key: 'Consent to sex is consent to pregnancy.', color: 'red', screen: ''},
        {key: 'You don\'t get to separately consent to the effects of an action.', color: 'red', screen: ''}
    ],
    [
        {key: 'Abortion ends a life.', color: 'red', screen: 'EndsLife'}
    ],
    [
        {key: 'Life begins at conception.', color: 'red', screen: 'LifeConcep'},
        {key: 'Human life begins at conception.', color: 'red', screen: 'HumConcep'},
        {key: 'The life of a human organism begins at conception.', color: 'red', screen: 'OrgConcep'}
    ],
    [
        {key: 'But surely I\'m not the zygote I came from.', color: 'blue', screen: 'NotZygote'},
        {key: 'I define "life" differently.', color: 'blue', screen: ''}
    ],
    [
        {key: 'But surely I\'m not the zygote I came from.', color: 'blue', screen: 'NotZygote'},
        {key: 'I define "life" differently.', color: 'blue', screen: ''}
    ],
    [
        {key: 'But surely I\'m not the zygote I came from.', color: 'blue', screen: 'NotZygote'},
        {key: 'I define "life" differently.', color: 'blue', screen: ''}
    ],
    [
        {key: 'The zygote I came from wasn\'t a complete, uniquely individuated organism.', color: 'blue', screen: ''},
        {key: 'It wasn\'t a person.', color: 'blue', screen: ''},
        {key: 'It wasn\'t the same person I am.', color: 'blue', screen: ''},
        {key: 'Zygotes don\'t exist.', color: 'blue', screen: ''},
        {key: 'There is no "I."', color: 'blue', screen: ''}
    ],
    [
        {key: 'It\'s motivated by an arbitrary exclusion of unborn children from the category of persons, akin to the historical exclusion of women and slaves. And consistency may require the exclusion of other precious human beings.', color: 'red', screen: ''}, 
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''}
    ],
    [
        {key: '.', color: 'blue', screen: ''}, 
        {key: '.', color: 'blue', screen: ''}, 
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''}
    ],
    [
        {key: 'Then it\'s okay to kill toddlers or newborns.', color: 'red', screen: ''}, 
        {key: 'The life of a human organism doesn\'t begin at conception.', color: 'blue', screen: ''}, 
        {key: 'The fetus isn\'t a person.', color: 'blue', screen: ''},
        {key: 'The fetus is a parasite.', color: 'blue', screen: ''},
        {key: 'My body, my choice—A woman\'s body is her sovereign zone.', color: 'blue', screen: ''},
        {key: 'Women have the right to refuse the use of their bodies.', color: 'blue', screen: ''},
        {key: 'The mother doesn\'t owe the fetus.', color: 'blue', screen: 'NoDebt'}
    ],
    [
        {key: 'Causing a being to exist can\'t constitute an uncompensated harm.', color: 'blue', screen: ''},
        {key: 'The mother didn\'t, even tacitly, make a binding agreement to stay pregnant just by willingly engaging in sex.', color: 'blue', screen: ''}
    ],
    [
        {key: 'It can\'t be any more wrong than refusing to donate bone marrow to one\'s anemic cousin.', color: 'blue', screen: ''},
        {key: 'It can\'t be any more wrong than vaporizing a falling person who would otherwise survive but, through no fault of their own, non-lethally crush the shit out of you.', color: 'blue', screen: ''},
        {key: 'The fetus has lower moral status than a human.', color: 'blue', screen: ''}, 
        {key: 'The fetus has lower moral status than a person.', color: 'blue', screen: ''},
        {key: 'The fetus isn\'t mature enough for death to seriously harm it.', color: 'blue', screen: ''},
        {key: 'The biological parents are mature enough for pregnancy to seriously harm them.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''}
    ],
    [
        {key: 'As shitty as it is if your only hope of survival lets you die, it\'s not the government\'s place to prevent that.', color: 'blue', screen: ''}, 
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''}
    ],
    [
        {key: '.', color: 'blue', screen: ''}, 
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''}
    ],
    [
        {key: '.', color: 'blue', screen: ''}, 
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''}
    ],
    [
        {key: 'Abortion isn\'t wrong.', color: 'blue', screen: 'AbortNotWrong'},
        {key: 'It\'s not very wrong.', color: 'blue', screen: 'AbortNotVeryWrong'},
        {key: 'Its wrongness is of a tolerable kind.', color: 'blue', screen: 'AbortNotRelevantlyWrong'},
        {key: 'Legalizing abortion is practical.', color: 'blue', screen: 'AbortPractical'},
    ],
    [
        {key: 'Then terminating ectopic pregnancies should be illegal.', color: 'blue', screen: ''},
        {key: 'Then refusing to help someone who will otherwise die should be illegal.', color: 'blue', screen: ''},
        {key: 'Abortion is wrong.', color: 'red', screen: 'AbortWrong'}, 
        {key: 'Abortion is very wrong.', color: 'red', screen: 'AbortVeryWrong'},
        {key: 'Abortion\'s wrongness is of an intolerable kind.', color: 'red', screen: 'AbortRelevantlyWrong'},
        {key: 'Legalizing abortion is impractical.', color: 'red', screen: 'AbortImpractical'}
    ], 
    [
        {key: '.', color: 'blue', screen: ''}, 
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''}
    ],
    [
        {key: '.', color: 'blue', screen: ''}, 
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''},
        {key: '.', color: 'blue', screen: ''}
    ]
]

const screenToData = new Map()
for (var i = 0; i < screens.length; i++)
    screenToData.set(screens[i], dataSets[i])

const lists = Array()
var j = 0

const Screen = (navigation, screen) => {
    lists.push(<FlatList
        style={leaves.includes(screen) ? styles.leafList : {}}
        data={screenToData.get(screen)}
        renderItem={({item}) => 
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                <Text style={[styles.item, 
                        {boxShadow: '2px 2px 7px ' + item.color + ', 2px 2px 10px black'}]}>
                            {item.key}
                </Text>
            </TouchableOpacity>}
       />)

    if (!leaves.includes(screen))
        return (
            <LinearGradient colors={purples} locations={locations1} style={styles.container}>
                {lists[j++]}
            </LinearGradient>
        )
    return (
        <LinearGradient colors={purples} locations={locations1} style={[styles.container, {alignItems: 'center'}]}>
            <LinearGradient colors={reds} locations={locations2} style={[styles.innerContainer]}>
                <Text style={styles.para}>
                    The fusion of sperm and egg immediately produces a being made of cells—just one cell at first—which
                    performs all the functions essential to life: growth, homeostasis.
                </Text>
            </LinearGradient>
            {lists[j++]}
        </LinearGradient>
    )
}

const fun = (screen) => ({navigation}) => {return Screen(navigation, screen)}

const [Home, AbortWrong, Kill, EndsLife, LifeConcep, HumConcep, OrgConcep, NotZygote, AbortVeryWrong, 
    AbortRelevantlyWrong, AbortNotWrong, NoDebt, AbortNotVeryWrong, AbortNotRelevantlyWrong, 
    AbortPractical, AbortImpractical, AbortLegal, AbortIllegal, NoRoe, GoRoe] =
    [fun('Home'), fun('AbortWrong'), fun('Kill'), fun('EndsLife'), fun('LifeConcep'), fun('HumConcep'), fun('OrgConcep'), 
    fun('NotZygote'), fun('AbortVeryWrong'), fun('AbortRelevantlyWrong'), fun('AbortNotWrong'), 
    fun('NoDebt'), fun('AbortNotVeryWrong'), fun('AbortNotRelevantlyWrong'), fun('AbortPractical'), 
    fun('AbortImpractical'), fun('AbortLegal'), fun('AbortIllegal'), fun('NoRoe'), fun('GoRoe')]

const screenComps = [Home, AbortWrong, Kill, EndsLife, LifeConcep, HumConcep, OrgConcep, NotZygote, AbortVeryWrong, 
    AbortRelevantlyWrong, AbortNotWrong, NoDebt, AbortNotVeryWrong, AbortNotRelevantlyWrong, 
    AbortPractical, AbortImpractical, AbortLegal, AbortIllegal, NoRoe, GoRoe]

/* const RenderScreens = ({screenProps}) => {return screenProps && 
       screenProps.map((screenProp) => 
       <Stack.Screen name={screenProp[0]} component={screenProp[1]} options={{title: screenProp[2]}} />)} */

/* const screenElems = []
for (var i = 0; i < dataSets.length; i++)
    for (var j = 0; j < dataSets[i].length; j++) {
        const vals = Object.values(dataSets[i][j])
        if (vals[2] == screens[i])
            screenElems.push(<Stack.Screen name={screens[i]} component={screenComps[i]} options={{title: vals[0]}} key={i} />)
    } */

const Contents = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Home' 
            screenOptions={{headerStyle: {backgroundColor: 'black'}, headerTitleStyle: {color: 'white', fontSize: 16, maxWidth: 500}, headerTintColor: 'white'}}>
            {screenElems}
        </Stack.Navigator>
    )
}

export default Contents