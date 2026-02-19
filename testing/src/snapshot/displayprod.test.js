import { display_product } from "./displayprod";
import * as api from "../../data/product";
import render from "@testing-library/react";

jest.mock("../data/product");
test("displays product information", async () => {
    api.fetch_product.mockResolvedValue({
        'id':1,
        'name':'laptop 12',
        'price':999.99
    });
    render(<display_product/>);
    const productName = await screen.findByText("laptop 12");
    expect(productName).toBeInTheDocument();
});
