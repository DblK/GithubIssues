
const assert = require('assert');
const { CustomError } = require('../core/customError');
const _ = require('lodash');

class IssuesService {
  constructor({ logger, issuesAPI }) {
    assert(logger, 'Expected logger');
    this.logger = logger;
    assert(issuesAPI, 'Expected issuesAPI');
    this.issuesAPI = issuesAPI;
  }

  async getIssues(username) {
    this.logger.debug(`IssuesService.getIssues for username '${username}'`);
    let issues = [];

    // Retrieve User information
    const infos = await this.issuesAPI.getUserInfos(username);

    // Check if the response has repos url
    if (!infos.repos_url) {
      return Promise.reject(new CustomError(
        404,
        'User not found !',
      ));
    }

    // Retrieve Repos list
    const repos = await this.issuesAPI.getUserRepos(infos.repos_url);

    // Check if the response has repos url
    if (repos.length === 0) {
      return Promise.reject(new CustomError(
        404,
        'User do not have any repos !',
      ));
    }

    // Loop issues on each repository
    await this.asyncForEach(repos, async (repo) => {
      await this.issuesAPI.getIssues(repo.url)
        .then((repoIssues) => {
          if (repoIssues.length !== 0) {
            _.forEach(repoIssues, (issue) => {
              issues.push({
                title: issue.title,
                url: issue.url,
                tags: _.map(_.sortBy(issue.labels, label => label.name.toLowerCase()), label => label.name),
              });
            });
          }
        });
    });

    // Order issues
    issues = _.sortBy(issues, issue => `${issue.tags.length === 0 ? 0 : 1}-${issue.title.toLowerCase()}`);

    return Promise.resolve(issues);
  }

  async asyncForEach(array, callback) { // eslint-disable-line class-methods-use-this
    for (let index = 0; index < array.length; index++) { // eslint-disable-line no-plusplus
      await callback(array[index], index, array); // eslint-disable-line no-await-in-loop
    }
  }
}


module.exports = IssuesService;
