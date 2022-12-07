export class User {
    name:string;
    email:string;
    password:string;
    id:number;
    balance:number;
    constructor(uname,uemail,upass,uid)
    {
        this.name=uname;
        this.email=uemail;
        this.password=upass;
        this.id=uid;
        this.balance=0;
    }
    public getEmail():string {
		return this.email;
	}

	public setEmail( email:string):void {
		this.email = email;
	}

	
	public  getId():number {
		return this.id;
	}

	public setId( id:number) {
		this.id = id;
	}

	public  getName():string {
		return this.name;
	}

	public setName(name:string) {
		this.name = name;
	}

	public getBalance() :number{
		return this.balance;
	}

	public setBalance(balance:number) {
		this.balance = balance;
	}

	public getPassword():string {
		return this.password;
	}

	public setPassword(password:string) {
		this.password = password;
	}

}
