import { UserInfoItf } from '@iweddingb-workspace/shared';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Jwt = createParamDecorator((_, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const tokenPayload = {} as UserInfoItf;
  if (request.user) {
    tokenPayload.ent_code = request.user.ent_code;
    tokenPayload.name = request.user.name;
    tokenPayload.cont_yn = request.user.cont_yn;
    tokenPayload.contact_yn = request.user.contact_yn;
    return tokenPayload;
  }
  return null;
});
