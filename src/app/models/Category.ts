import Language from "./Language";
import { TranslatedWord } from "./translatedword";


export class Category {
    id : number;
    name : string;
    origin : Language;
    target : Language;
    lastUpdateDate = new Date();
    words : TranslatedWord[] = [];

    constructor(id: number,
        name : string,
        origin : Language,
        target : Language) {
        this.id = id;
        this.name = name;
        this.origin = origin;
        this.target = target;
    }
}