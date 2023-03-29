class CommApi
{
	api = 'http://127.0.0.1:3001'
	constructor() {}

	async get(endpoint) {
		const res = await fetch(this.api + endpoint, { cache: 'force-cache' });
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	}
}

module.exports = CommApi;