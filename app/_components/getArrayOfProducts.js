import { getProduct } from "../_lib/data-service";

export default async function getArrayOfProducts(array) {
    const popProdData = Promise.all(array.map((number) => getProduct(number))).then((values) => values);
    return popProdData;
}