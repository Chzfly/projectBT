const seats = (state = {selectSeat: []}, action) => {
	switch(action.type){
		case 'ADD_SEAT':
			return{
				selectSeat: [
					...state.selectSeat,
					action.seat
				]
			};
		case 'REMOVE_SEAT':
			return{
				selectSeat: state.selectSeat.filter(item => item.id !== action.id)
			};
		default: return state;
	}
};
export default seats;
