import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
import React from 'react'
import { themeOptions } from '@/theme'
import { useDispatch } from 'react-redux';
import { applyTheme } from '@/store/features/restaurentSlice';
import useCustomTheme from '@/theme/useCustomTheme';

export default function Preference() {
  const dispatch = useDispatch();
  const themeColor = useCustomTheme();
  return (
    <View className='mx-5'>
      <Text className='text-3xl font-bold border-b-2'>Themes</Text>
      <View className='my-2 flex-row'>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
        {themeOptions.map((themeOption) => (
          <TouchableOpacity
            key={themeOption.id}
            onPress={() => dispatch(applyTheme(themeOption))}
            className='mr-2 h-20 w-20 rounded-full border-2'
            style={{ backgroundColor: `rgba(${themeOption.bgColorOption},1)`, boxShadow: themeColor.shadowA }}>
          </TouchableOpacity>
        ))}
        </ScrollView>
      </View>
    </View>
  )
}