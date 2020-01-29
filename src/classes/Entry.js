class Entry {
    constructor(entry, applicants, application, proprietors) {
        this.subRegisterCode = str(entry['sub_register_code'])
        this.subRegisterSeq = int(entry['sub_register_sequence'])
        this.roleCode = str(entry['role_code'])
        this.entryText = str(entry['entry_text'])
        this.applicants = applicants
        this.application = application
        this.proprietors = proprietors
    }
}

exports.Entry = Entry