import React, {useReducer, useEffect} from 'react'
import axios from 'axios'
const initialState  = {
		load: true,
		error: '',
		post: {}
	}

	const reducer = (state, action)=>{	
		
		switch(action.type){
			case 'LOADING':
				return{
					loading: true,
					post:{},
					error:''
				}
			case 'FETCH_SUCCESS':
				return{
					loading: false,
					post: action.payload, 
					error: ''
				}
			case 'FETCH_ERROR':
				return{
					loading: true,
					post: {},
					error: 'error happened'
				}
		}


	}

function DataFetchingTwo(){


	const[state, dispatch] = useReducer(reducer, initialState)
	useEffect(()=>{
		dispatch({type:"LOADING"})
		axios.get("http://jsonplaceholder.typicode.com/posts/1")
		.then(response=>{
			dispatch({type: "FETCH_SUCCESS", payload: response.data})
		})
		.catch(error=>{
			dispatch({type: "FETCH_ERROR"})
		})

	},[])

	return(

		<div>
			{state.loading? <img src="/loading.gif"/>: state.post.title }
			{state.error?state.error:null}
		</div>

	)


}

export default DataFetchingTwo