import { Text, View, TouchableOpacity } from 'react-native';

export default function TabOneScreen() {
  return (
    <View className="flex-1 bg-light-primary dark:bg-dark-primary">
      {/* Snapchat-style Header */}
      <View className="bg-snap-yellow px-snap-md py-snap-lg pt-snap-2xl">
        <Text className="text-snap-2xl font-bold text-snap-black text-center">
          👻 Snapchat Style
        </Text>
        <Text className="text-snap-sm text-snap-black text-center mt-snap-xs">
          Design Tokens Demo
        </Text>
      </View>

      {/* Content Area */}
      <View className="flex-1 px-snap-md py-snap-lg">
        {/* Story Cards */}
        <Text className="text-snap-lg font-bold text-light-text dark:text-dark-text mb-snap-md">
          Stories
        </Text>
        
        <View className="flex-row space-x-snap-sm mb-snap-xl">
          <View className="items-center">
            <View className="w-16 h-16 bg-snap-blue rounded-snap-full mb-snap-xs" />
            <Text className="text-snap-xs text-light-text-secondary dark:text-dark-text-secondary">Me</Text>
          </View>
          <View className="items-center">
            <View className="w-16 h-16 bg-snap-purple rounded-snap-full mb-snap-xs" />
            <Text className="text-snap-xs text-light-text-secondary dark:text-dark-text-secondary">Friend</Text>
          </View>
          <View className="items-center">
            <View className="w-16 h-16 bg-snap-pink rounded-snap-full mb-snap-xs" />
            <Text className="text-snap-xs text-light-text-secondary dark:text-dark-text-secondary">Family</Text>
          </View>
        </View>

        {/* Chat Cards */}
        <TouchableOpacity className="bg-light-secondary dark:bg-dark-secondary rounded-snap-lg p-snap-md mb-snap-sm shadow-snap-sm">
          <View className="flex-row items-center">
            <View className="w-12 h-12 bg-snap-green rounded-snap-full mr-snap-sm" />
            <View className="flex-1">
              <Text className="text-snap-base font-bold text-light-text dark:text-dark-text">Best Friend</Text>
              <Text className="text-snap-sm text-light-text-secondary dark:text-dark-text-secondary">Hey! Check this out 📸</Text>
            </View>
            <Text className="text-snap-xs text-light-text-secondary dark:text-dark-text-secondary">2m</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity className="bg-light-secondary dark:bg-dark-secondary rounded-snap-lg p-snap-md mb-snap-sm shadow-snap-sm">
          <View className="flex-row items-center">
            <View className="w-12 h-12 bg-snap-orange rounded-snap-full mr-snap-sm" />
            <View className="flex-1">
              <Text className="text-snap-base font-bold text-light-text dark:text-dark-text">Team Snap</Text>
              <Text className="text-snap-sm text-light-text-secondary dark:text-dark-text-secondary">🔥 Snap streak!</Text>
            </View>
            <Text className="text-snap-xs text-light-text-secondary dark:text-dark-text-secondary">5m</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
