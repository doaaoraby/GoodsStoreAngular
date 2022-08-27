export class GoodsModel {
    constructor(   
        public goodId: number,
        public transactionId: number,
        public transactionDate:string,
        public amount: string,
        public direction:string,
        public comments?:string
        ) { 
    
    }
}
