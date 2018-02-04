const assert = require('assert');


class IssuesController {
  constructor({ logger, issuesService }) {
    assert(logger, 'Expected logger');
    this.logger = logger;
    assert(issuesService, 'Expected issuesService');
    this.issuesService = issuesService;
  }

  getIssues(req, res) {
    this.logger.debug('IssuesController.getIssues');
    return this.issuesService.getIssues(req.params.username)
      .then(issues => res.json({
        issues,
      }))
      .catch((err) => {
        console.log(err);
        res.statusCode = 404;
        res.json({ code: err.code, message: err.message });
      });
  }
}


module.exports = IssuesController;
