service AssignmentService {
    function triggerUpdate() returns array of {
        personIdExternal: String;
        personId: String;
        perPersonUuid: String;
    };
}