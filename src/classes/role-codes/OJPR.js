const Consent = require('../Consent')
const CourtOrder = require('../CourtOrder')
const Entry = require('../Entry')

class OJPR extends Entry {
    constructor(applicants, applicationTypes, entry, proprietors) {
        super(applicants, applicationTypes, entry, proprietors)
        this.resolutions = this.generateResolutionSchema()
    }

    // Generate a list of potential assurances that a user can provide to resolve the restriction
    generateResolutionSchema() {
        let resolutions = []
        if (this.applicationTypes.includes('transfer for value')) {
            // If more than one proprietor, require them to all join in the transfer
            if (this.proprietors.length > 1) {
                for (let proprietor in this.proprietors) {
                    resolutions.push(new Consent(this.proprietors[proprietor]))
                }
            }
            // Alternatively, the user can provide a court order to resolve the restriction
            resolutions.push(new CourtOrder())
        }
        return resolutions
    }
}

OJPR.prototype.toString = function() {
    return JSON.stringify({
        "sub_register_code": this.subRegisterCode,
        "sub_register_sequence": this.subRegisterSeq,
        "role_code": this.roleCode,
        "entry_text": this.entryText,
        "resolutions": this.resolutions
    })
}

module.exports = OJPR