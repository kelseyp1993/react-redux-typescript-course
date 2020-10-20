export type Car = {
    id: number;
    make: string;
    model: string;
    year: number;
    color: string;
    price: string;
};

export type NewCar = Omit<Car, 'id'>;
