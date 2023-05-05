export default class ApiError extends Error
{
    constructor(message: string, code?: number, url?: string){
        super(`Failed to fetch data from Api: ${message} ${code} ${url}`);
    }
}