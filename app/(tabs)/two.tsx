import { Text, View, TouchableOpacity, ScrollView } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View className="flex-1 bg-light-primary dark:bg-dark-primary">
      {/* Header */}
      <View className="bg-snap-ghost dark:bg-dark-secondary px-snap-md py-snap-lg pt-snap-2xl">
        <Text className="text-snap-2xl font-bold text-light-text dark:text-dark-text text-center">
          🎨 Design System
        </Text>
        <Text className="text-snap-sm text-light-text-secondary dark:text-dark-text-secondary text-center mt-snap-xs">
          Snapchat Design Tokens
        </Text>
      </View>

      <ScrollView className="flex-1 px-snap-md py-snap-lg">
        {/* Color Palette */}
        <Text className="text-snap-lg font-bold text-light-text dark:text-dark-text mb-snap-md">
          Color Palette
        </Text>
        
        <View className="flex-row flex-wrap gap-snap-sm mb-snap-xl">
          <View className="items-center">
            <View className="w-16 h-16 bg-snap-yellow rounded-snap-md mb-snap-xs" />
            <Text className="text-snap-xs text-light-text-secondary dark:text-dark-text-secondary">Yellow</Text>
          </View>
          <View className="items-center">
            <View className="w-16 h-16 bg-snap-blue rounded-snap-md mb-snap-xs" />
            <Text className="text-snap-xs text-light-text-secondary dark:text-dark-text-secondary">Blue</Text>
          </View>
          <View className="items-center">
            <View className="w-16 h-16 bg-snap-purple rounded-snap-md mb-snap-xs" />
            <Text className="text-snap-xs text-light-text-secondary dark:text-dark-text-secondary">Purple</Text>
          </View>
          <View className="items-center">
            <View className="w-16 h-16 bg-snap-pink rounded-snap-md mb-snap-xs" />
            <Text className="text-snap-xs text-light-text-secondary dark:text-dark-text-secondary">Pink</Text>
          </View>
        </View>

        {/* Typography Scale */}
        <Text className="text-snap-lg font-bold text-light-text dark:text-dark-text mb-snap-md">
          Typography
        </Text>
        
        <View className="bg-light-secondary dark:bg-dark-secondary rounded-snap-lg p-snap-md mb-snap-xl">
          <Text className="text-snap-4xl font-bold text-light-text dark:text-dark-text mb-snap-xs">Heading XL</Text>
          <Text className="text-snap-2xl font-bold text-light-text dark:text-dark-text mb-snap-xs">Heading Large</Text>
          <Text className="text-snap-lg font-bold text-light-text dark:text-dark-text mb-snap-xs">Heading Medium</Text>
          <Text className="text-snap-base text-light-text dark:text-dark-text mb-snap-xs">Body Text</Text>
          <Text className="text-snap-sm text-light-text-secondary dark:text-dark-text-secondary mb-snap-xs">Small Text</Text>
          <Text className="text-snap-xs text-light-text-secondary dark:text-dark-text-secondary">Caption</Text>
        </View>

        {/* Button Examples */}
        <Text className="text-snap-lg font-bold text-light-text dark:text-dark-text mb-snap-md">
          Buttons
        </Text>
        
        <View className="space-y-snap-sm mb-snap-xl">
          <TouchableOpacity className="bg-snap-yellow rounded-snap-full py-snap-md px-snap-xl">
            <Text className="text-snap-base font-bold text-snap-black text-center">Primary Button</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="bg-snap-blue rounded-snap-full py-snap-md px-snap-xl">
            <Text className="text-snap-base font-bold text-snap-white text-center">Secondary Button</Text>
          </TouchableOpacity>
          
          <TouchableOpacity className="border-2 border-light-border dark:border-dark-border rounded-snap-full py-snap-md px-snap-xl">
            <Text className="text-snap-base font-bold text-light-text dark:text-dark-text text-center">Outline Button</Text>
          </TouchableOpacity>
        </View>

        {/* Card Examples */}
        <Text className="text-snap-lg font-bold text-light-text dark:text-dark-text mb-snap-md">
          Cards
        </Text>
        
        <View className="bg-light-secondary dark:bg-dark-secondary rounded-snap-xl p-snap-lg shadow-snap-md">
          <Text className="text-snap-xl font-bold text-light-text dark:text-dark-text mb-snap-sm">
            🎯 Feature Card
          </Text>
          <Text className="text-snap-base text-light-text-secondary dark:text-dark-text-secondary">
            This card demonstrates the Snapchat design system with proper spacing, typography, and colors.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
