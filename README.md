# cap_sf_batch
- Processing SF OData API from CSV in batch mode
- Currently Assignment

# Setup connection details

- Create *.env* file in root directory
- Add following lines

        cds.requires.jsonplaceholder.[local].credentials.url=https://<datacenter-api>.successfactors.eu/odata/v2/
        cds.requires.jsonplaceholder.[local].credentials.username=<api_user>@<company_id>
        cds.requires.jsonplaceholder.[local].credentials.password=<password>

# Usage

- Load csv to DB via `cds deploy`
- Start CAP via `cds watch --profile local`
- Call function http://localhost:4004/odata/v4/assignment/triggerUpdate()
