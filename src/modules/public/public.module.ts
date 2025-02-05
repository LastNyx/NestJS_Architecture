import { Module } from '@nestjs/common';
import ImageModule from '../services/images/image.module';
import { AuthModule } from './auth/auth.module';
import HelloWorldModule from './hello-world/hello-world.module';
import { HistoryModule } from './history/history.module';
import { NotificationsModule } from './notifications/notifications.module';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    HelloWorldModule,
    UserModule,
    ProductModule,
    HistoryModule,
    AuthModule,
    ImageModule,
    NotificationsModule,
  ],
})
export default class PublicModule {}
