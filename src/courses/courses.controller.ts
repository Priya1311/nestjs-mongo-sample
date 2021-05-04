import { Controller, Get, Param, Body, Post, Delete, Query, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './create-course.dto';

@Controller('courses')
export class CoursesController {
  constructor(private courseService: CoursesService) {}

  @Get()
  async getCourseList(@Res() res) {
    const courses = await this.courseService.getCourses();
    return res.status(HttpStatus.OK).json(courses);;
  }

  @Get(':courseId')
  async getCourse(@Res() res, @Param('courseId') courseId){
      const course = await this.courseService.getCourse(courseId);
      if (!course) throw new NotFoundException('Course does not exist!');
        return res.status(HttpStatus.OK).json(course);
  }

  @Post()
  async postCourse(@Res() res, @Body()createCourseDto: CreateCourseDto){
    const course = await this.courseService.addCourse(createCourseDto);
    return res.status(HttpStatus.OK).json({
      message: "Course has been created successfully",
      course
  })
  }

  @Delete()
  async deleteCourse(@Res() res, @Query() query){
    const courses = await this.courseService.deleteCourse(query.courseId);
    if (!courses) throw new NotFoundException('Course does not exist!');
        return res.status(HttpStatus.OK).json({message: "Course has been deleted", courses});
  }
}
