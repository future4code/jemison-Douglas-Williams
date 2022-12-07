export class Product {
    public id: string
    public name: string
    public price: number
    constructor(id: string, name: string, price: number) {
        this.id = id
        this.name = name
        this.price = price
    }
}

// public, private, protected são modificadores de acesso
