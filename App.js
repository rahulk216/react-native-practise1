import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput style={styles.textwidth} placeholder='Your Goal' />
				<Button title='Add Goal' />
			</View>
			<View>
				<View>
					<Text>List of goals....</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		padding: 50,
	},
	inputContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginRight:2
	},
	textwidth: {
		borderWidth: 1,
		borderColor: '#ccc',
		width: '70%',
		marginRight: 8
	},
});
