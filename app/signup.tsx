import React from 'react';
import tw from 'twrnc';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { ImagesAssets } from '@/assets';
import { Text } from '@/components/';



export default function LoginScreen() {
    const [isLoading, setIsLoading] = React.useState(false)

    return (
        <KeyboardAvoidingView style={tw`flex-1 px-4 mt-14`} enabled behavior={Platform.OS === 'ios' ? 'padding' : "height"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={tw``}>
                    <Image source={ImagesAssets.logo} style={tw`w-60 h-12 mx-auto mb-6 mt-8`} />
                    <View style={tw`my-12`}>
                        <View style={tw`mb-4`}>
                            <Text style={tw`text-2xl mb-2 font-medium`}>Create your account</Text>
                            <Text style={tw`text-base  text-slate-400`}>Start crafting compelling blog posts that engage and captivate
                                readers from the very beginning.</Text>
                        </View>
                        <View style={tw`mb-4`}>
                            <Text style={tw`mb-2`}>Username</Text>
                            <TextInput style={tw`outline-none block w-full p-2 border-solid border-2 border-black rounded-lg`} placeholder='Enter your username' />
                        </View>
                        <View style={tw`mb-4`}>
                            <Text style={tw`mb-2`}>Email</Text>
                            <TextInput style={tw`outline-none block w-full p-2 border-solid border-2 border-black rounded-lg`} placeholder='Enter your email' />
                        </View>
                        <View style={tw`mb-4`}>
                            <Text style={tw`mb-2`}>Password</Text>
                            <TextInput style={tw`outline-none block w-full p-2 border-solid border-2 border-black rounded-lg`} placeholder='Enter your password' />
                        </View>
                        <Pressable style={tw`cursor-pointer mb-2 block w-full p-4 bg-violet-700 text-white rounded-lg hover:bg-black hover:text-white ${isLoading ? 'opacity-50' : ''}`}>
                            <Text style={tw`text-white text-center`}>Sign up</Text>
                        </Pressable>
                        <Text style={tw`text-center`}>Already have an account? <Link href="/" style={tw`text-violet-700 `}>login</Link></Text>


                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}