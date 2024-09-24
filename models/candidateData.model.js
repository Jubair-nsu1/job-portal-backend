const { text } = require('body-parser');
const mongoose = require('mongoose')

const CandidateSchema = mongoose.Schema(
    {
        job_id: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        fullname: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        dob: {
            type: Date,
            required: true,
        },
        gender: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },

        //Educational
        university: {
            type: String,
            required: true,
        },
        subject: {
            type: String,
            required: true,
        },
        degree: {
            type: String,
            required: true,
        },
        cgpa: {
            type: String,
            required: true,
        },
        uni_passing_year: {
            type: String,
            required: true,
        },
        isFresher: {
            type: String,
        },
        current_employer: {
            type: String,
        },        
        work_experience: {
            type: String,
        },
        current_designation: {
            type: String,
        },
        current_salary: {
            type: String,
        },
        resume_file: {
            type: String,
        },
        cover_letter: {
            type: String,
        },
        expected_salary: {
            type: String,
            required: true,
        },
        knowing_media: {
            type: String,
            required: true,
        },
        apply_date:{
            type: String,
            required: true,
        },

    }
);

const CandidateData = mongoose.model('CandidateData' , CandidateSchema)

module.exports = CandidateData