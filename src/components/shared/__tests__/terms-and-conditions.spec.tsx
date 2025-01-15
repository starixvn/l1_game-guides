import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { screen } from "@testing-library/dom";

import { renderTermsAndConditionsVI } from "../index";

describe("Terms and Conditions VI", () => {
    it("should render terms and conditions component correctly", () => {
        // Arrange & Act
        render(renderTermsAndConditionsVI());

        // Assert
        const termsElement = screen.getByRole("article");
        expect(termsElement).toBeInTheDocument();
        expect(termsElement).toMatchSnapshot();
    });
});
