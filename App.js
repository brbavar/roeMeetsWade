// import {StatusBar} from 'expo-status-bar'
import 'expo-dev-client'
import {NavigationContainer} from '@react-navigation/native'
import Contents from './Contents'
/* import AppLoading from 'expo-app-loading'
import { useFonts } from 'expo-font' */

import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

import "react-native-get-random-values";
import "react-native-url-polyfill/auto";
import {
  S3Client,
  CreateBucketCommand,
  DeleteBucketCommand,
} from '@aws-sdk/client-s3';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-provider-cognito-identity';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export default function App() {
  /* let [fontsLoaded] = useFonts({
    'Montserrat': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
  })

  if (!fontsLoaded)
    return <AppLoading /> */

    const [bucketName, setBucketName] = useState('');
    const [successMsg, setSuccessMsg] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
  
    // Replace REGION with the appropriate AWS Region, such as 'us-east-1'.
    const region = 'us-east-2';
    const client = new S3Client({
      region,
      credentials: fromCognitoIdentityPool({
        client: new CognitoIdentityClient({ region }),
        // Replace IDENTITY_POOL_ID with an appropriate Amazon Cognito Identity Pool ID for, such as 'us-east-1:xxxxxx-xxx-4103-9936-b52exxxxfd6'.
        identityPoolId: 'us-east-2:13000871-1182-4082-a238-bbc512f3dd1b',
      }),
    });
  
    const createBucket = async () => {
      setSuccessMsg('');
      setErrorMsg('');
  
      try {
        await client.send(new CreateBucketCommand({ Bucket: bucketName }));
        setSuccessMsg(`Bucket '${bucketName}' created.`);
      } catch (e) {
        setErrorMsg(e);
      }
    };
  
    const deleteBucket = async () => {
      setSuccessMsg('');
      setErrorMsg('');
  
      try {
        await client.send(new DeleteBucketCommand({ Bucket: bucketName }));
        setSuccessMsg(`Bucket '${bucketName}' deleted.`);
      } catch (e) {
        setErrorMsg(e);
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={{ color: 'green' }}>
          {successMsg ? `Success: ${successMsg}` : ``}
        </Text>
        <Text style={{ color: 'red' }}>
          {errorMsg ? `Error: ${errorMsg}` : ``}
        </Text>
        <View>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setBucketName(text)}
            autoCapitalize={'none'}
            value={bucketName}
            placeholder={'Enter Bucket Name'}
          />
          <Button
            backroundColor='#68a0cf'
            title='Create Bucket'
            onPress={createBucket}
          />
          <Button
            backroundColor='#68a0cf'
            title='Delete Bucket'
            onPress={deleteBucket}
          />
        </View>
      </View>
    );
  /* return (
    <NavigationContainer>
      <Contents />
    </NavigationContainer>
  ) */
}