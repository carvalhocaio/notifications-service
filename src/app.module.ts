import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { SmtpMailService } from './mail/smtp-mail.service';
import { MailService } from './mail/mail.service';
import { HttpModule } from './http.module';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [
    {
      provide: MailService,
      useClass: SmtpMailService,
    },
  ],
})
export class AppModule {}
