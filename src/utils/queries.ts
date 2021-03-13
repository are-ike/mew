const sendSecurityData: Function = (token, payload) => {
	const string = `mutation setLifeCheck {setLifeCheck(lifeCheck: ${payload} ){errors {field message}success } }`
	fetch("https://twinku1.herokuapp.com/graphql", {
		method: "post",
		headers: {
			"authorization": `Bearer ${token}`,
			"Accept-Encoding": "gzip, deflate, br",
			"Content-Type": "application/json",
			Connection: "keep-alive",
			DNT: "1",
			Origin: "https://twinku1.herokuapp.com",
		},
		body: JSON.stringify({ query: string }),
	}).then(res => res.json()).then(res => {
		if(res.data.setLifeCheck.success === true){
			return true
		}else{
			return false
		}
	}).catch(err => false)
}

const getLifeQuestions: Function = (token) => {
	const string = `{getLifeCheckQuestions{id answer question createdAt updatedAt}}`
	fetch("https://twinku1.herokuapp.com/graphql", {
	method: "post",
	headers: {
		"authorization": `Bearer ${token}`,
		"Accept-Encoding": "gzip, deflate, br",
		"Content-Type": "application/json",
		Connection: "keep-alive",
		DNT: "1",
		Origin: "https://twinku1.herokuapp.com",
	},
	body: JSON.stringify({ query: string }),
	}).then(res => res.json()).then(res => {
		if(res.data.getLifeCheckQuestions.length){
			return res.data.getLifeCheckQuestions
		}else{
			false
		}
	}).catch(err => false)
} 

const queries = {
	sendSecurityData,
	getLifeQuestions
}

export default queries