/** @format */

import React from 'react'
import Header from '../headers/header'
import Footers from '../footers/footers'

interface props {
	children: any
}

const MainLayout: React.FC<props> = (props) => {
	return (
		<div>
			<Header />
			{props.children}
			<Footers />
		</div>
	)
}

export default MainLayout
