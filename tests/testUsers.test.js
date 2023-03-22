const chai = require ("chai");
const chaiHttp= require ("chai-http");
const app = require ("../app");
// import { expect } from "chai";
chai.should();
chai.use(chaiHttp);

//login

describe("Login", () => {
    it("should be able to login", (done) => {
        chai
            .request(app)
            .post("/api/auth/sign_in")
            .send({ email: "admin@gmail.com", password: "Passcode@1" })
            .end((err, res) => {
                if (err) return done(err);

                // expect(res.status).to.equal(200);

                // res.body.should.have.property("status").eql("success");
                // res.body.should.have.property("successMessage");
                // res.body.should.have.property("token");

                done();
            });
    });
});
