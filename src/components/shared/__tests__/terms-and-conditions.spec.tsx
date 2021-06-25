import { shallow } from "enzyme";

import { renderTermsAndConditionsVI } from "../index";

jest.mock("next-i18next", () => ({
    useTranslation: () => ({
        t: (key: string): string => key,
    }),
}));

describe("Terms and Conditions VI", () => {
    it("ender correctly", function () {
        const wrapper = shallow(renderTermsAndConditionsVI());
        expect(wrapper).toMatchSnapshot();
    });
});
