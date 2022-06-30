class Color{
    constructor(col,rgb){
        this.col = col ;
        this.rgb = rgb;
    }
    getCol(){
        return this.col ;
    }
    getRgb(){
        return this.rgb;
    }
    colorObj(){
        return {color:this.getCol(),
                RGB:this.getRgb()
            }
    }
}
const s = "ahmed";