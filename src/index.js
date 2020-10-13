module.exports = function check(str, bracketsConfig) {
	let iteration = true
	function checkcheck(string){
		for(let i = 0; i < bracketsConfig.length; i++){
			for(let j = 0; j < string.length; j++){
				if(string[j] === bracketsConfig[i][1]){
					if(string[j - 1] === bracketsConfig[i][0]){
						string = string.slice(0, j - 1).concat(string.slice(j + 1))
					}
				}
			}
		}
		iteration = str !== string
		str = string
	}
	while(iteration){
		checkcheck(str)
	}
	return str.length === 0
}