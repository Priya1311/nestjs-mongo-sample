/*
 * File: courses.interface.ts
 * Project: nestjs-sample
 * File Created: Tuesday, 4th May 2021 5:40:34 pm
 * Author: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Last Modified: Tuesday, 4th May 2021 5:45:03 pm
 * Modified By: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Copyright 2020 - 2021 Mutual Mobile, Mutual Mobile
 */
import { Document } from 'mongoose';

export interface Courses extends Document {
    readonly id: number;
    readonly title: string;
    readonly description: string;
    readonly author: string;
    readonly url: string;
    readonly created_at: Date;
}