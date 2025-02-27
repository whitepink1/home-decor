import { getProduct } from "../_lib/data-service";

export default async function getPopularProducts() {
    const popProdId = [2, 7 , 12, 15, 42, 26, 31, 38];
    const popProdData = Promise.all(popProdId.map((number) => getProduct(number))).then((values) => values);
    return popProdData;
}