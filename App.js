import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import RazorpayCheckout from "react-native-razorpay";

export default function App() {
  const openRazorpay = () => {
    console.log("pressed");
    const options = {
      description: "Adding to Wallet",
      currency: "INR",
      name: "Sunil",
      key: "",//Add Your Razor Pay developer Account Test Key Here
      amount: "100",
      prefill: {
        email: "testexpo@razorpay.com",
        contact: "99999999",
        name: "Razorpay Test Payment",
      },
      theme: { color: "#f00" },
    };
    console.log("Opening", options);
    RazorpayCheckout.open(options)
      .then((data) => {
        // handle success
        alert(`Success: ${data.razorpay_payment_id}`);
      })
      .catch((error) => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };
  return (
    <View style={styles.container}>
      <Pressable onPress={openRazorpay}>
        <Text>PAY NOW</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
