import ApiError from "../error/apiError";

export type Response = {
	status: boolean,
	code?: number,
	message?: string
}

export default class Api
{	
	api: string;
	ttl: number;

	constructor(api: string, ttl: number) {
		this.api = api;
		this.ttl = ttl;
	}

	async get<T>(endpoint: string): Promise<T & Response> {
		const res = await fetch(this.api + endpoint, { 
			//cache: 'no-cache',
			next: { revalidate: this.ttl }
		});
		if (!res.ok) throw new ApiError(res.statusText,res.status,res.url);	
		return res.json();	
	}
}