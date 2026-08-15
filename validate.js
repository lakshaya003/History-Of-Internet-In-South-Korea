function validateTimeline(events) {
    if (!Array.isArray(events)) throw new Error("Timeline must be array");
    events.forEach((e, i) => { if (!e.year || !e.title || !e.desc) { throw new Error("Bad timeline entry " + i); } });
    return true;
}
function validateISPs(isps) {
    if (!Array.isArray(isps)) throw new Error("ISPs must be array");
    isps.forEach((e, i) => { if (!e.name || !e.service) { throw new Error("Bad ISP entry " + i); } });
    return true;
}
