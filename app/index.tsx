import React from 'react';
import tw from 'twrnc';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { ImagesAssets } from '@/assets';
import { ImageButton, Text } from '@/components/';



export default function LoginScreen() {
    const [isLoading, setIsLoading] = React.useState(false)

    return (
        <KeyboardAvoidingView style={tw`px-4 flex-1 mt-14`} enabled behavior={Platform.OS === 'ios' ? 'padding' : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={tw``}>
            <Image source={ImagesAssets.logo} style={tw`mt-8 w-60 h-12 mx-auto mb-6`} />
            <View style={tw`justify-center`}>
                <View style={tw`mb-4`}>
                    <Text style={tw`text-2xl mb-2 font-medium`}>Welcome back</Text>
                    <Text style={tw`text-base  text-slate-400`}>Let's get now you logged in so you can jump right back into sharing your brilliant ideas and engaging stories</Text>
                </View>
                  
                        <View style={tw``}>
                            <View style={tw`mb-4`}>
                                <Text style={tw`mb-2`}>Email</Text>
                                <TextInput style={tw`outline-none block w-full p-2 border-solid border-2 border-black rounded-lg`} placeholder='Enter your email' />
                            </View>
                            <View style={tw`mb-4`}>
                                <Text style={tw`mb-2`}>Password</Text>
                                <TextInput style={tw`outline-none block w-full p-2 border-solid border-2 border-black rounded-lg`} placeholder='Enter your password' />
                            </View>
                            <Text style={tw`mb-4 text-right`}>
                                <Link href="/forgotpassword">
                                    Forgot Password?
                                </Link>
                            </Text>
                            <Pressable style={tw`cursor-pointer mb-2 block w-full p-4 bg-violet-700 text-white rounded-lg hover:bg-black hover:text-white ${isLoading ? 'opacity-50' : ''}`}>
                                <Text style={tw`text-white text-center`}>Log in</Text>
                            </Pressable>
                            <Text style={tw`text-center`}>Dont have an account? <Link href="/signup" style={tw`text-violet-700 `}>Create one</Link></Text>
                            <View style={tw`mt-10`}>
                                <Text>
                                    or continue with ________
                                </Text>
                                <View style={tw`flex-row align-center justify-center mt-8 gap-5`}>
                                    <ImageButton onPress={undefined} src={ImagesAssets.google} btnStyle={undefined} arialabel={'login with google'} imageStyle={tw`w-10 h-10`} />
                                    <ImageButton onPress={undefined} src={ImagesAssets.github} btnStyle={undefined} arialabel={'login with google'} imageStyle={tw`w-10 h-10`} />
                                </View>
                            </View>
                        </View>
            </View>
        </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}