export default class Api
{	
	api: string;
	ttl: number;

	constructor(api: string, ttl: number) {
		this.api = api;
		this.ttl = ttl;
	}

	async get(endpoint: string) {
		const res = await fetch(this.api + endpoint, { 
			//cache: 'no-cache',
			next: { revalidate: this.ttl }
		});
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	}
}