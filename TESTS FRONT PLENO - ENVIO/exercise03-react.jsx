/**
 * Estado não sincroniza com prop externa
 * 
 * alterei o valor dentro do setvalue para value, dessa forma ele inicia como estano inital state
 */
export function MyComponent({ initialValue }) {
	const [value, setValue] = useState(initialValue)

	return (
		<>
			<input
				value={value}
				onChange={(e) => setValue(value)}
			/>
		</>
	)
}