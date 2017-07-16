const reducer=(state="",payload={})=>{
	console.log(payload);
	let{type,kerwininfo}=payload;

switch (type) {
		case "KERWINCHANGE":
				
			return kerwininfo;

			break;
		default:
			// statements_def
			break;
	}
	
	return state;
}

export default reducer;