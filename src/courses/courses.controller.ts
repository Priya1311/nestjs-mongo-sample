import { Controller, Get, Param, Body, Post, Delete, Query } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) {}

  @Get()
  async getCourseList() {
    const courses = await this.courseService.getCourses();
    return courses;
  }

  @Get(':courseId')
  async getCourse(@Param('courseId') courseId){
      const course = await this.courseService.getCourse(courseId);
      return course;
  }

  @Post()
  async postCourse(@Body()createCourseDto: CreateCourseDto){
    const course = await this.courseService.addCourse(createCourseDto);
    return course;
  }

  @Delete()
  async deleteCourse(@Query() query){
    const courses = await this.courseService.deleteCourse(query.courseId);
    return courses;
  }
}
