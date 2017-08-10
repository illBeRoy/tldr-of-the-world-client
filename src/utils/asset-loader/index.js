/**
 * Locates an asset from the assets directory and returns a usable url.
 *
 * Since different parts of the application reside in different directory, this function can be used to determine
 * urls for asset files, regardless of which file required them.
 *
 * @param assetName {string} asset filename
 * @returns {string} usable asset url
 */
const loadAsset = (assetName) => {

    return `assets/${assetName}`;
};


export {loadAsset};
