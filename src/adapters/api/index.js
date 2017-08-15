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

    async biography(name) {

        const result = await this._axios.get(`/people/${encodeURIComponent(name)}`);
        return {
            name: result.data.name,
            image: result.data.image_url,
            summary: result.data.summery,
            link: result.data.wikipedia_url
        }
    }

    /**
     * Get pictures for a given list of people.
     * @param names {[string]}
     * @returns {Promise.<*>}
     */
    async pictures(names) {

        names = names.map(name => name.replace(/,/g, '#/COMMA/'));

        const result = await this._axios.get(`/people/pictures?names=${encodeURIComponent(names.join(','))}`);
        return result.data;
    }

    /**
     * Get a list of randomly seleted names.
     * @param count {int} size of the list
     * @returns {Promise.<[string]>}
     */
    async random(count = 10) {

        const result = await this._axios.get(`/people/random?count=${encodeURIComponent(count)}`);
        return result.data;
    }

    /**
     * Gets feed information (id and seed) for a given group of people.
     * @param people {[string]} names of people, should match (case sensitive) the records in the db
     * @returns {Promise.<{feed_id: string, people: [string], following: [string]}>} feed description, where feed id
     *          is used for pagination, people contain the enriched list of people, and following contain the original
     *          list of people
     * @throws {Error} if the feed was not created properly (probably invalid list of people)
     */
    async createFeed(people) {

        const result = await this._axios.post('/feeds', {people});
        return result.data;
    }

    /**
     * Gets feed information (id and seed) for a given feed id.
     * @param people {[string]} names of people, should match (case sensitive) the records in the db
     * @returns {Promise.<{feed_id: string, people: [string], following: [string]}>} feed description, where feed id
     *          is used for pagination, people contain the enriched list of people, and following contain the original
     *          list of people
     * @throws {Error} if the feed was not fetched properly (probably doesn't exist)
     */
    async getFeed(feed_id) {

        const result = await this._axios.get(`/feeds/${encodeURIComponent(feed_id)}`);
        return result.data;
    }

    /**
     * Feed pagination by id.
     * @param feed_id {string} feed identifier
     * @param page {int} page to get (positive integer)
     * @returns {Promise.<{page: int, quotes: [{quote: string, author: string}]}>} page: index of the returned page.
     *          quotes: a list of the quotes included in the page, which consist of {quote, author}
     */
    async getFeedPage(feed_id, page = 0) {

        const result = await this._axios.get(`/feeds/${encodeURIComponent(feed_id)}/${encodeURIComponent(page)}`);

        return {
            page: result.data.page,
            quotes: result.data.quotes.map(quoteDetails => {return {text: quoteDetails[0], author: quoteDetails[1]}})
        }
    }

}


export {Adapter}
