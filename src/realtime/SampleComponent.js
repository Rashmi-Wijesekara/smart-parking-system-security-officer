import React, { useState, useEffect } from "react";
import { db } from "./firebaseConfig";
import { set, ref, onValue } from "firebase/database";

const SampleComponent = (props) => {
	const [slots, setSlots] = useState();

	useEffect(() => {
		onValue(ref(db), (snapshot) => {
			const data = snapshot.val();
			setSlots(data);
		});
	}, []);

	// const write = () => {
	// 	set(ref(db, `/slot1`), slot1)
	// }

	// write()

	return (
		slots && (
			<div className="">
				<div className="text-center mx-auto mt-20">
					{`Slot 01 ==> ${slots.slot1}`}
				</div>

				<div className="text-center mx-auto mt-5">
					{`Slot 02 ==> ${slots.slot2}`}
				</div>
			</div>
		)
	);
};

export default SampleComponent;
