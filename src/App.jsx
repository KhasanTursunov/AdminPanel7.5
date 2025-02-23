import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import RouterMain from './Router'

function App() {
	const [count, setCount] = useState(0)

	return (
		<>
			<RouterMain />
		</>
	)
}

export default App
