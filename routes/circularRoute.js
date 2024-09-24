const express = require('express')
const router = express.Router()
const {jobPost,viewJobs,viewJobsById,updateJob,deleteJob,countTotalJobs} = require('../controllers/jobController')
const {postCandidateData,viewCandidateData,viewCandidateById,countTotalCandidates,countCandidatesPerJob,viewCandidatesPerJob} = require('../controllers/candidateController')
const upload = require('../middleware/Multer')


//{ Inside Middleware-------------------

router.post('/jobPost',jobPost)  // Data submitted by hr during new job post
router.get('/viewJobs',viewJobs)  // View the Jobs posted by HR
router.get('/viewJob/:id',viewJobsById)  // View a Job by ID posted by HR
router.put('/updateJob/:id',updateJob)  // Update a Job posted by HR
router.get('/deleteJob/:id',deleteJob)  // Delete a Job posted by HR
router.get('/totalJobs',countTotalJobs) // Count Total Jobs


router.get('/viewCandidates',viewCandidateData) // View All Candidate data
router.get('/viewCandidate/:id',viewCandidateById) // View a candidate by ID
router.get('/totalCandidates',countTotalCandidates) // Count Total Candidates Altogether
router.get('/totalCandidatesPerJob/:id',countCandidatesPerJob) // Count Total Candidates Under each Job
router.get('/viewCandidatesPerJob/:id',viewCandidatesPerJob) // View Candidates Under each Job using Job ID

// -------------------Inside Middleware }



//{ Outside Middleware-------------------
//router.post('/jobApplication', upload.array('documents', 2) , postCandidateData)
router.post('/jobApplication',upload.single('resume'),postCandidateData)
//var cpUpload = upload.fields([{ name: 'resume', maxCount: 1 }, { name: 'coverLetter', maxCount: 1 }]);
//router.post('/jobApplication',cpUpload,postCandidateData) //Data submitted by candidate when they apply

// -------------------Outside Middleware }


module.exports = router