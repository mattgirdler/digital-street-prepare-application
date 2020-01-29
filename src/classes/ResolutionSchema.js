require('./role-codes/CBCR')
require('./role-codes/OJPR')

class ResolutionsSchema {

    constructor(applicants, applicationTypes, entries, proprietors) {
        this.resolutions = this.generateResolutionsForEntries(applicants, applicationTypes, entries)
        this.applicants = applicants
        this.applicationTypes = applicationTypes
        this.proprietors = proprietors
    }

    generateResolutionsForEntries(entries) {
        let resolutions = []
        for (entry in entries) {
            if (entries[entry]['role_code'] == 'CBCR') {
                // resolutions.push(new CBCR())
                break
            } else if (entries[entry]['role_code'] == 'OJPR') {
                resolutions.push(new OJPR(this.applicants, this.applicationTypes, this.proprietors, entries[entry]))
            }
        }
    }
}

exports.ResolutionsSchema = ResolutionsSchema;