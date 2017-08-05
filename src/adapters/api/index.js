import axios from 'axios';


/**
 * The API Adapter Class provides an async interface to make api queries.
 */
class Adapter {

    /**
     * @param baseURL {string} base api url
     * @param axiosFactory {{create: function(*):AxiosInstance}} a factory to instantiate axios from
     */
    constructor(baseURL = 'http://localhost:3001/', axiosFactory = axios) {

        this._axios = axiosFactory.create({baseURL});
    }

    /**
     * Search a person using the respective api call.
     * @param query {string} search query
     * @returns {Promise.<[string]>} list of results
     * @throws {Error} if query failed
     */
    async search(query) {

        const result = await this._axios.get(`/people/search/${encodeURIComponent(query)}`);
        return result.data;
    }

    /**
     * Get neighbour suggestions for person.
     * @param name {string} name of person (must be exact)
     * @returns {Promise.<[{name: string, score: number}]>} sorted list of objects
     *          containing name and score - lower score is better
     * @throws {Error} if query failed
     */
    async suggest(name) {

        const result = await this._axios.get(`/people/${encodeURIComponent(name)}/suggest`);
        return result.data.map(result => {return {name: result[0], score: result[1]}});
    }

}


export {Adapter}
