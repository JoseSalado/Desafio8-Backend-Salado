import { faker } from "@faker-js/faker";

faker.locale = 'en'

const generateMockproducts = () => {
    return {
        _id: faker.database.mongodbObjectId(),
        title: faker.commerce.product(),
        description: faker.commerce.productDescription(),
        code: faker.random.alphaNumeric(8),
        price: faker.commerce.price(1000, 20000),
        status: faker.datatype.boolean(),
        stock: faker.datatype.number({ min: 0, max: 100}),
        category:faker.commerce.department(),
        thumbnails: generateMockthumbnails()
    }
}

const generateMockthumbnails = () => {
    const thumbnails = []
    for(let i = 0; i < 5; i++){
        let thumbnail = faker.image.business()
        thumbnails.push(thumbnail)
    }
    return thumbnails
}

export default generateMockproducts