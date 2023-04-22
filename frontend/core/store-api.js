class Api
{	
	constructor(api, ttl) {
		this.api = api;
		this.ttl = ttl;
	}

	async get(endpoint) {
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

const Store = new Api('http://127.0.0.1:3001',10);
const PublicStore = new Api('http://127.0.0.1:3001',10);

export {
	Store as default,
	PublicStore
};