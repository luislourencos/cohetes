class Rocket{
    rocket:number;
    booster: Booster[] = [];

    constructor(rocket:number){
        this.rocket = rocket;
    }
    addBooster(booster:Booster):void{
        this.booster.push(booster);
    }
    addSpeed(){
        this.booster.push({booster:10});
    }
    break(){
        this.booster.push({booster:-10});
    }
}