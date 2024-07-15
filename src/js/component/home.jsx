import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [tarea, setTarea] = useState("")
	const [misTareas, setMisTareas] = useState([])

	const handleCreateTask = () => {
		setMisTareas([...misTareas, tarea])
		setTarea("")
	}

	return (
		<div className="text-center">
			<h1>TODO LIST </h1>
			<input type="text" onChange={(e)=>setTarea(e.target.value)} value={tarea}/>
			<button onClick={()=>handleCreateTask()}>Añadir contacto</button>
			<ul>
				{misTareas.map((posicion)=>(<div>
					<li>{posicion}</li>
					<button onClick={()=>setMisTareas(misTareas.filter((item)=>item !== posicion))}>Eliminar</button>
					</div>))}
			</ul>
		</div>
	);
};

export default Home;
