import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCourseDto } from "./create-course.dto";
import { Courses } from "./courses.interface";

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel("Courses") private readonly courseModel: Model<Courses>
  ) {}

  async getCourses(): Promise<Courses[]> {
    const courseList = await this.courseModel.find().exec();
    return courseList;
  }

  async getCourse(courseId): Promise<Courses> {
    const course = await this.courseModel.findById(courseId).exec();
    return course;
  }

  async addCourse(courseDto: CreateCourseDto): Promise<Courses> {
    const newCourse = await new this.courseModel(courseDto);
    return newCourse.save();
  }

  async deleteCourse(courseId): Promise<any> {
    const deletedCustomer = await this.courseModel.findByIdAndRemove(courseId);
    return deletedCustomer;
  }
}
