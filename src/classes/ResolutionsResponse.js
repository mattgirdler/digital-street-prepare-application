// const CBCR = require('./role-codes/CBCR')
const OJPR = require('./role-codes/OJPR')
const ResolutionsRequest = require('./ResolutionsRequest')

class ResolutionsResponse extends ResolutionsRequest {
    constructor(applicants, applicationTypes, proprietors, entries) {
        super(applicants, applicationTypes, proprietors)
        this.resolutions = this.generateResolutionsForEntries(entries)
    }

    generateResolutionsForEntries(entries) {
        let resolutions = []
        for (let entry in entries) {
            if (entries[entry]['role_code'] == 'CBCR') {
                // resolutions.push(new CBCR())
                break
            } else if (entries[entry]['role_code'] == 'OJPR') {
                let newOJPR = new OJPR(entries[entry])
                newOJPR.generateResolutionSchema(this.applicationTypes, this.proprietors)
                resolutions.push(newOJPR)
            }
        }
        return resolutions
    }
}

module.exports = ResolutionsResponse