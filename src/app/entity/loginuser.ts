export class Loginuser {
    id:number;
    password:string;
    constructor(){
    
    }
    public  getId():number {
		return this.id;
	}
	public  setId(id:number):void {
		this.id = id;
	}
	public  getPassword():string {
		return this.password;
	}
	public setPassword(password:string) : void{
		this.password = password;
	}
}
