import { expect } from "@playwright/test";
import { WantlistResponse } from "../../models/api.models/wantlist.response";
import { BaseAssertions } from "./base.assertions";


export class WantlistAssertions extends BaseAssertions {
    static validateWantlistResponse(wantlist: WantlistResponse) {
        expect(wantlist.wants).toBeDefined();
        expect(wantlist.pagination.items).toBeDefined();
        expect(wantlist.pagination.items).toBeGreaterThan(0);
    };
}