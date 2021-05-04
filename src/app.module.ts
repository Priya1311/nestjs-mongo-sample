import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './courses/courses.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://admin:admin@123@cluster0.mgpqu.mongodb.net/Courses?retryWrites=true&w=majority', { useNewUrlParser: true })
  ,CoursesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
