/*
 * File: courses.schema.ts
 * Project: nestjs-sample
 * File Created: Tuesday, 4th May 2021 5:38:54 pm
 * Author: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Last Modified: Tuesday, 4th May 2021 5:45:12 pm
 * Modified By: Priya Gupta (priya.gupta@mutualmobile.com)
 * -----
 * Copyright 2020 - 2021 Mutual Mobile, Mutual Mobile
 */
import * as mongoose from 'mongoose';

export const CoursesSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    author: String,
    url: String,
    created_at: { type: Date, default: Date.now }
})