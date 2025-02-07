import { Button, ButtonSpinner, ButtonText } from "@/components/ui/button";

import React from "react";
import { View } from "react-native";

export default function Index() {
  const [loading, setLoading] = React.useState(false);
  const handlePress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <View className="flex-1 justify-center items-center">
      <View className="w-full max-w-sm mx-auto">
        <Button
          action={"primary"}
          variant={"solid"}
          size={"lg"}
          isDisabled={false}
          className="w-full"
          onPress={handlePress}
        >
          {loading ? <ButtonSpinner /> : <ButtonText>Click me</ButtonText>}
        </Button>
      </View>
    </View>
  );
}
