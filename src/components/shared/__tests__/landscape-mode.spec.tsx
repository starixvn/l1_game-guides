import { shallow } from "enzyme";
import React from "react";

import { renderTermsAndConditionsVI } from "../index";

jest.mock("next-i18next", () => ({
    useTranslation: () => ({
        t: (key: string): string => key,
    }),
}));

describe("landscape mode", () => {
    it("ender correctly", function () {
        const wrapper = shallow(renderTermsAndConditionsVI());
        expect(wrapper).toMatchSnapshot();
    });
});
