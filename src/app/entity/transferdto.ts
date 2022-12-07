export class Transferdto {

    id:number;
    toId:number;
	 amount:number;
    constructor(){
    
    }
    public  getId():number {
		return this.id;
	}
	public  setId(id:number):void {
		this.id = id;
    }
    public  getToId():number {
		return this.toId;
	}
	public setToId( toId:number):void {
		this.toId = toId;
	}
	public  getAmount():number {
		return this.amount;
	}
	public setAmount(amount:number):void {
		this.amount = amount;
	}
	
}
