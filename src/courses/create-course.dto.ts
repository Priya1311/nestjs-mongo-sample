/*
 * File: create-course
 * Project: nestjs-sample
 * File Created: Tuesday, 4th May 2021 4:45:04 pm
 * Author: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Last Modified: Tuesday, 4th May 2021 4:45:16 pm
 * Modified By: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Copyright 2020 - 2021 Mutual Mobile, Mutual Mobile
 */
export class CreateCourseDto {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly url: string;
}