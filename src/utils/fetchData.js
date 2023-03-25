export const exerciseOptions = {
    method: 'GET',
    headers: {
		'X-RapidAPI-Key': 'ca7bd19f55msh26ead9701633834p17fd7fjsn06dbc7a91054',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};


export const youtubeOptions = {
    method: 'GET',
    headers: {
		'X-RapidAPI-Key': 'ca7bd19f55msh26ead9701633834p17fd7fjsn06dbc7a91054',
		'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
	}
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}