import { useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Button,
	Alert,
	ScrollView,
	FlatList,
	Pressable,
} from 'react-native';

export default function App() {
	const [enteredText, setEnteredText] = useState('');
	const [goal, setGoal] = useState([]);

	const handleGoalText = (enteredText) => {
		setEnteredText(enteredText);
		console.log(enteredText);
	};
	const addGoal = () => {
		if (enteredText !== '') {
			setGoal((goal) => [...goal, enteredText]);
			setEnteredText('');
		}
	};

	const deleteGoal = (index) => {
		const newGoal = [...goal];
		newGoal.splice(index, 1);
		setGoal([...newGoal]);
	};

	const showConfirmDialog = (index) => {
		return Alert.alert(
			'Are your sure?',
			'Are you sure you want to remove this Goal?',
			[
				{
					text: 'Yes',
					onPress: () => {
						deleteGoal(index);
					},
				},
				{
					text: 'No',
				},
			]
		);
	};

	return (
		<View style={styles.appContainer}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textwidth}
					placeholder='Your Goal'
					value={enteredText}
					onChangeText={handleGoalText}
				/>
				<Button title='Add Goal' onPress={addGoal} />
			</View>
			<View style={styles.goalContainer}>
				<FlatList
					data={goal}
					renderItem={(itemData, key) => {
						return (
							<Pressable onPress={() => showConfirmDialog(itemData.key)}>
								<Text style={styles.goalText} key={itemData.key}>
									{itemData.item}
								</Text>
							</Pressable>
						);
					}}
					alwaysBounceVertical={false}
				></FlatList>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	appContainer: {
		flex: 1,
		padding: 50,
		paddingHorizontal: 16,
	},
	inputContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginRight: 2,
		padding: 8,
		paddingBottom: 24,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
	},
	goalContainer: {
		flex: 5,
	},
	textwidth: {
		borderWidth: 1,
		borderColor: '#ccc',
		width: '70%',
		marginRight: 8,
		padding: 10,
	},
	goalText: {
		padding: 10,
		borderWidth: 1,
		marginTop: 12,
		borderColor: '#ccc',
		backgroundColor: '#5e0aac',
		color: '#fff',
		borderRadius: 6,
	},
});
