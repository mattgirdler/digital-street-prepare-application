class Entry {
    constructor(applicants, applicationTypes, entry, proprietors) {
        this.subRegisterCode = String(entry['sub_register_code'])
        this.subRegisterSeq = parseInt(entry['sub_register_sequence'])
        this.roleCode = String(entry['role_code'])
        this.entryText = String(entry['entry_text'])
        this.applicants = applicants
        this.applicationTypes = applicationTypes
        this.proprietors = proprietors
    }
}

module.exports = Entry