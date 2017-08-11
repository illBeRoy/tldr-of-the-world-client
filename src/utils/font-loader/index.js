/**
 * Loads a font from a given url and applies it as the global font for the entire application.
 *
 * Mutates the document permanently and irreversibly (does not have any awareness of the mutation post appliance).
 *
 * @param fontFamily {string} name of the font family
 * @param url {string} primary font file url
 * @param secondaryUrls {[string]} additional font file urls (optional)
 */
const loadFont = (fontFamily, url, ...secondaryUrls) => {

    let style = `
        <style type="text/css">
        
            @font-face {
            
                font-family: '${fontFamily}';
                font-style: normal;
                font-weight: 400;
                src: url('${url}');
            }
            
            * {
            
                font-family: '${fontFamily}', Arial, sans-serif;
                -webkit-font-smoothing: antialiased;
            }
        
        </style>
    `;

    window.document.getElementsByTagName('head')[0].innerHTML += style;
};


export {loadFont};
