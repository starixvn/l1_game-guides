import { shallow } from "enzyme";

import { renderTermsAndConditionsVI } from "../index";

describe("Terms and Conditions VI", () => {
    it("ender correctly", function () {
        const wrapper = shallow(renderTermsAndConditionsVI());
        expect(wrapper).toBeTruthy();
    });
});
