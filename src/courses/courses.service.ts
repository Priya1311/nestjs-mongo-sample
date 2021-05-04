import { Injectable, HttpException } from '@nestjs/common';
import { COURSES } from './courses.mock';
import { resolve } from 'dns';

@Injectable()
export class CoursesService {
    courses = COURSES;

    getCourses(): Promise<any>{
        return new Promise(resolve=>{
           resolve(this.courses);
        } )  
    }

    getCourse(courseId): Promise<any>{
        let id = Number(courseId);
        return new Promise(resolve=>{
            const course = this.courses.find(c=>c.id === id);
            if(!course){
                throw new HttpException('course does not exist', 404);
            }
            resolve(course);
        })
    }

    addCourse(course):Promise<any>{
        return new Promise(resolve=>{
            this.courses.push(course);
            resolve(this.courses);
        })
    }

    deleteCourse(courseId): Promise<any>{
        let id = Number(courseId);
        return new Promise(resolve=>{
            const courseIndex = this.courses.findIndex(c=> c.id === id);
            if(courseIndex === -1){
                throw new HttpException('Course does not exist', 404);
            }
            this.courses.splice(courseIndex, 1);
            resolve(this.courses);
        })
    }
}
