const AdminData = require('../models/admin.model')

const seedDB = async () => {
    try{
        await AdminData.deleteMany({})
        await AdminData.create({
            fullname: 'HRMD',
            email: 'hrmd@bylc.org',
            password: '$2a$12$0rWt8ZmmaqiTwVKAxF4ZkO.VlKC2YGqX69SvwrHUfmSK0ZW5e13KW'
        })
        console.log("Seeding successfull")
    }
    catch(error){
        console.log(error)
        console.log('Seeding Error')
    }
    
}

module.exports = seedDB