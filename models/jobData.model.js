const { text } = require('body-parser');
const mongoose = require('mongoose')

const JobSchema = mongoose.Schema(
    {
        designation: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        employment_type: {
            type: String,
            required: true,
        },
        job_nature: {
            type: String,
            required: true,
        },
        job_location: {
            type: String,
            required: true,
        },
        experience_year: {
            type: Number,
            required: true,
        },
        age_limit: {
            type: String,
            required: true,
        },
        application_deadline: {
            type: String,
            required: true,
        },
        job_description: {
            type: String,
            required: true,
        },
        major_responsibilities: {
            type: String,
            required: true,
        },
        education_requirement: {
            type: String,
            required: true,
        },
        experience_details: {
            type: String,
            required: true,
        },

        technical_skills: {
            type: String,
            required: true,
        },
        soft_skills: {
            type: String,
            required: true,
        },
        duration: {
            type: String,
            required: true,
        },
        benefit: {
            type: String,
            required: true,
        },
        postDate:{
            type: Date,
            required:true,
        },
    }
);

const JobData = mongoose.model('JobData' , JobSchema)

module.exports = JobData