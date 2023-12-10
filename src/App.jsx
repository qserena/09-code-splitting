import React from 'react'
import Product from './Product'
import productsData from './data'

const ProductsList = React.lazy(() => {
	return import('./ProductsList')
})

function App() {
	const [count, setCount] = React.useState(0)
	const [sort, setSort] = React.useState(false)
	const [darkMode, setDarkMode] = React.useState(false)
	const [selectedProduct, setSelectedProduct] = React.useState(null)

	function increment() {
		setCount((prevCount) => prevCount + 1)
	}

	function decrement() {
		setCount((prevCount) => prevCount - 1)
	}

	const sortedProducts = React.useMemo(() => {
		return [...productsData].sort((a, b) => a.name.localeCompare(b.name))
	}, [productsData])

	const visibleProducts = sort ? sortedProducts : productsData

	const productStyles = React.useMemo(() => {
		return {
			backgroundColor: darkMode ? '#2b283a' : 'whitesmoke',
			color: darkMode ? 'white' : '#2b283a',
		}
	}, [darkMode])

	const selectedStyles = {
		backgroundColor: '#93c47d',
	}

	function chooseProduct(id) {
		console.log('New product selected')
		setSelectedProduct(id)
	}
	return (
		<>
			<h1>The current count is {count}</h1>
			<button className="button" onClick={decrement}>
				-
			</button>
			<button className="button" onClick={increment}>
				+
			</button>
			<br />
			<br />
			<button className="button" onClick={() => setSort((prev) => !prev)}>
				{sort ? 'Unsort' : 'Sort'}
			</button>
			<br />
			<br />
			<button
				className="button"
				onClick={() => setDarkMode((prev) => !prev)}
			>
				{darkMode ? 'Light' : 'Dark'}
			</button>
			<br />
			<br />
			<div className="products-list">
				{visibleProducts.map((product) => {
					const isSelected = product.id === selectedProduct
					return (
						<Product
							key={product.id}
							product={product}
							style={
								isSelected
									? { ...productStyles, ...selectedStyles }
									: productStyles
							}
							chooseProduct={chooseProduct}
						/>
					)
				})}
			</div>
		</>
	)
}

export default App
