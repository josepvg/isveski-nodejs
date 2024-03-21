import {log} from "./isveskiUtils";
import Dict = NodeJS.Dict;


export type Text = {
    text: string // text in the default language
    translations: Dict<string> 
}

export namespace Text {
    
    export const render = (text: Text, destinationLanguage: string) =>
        text.translations[destinationLanguage] || text.text
                  
    export const getRenderer = (destinationLanguage: string) => 
        (text: Text) => render(text, destinationLanguage)
    
    // Creates a function that looks up a text in a given dictionary for a given language, but if no translation or 
    // text is found, just returns the text 
    // example:
    // const tonOfTranslations = [ ... ]
    // ...
    // const lookup = getLookup(tonOfTranslations, "en")
    // ...
    // lookup("Hæ hæ") // the idea is that this call is more readable than using some elaborate construct, which 
    //                 // obfuscates the actual text
    export const getLookup = (texts: Text[], destinationLanguage: string) => {
        const translatedTexts = texts.reduce<Dict<string>>(
            (dict, t) => { 
                dict[t.text] = render(t, destinationLanguage);
                return dict;
            }, 
            {}
        );
        return (text: string) => translatedTexts[text] || text 
    }

}