const assert = require('assert');
const rp = require('request-promise');
const config = require('config');


class IssuesAPI {
  constructor({ logger }) {
    assert(logger, 'Expected logger');
    this.logger = logger;
    this.user = config.get('github.user');
    this.password = config.get('github.password');

    this.auth = `Basic ${Buffer.from(`${this.user}:${this.password}`).toString('base64')}`;
  }

  getUserInfos(username) {
    this.logger.debug(`IssuesAPI.getUserInfos for username '${username}'`);
    const url = `https://api.github.com/users/${username}`;
    return rp.get(url, {
      json: true,
      simple: true,
      headers: {
        'User-Agent': 'Issues Grabber Test',
        Authorization: this.auth,
      },
    })
      .catch((err) => {
        this.logger.error(err);

        return err;
      });
  }

  getUserRepos(url) {
    this.logger.debug(`IssuesAPI.getUserRepos at ${url}`);
    return rp.get(url, {
      json: true,
      headers: {
        'User-Agent': 'Issues Grabber Test',
        Authorization: this.auth,
      },
    })
      .catch((err) => {
        this.logger.error(err);

        return err;
      });
  }

  getIssues(repo) {
    this.logger.debug(`IssuesAPI.getIssues for repo '${repo}'`);
    const url = `${repo}/issues`;
    return rp.get(url, {
      json: true,
      headers: {
        'User-Agent': 'Issues Grabber Test',
        Authorization: this.auth,
      },
    })
      .catch((err) => {
        this.logger.error(err);

        return err;
      });
  }
}


module.exports = IssuesAPI;
