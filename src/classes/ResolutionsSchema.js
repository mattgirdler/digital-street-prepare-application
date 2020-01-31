// const CBCR = require('./role-codes/CBCR')
const OJPR = require('./role-codes/OJPR')

class ResolutionsSchema {

    constructor(applicants, applicationTypes, entries, proprietors) {
        this.applicants = applicants
        this.applicationTypes = applicationTypes
        this.proprietors = proprietors
        this.resolutions = this.generateResolutionsForEntries(entries)
    }

    generateResolutionsForEntries(entries) {
        let resolutions = []
        for (let entry in entries) {
            if (entries[entry]['role_code'] == 'CBCR') {
                // resolutions.push(new CBCR())
                break
            } else if (entries[entry]['role_code'] == 'OJPR') {
                resolutions.push(new OJPR(this.applicants, this.applicationTypes, entries[entry], this.proprietors))
            }
        }
        return resolutions
    }
}

ResolutionsSchema.prototype.toString = function() {
    return JSON.stringify({
        "applicants": this.applicants,
        "application_types": this.applicationTypes,
        "proprietors": this.proprietors,
        "resolutions": this.resolutions
    })
}

module.exports = ResolutionsSchema