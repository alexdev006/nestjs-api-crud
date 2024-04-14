import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthService {
  signup() {
    return { msg: 'im signup' };
  }

  signin() {
    return { msg: 'im singnin' };
  }
}
