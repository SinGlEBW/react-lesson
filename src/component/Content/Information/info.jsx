import React from 'react';
import './Info.css';


let Info = (props) => {
	
	return (
		<main className='info'>
			<div className='container'>
				<div className="info__wrap">
					<h1 className='info__time'>{props.date}</h1>
					<div className="info__box-status" onClick={props.toggleEditMode}>
					{
						(props.editMode)
						? <span className="info__status">{props.txtStatus}</span>
						: <input className="info__status" autoFocus type="text" value={props.txtStatus} onChange={props.statusChange} />
					}
					</div>
				</div>
			</div>
		</main>
	)
}
export default Info




