# Code Splitting

## Description
This is an exercise in which **code splitting** is used to conditionally import "heavy" code only if/when needed.


**useToggle custom hook:**
```
import React from 'react'
import useEffectOnUpdate from './useEffectOnUpdate'

export default function useToggle({
	initialValue = false,
	onToggle = () => {},
}) {
	const [on, setOn] = React.useState(initialValue)

	function toggle() {
		setOn((prevOn) => !prevOn)
	}

	useEffectOnUpdate(onToggle, [on])

	return [on, toggle]
}
```
  
## Technologies
- React

## Live link
This implementation is not deployed anywhere. 
