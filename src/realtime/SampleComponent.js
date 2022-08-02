import React, {useEffect} from 'react';
import {db} from './firebaseConfig'
import {set, ref, onValue} from "firebase/database"

const SampleComponent = (props) => {

	const slot1 = 1212

	console.log(db)

	useEffect(() => {
		onValue(ref(db), snapshot => {
			const data = snapshot.val()
			console.log(data)
		})
	}, [])

	const write = () => {
		set(ref(db, `/slot1`), slot1)
	}

	write()

	return (
		<div className="">
			{props.value}
		</div>
	)
}

export default SampleComponent