const cds = require("@sap/cds");

class AssignmentService extends cds.ApplicationService {

    init() {

        this.on("triggerUpdate", async (req) => {

            const db = await cds.connect.to('db') 
            const { Assignment } = db.entities  
            const todoApi = await cds.connect.to("jsonplaceholder")

            let assignment = [];
            assignment = await SELECT.from(Assignment).forUpdate()
            console.log(assignment);
            
            assignment.forEach(async one => {

                try {

                    let uri = ""

                    if (!one.done) {
                        uri = "/convertAssignmentIdExternal?oldAssignmentIdExternal='" + one.old + "'&newAssignmentIdExternal='" + one.new + "'"
                    } else {
                        return;
                    }

                    try {

                        const result = await todoApi.tx(req).get(uri)

                        one.done = true
                        one.message = 'Ok: ' + result.d.convertAssignmentIdExternal;


                    } catch (txe) {
                        one.done = false
                        one.message = txe.reason.message
                    }

                    await db.run(UPDATE(Assignment, one.ID).with(one))

                } catch (e) {
                    console.log(e) // DB error
                }
            })

        })
    }

}

module.exports = { AssignmentService }