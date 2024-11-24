//---- Model ----
const nodemailer = require("nodemailer");
const CandidateData = require('../models/candidateData.model')


const postCandidateData = async (req, res) => {
    //    console.log(req.body)

    try{
        await CandidateData.create({
            job_id: req.body.jobId,
            position: req.body.position,
            department: req.body.department,
			fullname: req.body.fullname,
			email: req.body.email,
            phone: req.body.phone,
            dob: req.body.dob,
            gender: req.body.gender,
            address: req.body.address,
            university: req.body.university,
            subject: req.body.subject,
            degree: req.body.degree,
            cgpa: req.body.cgpa,
            uni_passing_year: req.body.uniPassingYear,
            isFresher: req.body.isFresher,
            current_employer: req.body.employerName,
            work_experience: req.body.workExperience,
            current_designation: req.body.currentDesignation,
            current_salary: req.body.currentSalary,
            resume_file: req.file.filename,
            cover_letter: req.body.coverLetter,
            expected_salary: req.body.expectedSalary,
            knowing_media: req.body.knowingMedia,
            apply_date: new Date(),
		})
		res.json({ status: 'ok' })

        // ------ EMAIL NOTIFICATION ----------------------------------
        //Creating a Mail Transport System
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: 'support.it@bylc.org',
                pass: 'hjcewzjnretiafyk'
            }
        });

		//Sending mail to user
        const mailtoUser = {
            from: 'support.it@bylc.org',
            to: req.body.email,
            subject: 'Your application to '+req.body.position+' at BYLC' ,
            html: '<p>Dear '+req.body.fullname+',</p> <p>Thank you for applying to '+req.body.position+', '+req.body.department+' at Bangladesh Youth Leadership Center.</p> <a>The Recruitment Department has received your application and will be reviewing it shortly. We appreciate the time and effort you have taken to reach out to us, and we look forward to exploring the possibility of having you join our team.</a><br> <br> <p>Regards,</p> <a style="font-weight:bold">HR Department</a><br><a style="font-style: italic ; font-size:12px ; font-color:lightgrey">Bangladesh Youth Leadership Center</a><br><a style="font-style: italic ; font-size:12px ; font-color:lightgrey">Medona Tower (Level 12), 28 Mohakhali C/A, Dhaka 1213.</a>'
        };
		
		transporter.sendMail(mailtoUser, (error, info) => {
            if (error) {
				return;
            } else {
       			transporter.close();
                res.status(201).json({status:201,info})
            }
        })
        // ------ End of EMAIL NOTIFICATION --------------------------

    }
    catch(error){
        res.json({ status: 'error', error: 'Cant Process' })
    //   console.log(error)
    }
}

const viewCandidateData = async (req, res) => {
    try {
        const result = await CandidateData.find().sort({_id:-1}) ;
        res.status(200).json(result);
    } 
    catch (err) {
        res.status(500).json(err);
    }
}

const viewCandidateById = async (req, res) => {
    try {
        const result = await CandidateData.findById(req.params.id);
        res.status(200).json(result);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const countTotalCandidates = async (req, res) => {
    try {
        const totalCandidates = await CandidateData.countDocuments();
        res.status(200).json(totalCandidates);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const countCandidatesPerJob = async (req, res) => {
    try {
        const query = { job_id: req.params.id };
        const totalCandidates = await CandidateData.countDocuments(query);
        res.status(200).json(totalCandidates);
    } 
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

const viewCandidatesPerJob = async (req, res) => {
    try {
        const query = { job_id: req.params.id };
        const totalCandidates = await CandidateData.find(query).sort({_id:-1});
        res.status(200).json(totalCandidates);
    } 
    catch (err) {
        res.status(500).json(err);
    }
}


module.exports = {
    postCandidateData,
    viewCandidateData,
    viewCandidateById,
    countTotalCandidates,
    countCandidatesPerJob,
    viewCandidatesPerJob
}