import { MailService } from './mail.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SmtpMailService implements MailService {
  sendEmail(): string {
    return 'SMTP Mail!';
  }
}
