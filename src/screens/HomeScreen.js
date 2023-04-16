import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


export default function HomeScreen() {
	const navigation = useNavigation();


	return (
		<View>
			<Text style={styles.text}> HomeScreen </Text>

			<TouchableOpacity 
				onPress={() => navigation.navigate("Stack")}
				style={styles.btnRedirect}>
				<Text style={styles.textBtn}> Go to stack </Text>
			</TouchableOpacity>

		</View>
	)

}


const styles = StyleSheet.create({
	text: {
		fontSize: 30,
		textAlign: 'center',
		marginTop: "20%"
	},
	btnRedirect: {
		backgroundColor: "purple",
		padding: 10,
		marginTop: "20%",
		width: "50%",
		alignSelf: "center",
		borderRadius: 10
	},
	textBtn: {
		fontSize: 15, 
		textAlign: "center",
		color: "white"
	}
});
