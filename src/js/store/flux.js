const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: []
		},

		actions: {
			getCharacters: async() => {
				const response = await fetch("https://www.swapi.tech/api/people");
				const data = await response.json()
				setStore({characters: data.results})				
			},

			getOneCharacter: async() => {
				const response = await fetch("https://www.swapi.tech/api/people/1");
				const data = await response.json()
				console.log()			
			}
		}
	}
};

export default getState;
