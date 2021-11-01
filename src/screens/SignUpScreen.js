import React, { useState} from "react";
import { View, StyleSheet} from 'react-native';
import { Text, Input, Button } from'react-native-elements';
import Spacer from "../components/Spacer";

const SignUpScreen = ( {navigation}) => {
    const [email,setEmail] = useState("");
    const [pwd,setPWD]=useState("");
    return <View style={styles.container}>
        <Spacer>
            <Text h3>Sign Up for Tracker</Text>
        </Spacer>
        <Input
            label="Email" 
            value={email} 
            // onChangeText={(newEmail)=>setEmail(newEmail)}
            onChangeText={setEmail}
            autoCorrect={false}
            autoCapitalize="none"
        />
        <Spacer />
        <Input 
            label="Password"
            value={pwd} 
            // onChangeText={(newPass)=>setPWD(newPass)}
            onChangeText={setPWD}
            autoCorrect={false}
            autoCapitalize="none"
            // secureTextEntry={true}
            secureTextEntry
            />
        <Spacer>
        <Button 
            title="Sign up" 
            onPress={()=> navigation.navigate("SignIn")}
        />
        </Spacer>
    </View>
    
    
}

SignUpScreen.navigationOptions = () => {
    return {
      headerShown: false,
    };
  };

const styles=StyleSheet.create({
    container : {
        // use this initially to layout content/location
        // borderColor:'red',
        // borderWidth:10,
        flex:1,
        justifyContent:'center',
        marginBottom:250
    }

});

export default SignUpScreen;