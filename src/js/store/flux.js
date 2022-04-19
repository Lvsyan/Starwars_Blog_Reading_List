const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			info: {},
			characters: [
				{
					"properties": {
						"height": "172",
						"mass": "77",
						"hair_color": "blond",
						"skin_color": "fair",
						"eye_color": "blue",
						"birth_year": "19BBY",
						"gender": "male",
						"created": "2022-04-13T11:26:10.996Z",
						"edited": "2022-04-13T11:26:10.996Z",
						"name": "Luke Skywalker",
						"homeworld": "https://www.swapi.tech/api/planets/1",
						"url": "https://www.swapi.tech/api/people/1"
					},
					"description": "A person within the Star Wars universe",
					"_id": "5f63a36eee9fd7000499be42",
					"uid": "1",
					"__v": 0
				},
				{
					"properties": {
						"height": "167",
						"mass": "75",
						"hair_color": "n/a",
						"skin_color": "gold",
						"eye_color": "yellow",
						"birth_year": "112BBY",
						"gender": "n/a",
						"created": "2022-04-13T11:26:10.996Z",
						"edited": "2022-04-13T11:26:10.996Z",
						"name": "C-3PO",
						"homeworld": "https://www.swapi.tech/api/planets/1",
						"url": "https://www.swapi.tech/api/people/2"
					},
					"description": "A person within the Star Wars universe",
					"_id": "5f63a36eee9fd7000499be43",
					"uid": "2",
					"__v": 0
				},
				{
					"properties": {
						"height": "96",
						"mass": "32",
						"hair_color": "n/a",
						"skin_color": "white, blue",
						"eye_color": "red",
						"birth_year": "33BBY",
						"gender": "n/a",
						"created": "2022-04-13T11:26:10.996Z",
						"edited": "2022-04-13T11:26:10.996Z",
						"name": "R2-D2",
						"homeworld": "https://www.swapi.tech/api/planets/8",
						"url": "https://www.swapi.tech/api/people/3"
					},
					"description": "A person within the Star Wars universe",
					"_id": "5f63a36eee9fd7000499be44",
					"uid": "3",
					"__v": 0
				},
				{
					"properties": {
						"height": "202",
						"mass": "136",
						"hair_color": "none",
						"skin_color": "white",
						"eye_color": "yellow",
						"birth_year": "41.9BBY",
						"gender": "male",
						"created": "2022-04-13T11:26:10.996Z",
						"edited": "2022-04-13T11:26:10.996Z",
						"name": "Darth Vader",
						"homeworld": "https://www.swapi.tech/api/planets/1",
						"url": "https://www.swapi.tech/api/people/4"
					},
					"description": "A person within the Star Wars universe",
					"_id": "5f63a36eee9fd7000499be45",
					"uid": "4",
					"__v": 0
				},
				{
					"properties": {
						"height": "150",
						"mass": "49",
						"hair_color": "brown",
						"skin_color": "light",
						"eye_color": "brown",
						"birth_year": "19BBY",
						"gender": "female",
						"created": "2022-04-13T11:26:10.996Z",
						"edited": "2022-04-13T11:26:10.996Z",
						"name": "Leia Organa",
						"homeworld": "https://www.swapi.tech/api/planets/2",
						"url": "https://www.swapi.tech/api/people/5"
					},
					"description": "A person within the Star Wars universe",
					"_id": "5f63a36eee9fd7000499be46",
					"uid": "5",
					"__v": 0
				},
				{
					"properties": {
						"height": "178",
						"mass": "120",
						"hair_color": "brown, grey",
						"skin_color": "light",
						"eye_color": "blue",
						"birth_year": "52BBY",
						"gender": "male",
						"created": "2022-04-13T11:26:10.996Z",
						"edited": "2022-04-13T11:26:10.996Z",
						"name": "Owen Lars",
						"homeworld": "https://www.swapi.tech/api/planets/1",
						"url": "https://www.swapi.tech/api/people/6"
					},
					"description": "A person within the Star Wars universe",
					"_id": "5f63a36eee9fd7000499be47",
					"uid": "6",
					"__v": 0
				},
				{
					"properties": {
						"height": "165",
						"mass": "75",
						"hair_color": "brown",
						"skin_color": "light",
						"eye_color": "blue",
						"birth_year": "47BBY",
						"gender": "female",
						"created": "2022-04-13T11:26:10.996Z",
						"edited": "2022-04-13T11:26:10.996Z",
						"name": "Beru Whitesun lars",
						"homeworld": "https://www.swapi.tech/api/planets/1",
						"url": "https://www.swapi.tech/api/people/7"
					},
					"description": "A person within the Star Wars universe",
					"_id": "5f63a36eee9fd7000499be48",
					"uid": "7",
					"__v": 0
				},
				{
					"properties": {
						"height": "97",
						"mass": "32",
						"hair_color": "n/a",
						"skin_color": "white, red",
						"eye_color": "red",
						"birth_year": "unknown",
						"gender": "n/a",
						"created": "2022-04-13T11:26:10.996Z",
						"edited": "2022-04-13T11:26:10.996Z",
						"name": "R5-D4",
						"homeworld": "https://www.swapi.tech/api/planets/1",
						"url": "https://www.swapi.tech/api/people/8"
					},
					"description": "A person within the Star Wars universe",
					"_id": "5f63a36eee9fd7000499be49",
					"uid": "8",
					"__v": 0
				},
				{
					"properties": {
						"height": "183",
						"mass": "84",
						"hair_color": "black",
						"skin_color": "light",
						"eye_color": "brown",
						"birth_year": "24BBY",
						"gender": "male",
						"created": "2022-04-13T11:26:10.996Z",
						"edited": "2022-04-13T11:26:10.996Z",
						"name": "Biggs Darklighter",
						"homeworld": "https://www.swapi.tech/api/planets/1",
						"url": "https://www.swapi.tech/api/people/9"
					},
					"description": "A person within the Star Wars universe",
					"_id": "5f63a36eee9fd7000499be4a",
					"uid": "9",
					"__v": 0
				},
				{
					"properties": {
						"height": "182",
						"mass": "77",
						"hair_color": "auburn, white",
						"skin_color": "fair",
						"eye_color": "blue-gray",
						"birth_year": "57BBY",
						"gender": "male",
						"created": "2022-04-13T11:26:10.996Z",
						"edited": "2022-04-13T11:26:10.996Z",
						"name": "Obi-Wan Kenobi",
						"homeworld": "https://www.swapi.tech/api/planets/20",
						"url": "https://www.swapi.tech/api/people/10"
					},
					"description": "A person within the Star Wars universe",
					"_id": "5f63a36eee9fd7000499be4b",
					"uid": "10",
					"__v": 0
				}
			],
			fav: [],
		},

		actions: {
			conteo: (incrementar) => {
				const fav = getStore().fav;
				if(!fav.includes(incrementar)){
					setStore({fav: [...getStore().fav, incrementar]});
				}else{
					setStore({fav: fav.filter((e)=>e !== incrementar)});
				}	
			},
			
			getCharacters: async() => {
				const response = await fetch("https://www.swapi.tech/api/people");
				const data = await response.json()
				const characterWithInfo = []
				for(let x = 0; x < data.results.length; x++){
					const resp = await fetch("https://www.swapi.tech/api/people/" + data.results[x].uid);
					const dat = await resp.json()
					characterWithInfo.push(dat.result)
				}
				console.log(characterWithInfo)
				setStore({characters: characterWithInfo})			
			},

			getOneCharacter: async(i) => {
				setStore({info: {}})
				const response = await fetch("https://www.swapi.tech/api/people/" + i);
				const data = await response.json()
				setStore({info: data.result})		
			}
		}
	}
};

export default getState;
