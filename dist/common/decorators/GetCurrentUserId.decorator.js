"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentUserId = void 0;
const common_1 = require("@nestjs/common");
exports.GetCurrentUserId = (0, common_1.createParamDecorator)((context) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return user.sub;
});
//# sourceMappingURL=GetCurrentUserId.decorator.js.map