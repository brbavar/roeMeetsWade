import React, { ReactNode } from 'react'
import {FlatList, TouchableOpacity, StyleSheet, Text, View, TextStyle, ViewStyle, StyleProp} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {easeGradient} from 'react-native-easing-gradient'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import {CardStyleInterpolators} from '@react-navigation/stack'
import {NavigationScreenConfigProps, NavigationScreenProp} from 'react-navigation'

import 'react-native-get-random-values'
import 'react-native-url-polyfill/auto'
import {
  S3Client,
  GetObjectCommand,
  GetObjectOutput,
  GetObjectCommandOutput
  /* CreateBucketCommand,
  DeleteBucketCommand, */
} from '@aws-sdk/client-s3'
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity'
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity'
import { Readable, Stream } from 'stream'
import getStream from 'get-stream'

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
        borderRadius: 40, // '40px',
        maxWidth: '700px'
    } as ViewStyle,
    para: {
        color: 'white',
        fontWeight: '700'
    },
    leafList: {
        // marginTop: -20
    },
    item: {
        padding: 10,
        fontSize: 18,
        fontWeight: '500',
        height: 'auto',
        maxWidth: 600,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 5, // '5px',
        backgroundColor: 'rgb(32, 32, 32)',
        color: 'white',
        textAlign: 'left',
        textShadow: '2px 6px 5px black'
    }
})

var purples: string[], locations1: number[]
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
    for (var i = 0; i < locations.length; i++)  // Had locations.size before
        locations1.push(locations[i])
}

var reds: string[], locations2: number[]
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
    for (var i = 0; i < locations.length; i++)  // Had locations.size before
        locations2.push(locations[i])
}

var blues: string[], locations3: number[]
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
    for (var i = 0; i < locations.length; i++)  // Had locations.size before
        locations3.push(locations[i])
}

const Stack = createNativeStackNavigator()

const region = 'us-east-2'
const client = new S3Client({
    region,
    credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region }),
        identityPoolId: 'us-east-2:13000871-1182-4082-a238-bbc512f3dd1b'
    })
})

const json: GetObjectCommandOutput = await client.send(new GetObjectCommand({ Bucket: 'abortion-claims', Key: 'data-sets.json' }))
const bodyContents: string = (await getStream.buffer(json.Body as Stream)).toString()
const screenToData: object = JSON.parse(bodyContents)

/* const getJSON = async (screenToData: any) => {
    const streamToString = (stream: Readable): Promise<string> =>
      new Promise((resolve, reject) => {
        const chunks: Uint8Array[] = []
        stream.on('data', (chunk: Uint8Array) => chunks.push(chunk))
        stream.on('error', reject)
        stream.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
      })

    try {
        const json: any = await client.send(new GetObjectCommand({ Bucket: 'abortion-claims', Key: 'data-sets.json' }))
        const bodyContents: string = await streamToString(json.Body)
        alert(bodyContents)
        screenToData = JSON.parse(bodyContents)
        alert(typeof(screenToData))
    } catch (e) {
        alert(e)
        console.log('Error', e)
    }
} */

const screens = ['Home', 'AbortWrong', 'Kill', 'EndsLife', 'LifeConcep', 'HumConcep', 'OrgConcep', 
    'NotZygote', 'AbortVeryWrong', 'AbortRelevantlyWrong', 'AbortNotWrong', 'NoDebt', 'AbortNotVeryWrong', 
    'Immature', 'AbortNotRelevantlyWrong', 'AbortPractical', 'AbortImpractical', 'AbortLegal', 
    'AbortIllegal', 'NoRoe', 'GoRoe']

const specialScreens = ['Home']

const leaves = ['LifeConcep']

const branches = screens.filter(screen => 
    { 
        return !leaves.includes(screen) && !specialScreens.includes(screen) 
    })

const paras = [
    'The fusion of sperm and egg immediately produces a being made of cells—just one cell at first—'
    + 'which performs all the functions essential to life: growth, homeostasis.'
]

/* const screenToData = new Map()
for (var i = 0; i < screens.length; i++)
    screenToData.set(screens[i], dataSets[i]) */

const leafToPara = new Map()
for (var i = 0; i < leaves.length; i++)
    leafToPara.set(leaves[i], paras[i])

const lists: ReactNode[] = []
var j = 0

const Screen = (navigation: NavigationScreenProp<any,any>, screen: string) => {
    lists.push(<FlatList
        style={leaves.includes(screen) ? styles.leafList : {}}
        data={[{'key': '', 'color': '', 'screen': ''}]/*screenToData.Home[0].key*/}
        renderItem={({item}) => 
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
                <Text style={[styles.item, 
                        {boxShadow: `2px 2px 7px ${item.color}, 2px 2px 10px black`} as TextStyle]}>
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
                    {leafToPara.get(screen)}
                </Text>
            </LinearGradient>
            {lists[j++]}
        </LinearGradient>
    )
}

const fun = (screen: string) => ({navigation}: any) => {return Screen(navigation, screen)}

const [Home, AbortWrong, Kill, EndsLife, LifeConcep, HumConcep, OrgConcep, NotZygote, AbortVeryWrong, 
    AbortRelevantlyWrong, AbortNotWrong, NoDebt, AbortNotVeryWrong, Immature, AbortNotRelevantlyWrong, 
    AbortPractical, AbortImpractical, AbortLegal, AbortIllegal, NoRoe, GoRoe] =
    [fun('Home'), fun('AbortWrong'), fun('Kill'), fun('EndsLife'), fun('LifeConcep'), fun('HumConcep'), fun('OrgConcep'), 
    fun('NotZygote'), fun('AbortVeryWrong'), fun('AbortRelevantlyWrong'), fun('AbortNotWrong'), 
    fun('NoDebt'), fun('AbortNotVeryWrong'), fun('Immature'), fun('AbortNotRelevantlyWrong'), fun('AbortPractical'), 
    fun('AbortImpractical'), fun('AbortLegal'), fun('AbortIllegal'), fun('NoRoe'), fun('GoRoe')]

const Contents = () => {
    return (
        <Stack.Navigator 
            initialRouteName='Home' 
            screenOptions={{headerStyle: {backgroundColor: 'black'}, headerTitleStyle: {color: 'white', fontSize: 16, maxWidth: 500} as StyleProp<Pick<TextStyle, 'fontWeight' | 'fontSize' | 'fontFamily'> & { color?: string | undefined; }>, headerTintColor: 'white'}}>
            
            <Stack.Screen name='Home' component={Home} options={{title: 'Welcome to Roe Meets Wade!', headerTitleStyle: {fontSize: 22}}} />
            
            <Stack.Screen name='AbortWrong' component={AbortWrong} options={{title: 'Abortion is wrong.'}} />
            <Stack.Screen name='Kill' component={Kill} options={{title: 'Abortion is killing.'}} />
            <Stack.Screen name='EndsLife' component={EndsLife} options={{title: 'Abortion ends a life.'}} />
            <Stack.Screen name='LifeConcep' component={LifeConcep} options={{title: 'Life begins at conception.'}} />
            <Stack.Screen name='HumConcep' component={HumConcep} options={{title: 'Human life begins at conception.'}} />
            <Stack.Screen name='OrgConcep' component={OrgConcep} options={{title: 'The life of a human organism begins at conception.'}} />
            <Stack.Screen name='NotZygote' component={NotZygote} options={{title: 'I\'m not the zygote I came from.'}} />
            
            <Stack.Screen name='AbortVeryWrong' component={AbortVeryWrong} options={{title: 'Abortion is very wrong.'}} />
            
            <Stack.Screen name='AbortRelevantlyWrong' component={AbortRelevantlyWrong} options={{title: 'Abortion\'s wrongness is of an intolerable kind.'}} />
            
            <Stack.Screen name='AbortNotWrong' component={AbortNotWrong} options={{title: 'It\'s okay to abort.'}} />
            <Stack.Screen name='NoDebt' component={NoDebt} options={{title: 'The mother doesn\'t owe the fetus.'}} />
            
            <Stack.Screen name='AbortNotVeryWrong' component={AbortNotVeryWrong} options={{title: 'Abortion isn\'t that wrong.'}} />
            <Stack.Screen name='Immature' component={Immature} options={{title: 'The fetus can\'t be seriously harmed.'}} />
            
            <Stack.Screen name='AbortNotRelevantlyWrong' component={AbortNotRelevantlyWrong} options={{title: 'Abortion\'s wrongness is of a tolerable kind.'}} />
            
            <Stack.Screen name='AbortPractical' component={AbortPractical} options={{title: 'Legalizing abortion is practical.'}} />
            
            <Stack.Screen name='AbortImpractical' component={AbortImpractical} options={{title: 'Legalizing abortion is impractical.'}} />
            
            <Stack.Screen name='AbortLegal' component={AbortLegal} options={{title: 'Abortion shouldn\'t be banned.'}} />
            
            <Stack.Screen name='AbortIllegal' component={AbortIllegal} options={{title: 'Abortion should be banned.'}} />
            
            <Stack.Screen name='NoRoe' component={NoRoe} options={{title: 'Good riddance, Roe!'}} />
            
            <Stack.Screen name='GoRoe' component={GoRoe} options={{title: 'Bring Roe back!'}} />

        </Stack.Navigator>
    )
}

export default Contents