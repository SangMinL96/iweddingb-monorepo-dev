import { UserInfoItf } from '@iweddingb-workspace/shared';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const Jwt = createParamDecorator((_, context: ExecutionContext) => {
  const request = context.switchToHttp().getRequest();
  const tokenPayload = {} as UserInfoItf;
  if (request.user) {
    tokenPayload.id = request.user.id;
    tokenPayload.name = request.user.name;
    tokenPayload.email = request.user.email;
    tokenPayload.with_id = request.user.with_id;
    tokenPayload.hp = request.user.hp;
    return tokenPayload;
  }
  return null;
});
