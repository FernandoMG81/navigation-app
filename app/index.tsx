import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Redirect } from 'expo-router'

const App = () => {

  return <Redirect href='/tabs' />

  // return (
  //   <SafeAreaView>
  //     <View className='mt-6 mx-2.5 bg-white'>
  //       <Text className='text-5xl'
  //         style={{ fontFamily: 'WorkSans-Black'}}>Hola mundo</Text>
  //       <Text className='text-4xl text-primary font-work-black'>Hola mundo</Text>
  //       <Text className='text-3xl text-secondary font-work-medium'>Hola mundo</Text>
  //       <Text className='text-2xl text-secondary-100 font-work-light'>Hola mundo</Text>
  //       <Text className='text-xl text-tertiary'>Hola mundo</Text>

  //       <Link href='/products'>Productos</Link>
  //     </View>
  //   </SafeAreaView>
  // )
}

export default App