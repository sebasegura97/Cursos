export default {
    Query: {
        // allCars: async (parent, args, context) => {}
        allCars: async (parent, args, { Car }) => {
            const cars = await Car.find();
            // _id es un objeto en mongo, por lo tanto lo convertimos a string
            return cars.map(car => {
                car._id = car._id.toString();
                return car;
            })
        }
    },
    Mutation: {
        createCar: async (parent, args, { Car }) => {
            const car = await new Car(args).save();
            car._id = car._id.toString();
            return car;
        }
    }
}