class Certificate {
    constructor(titleNo, cert=null) {
        this.titleNo = titleNo;
        this.cert = cert;
    }

    addCertificate(cert) {
        this.cert = cert
    } 
}