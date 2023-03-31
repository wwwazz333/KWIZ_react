export const apiUrl: string = 'http://localhost:8080/api';

export const headerJson = {
	'Accept': 'application/json',
	'Content-Type': 'application/json'
};

export const fetchData: <T>(url: string) => Promise<T> = (url) => fetch(url).then(res => res.json());