class Coffee {
    constructor(obj = {})
    {
        this.bean = obj.bean,
        this.method = obj.method
    }

}



class Cafe extends Coffee {
    constructor ( obj = {})
    {
        super(obj)
        this.name = obj.name

        
    }
}



class Location extends Cafe {
    constructor (obj = {})
    {
        super(obj)
        this.long = obj.long,
        this.lat = obj.lat
    } 
}

const detailCafe = new Location ({
    bean : ["gayo red honey","sidikalang",{robusta: 'kapal Tangker', sachet:"kapal api"}],
    method : "manual brewing",
    name : "seven days",
    long : "-3566782",
    lat : "3768023"
})

console.log(detailCafe)