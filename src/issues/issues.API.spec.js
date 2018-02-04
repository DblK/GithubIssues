/* global loggerForTests expect mocks */
const chai = require('chai');

chai.use(require('chai-as-promised'));

const nock = require('nock');
const IssuesAPI = require('./Issues.API');


describe('Issues API', () => {
  let serviceAPI;

  beforeEach(() => {
    serviceAPI = new IssuesAPI({
      logger: loggerForTests,
    });

    nock('https://api.github.com/users')
      .get('/GoodUser')
      .reply(200, mocks.MOCKED_GOODUSER_INFOS);

    nock('https://api.github.com/users')
      .get('/BadUser')
      .reply(200, mocks.MOCKED_BADUSER_INFOS);

    nock('https://api.github.com/users')
      .get('/BadUser')
      .reply(403, mocks.MOCKED_BADUSER_UNAUTHORIZED);

    nock('https://api.github.com/users/testRepoUser')
      .get('/repos')
      .reply(200, mocks.MOCKED_GOODUSER_REPOS);

    nock('https://api.github.com/users/testRepoUser2')
      .get('/repos')
      .reply(200, mocks.MOCKED_GOODUSER_REPOS_EMPTY);

    nock('https://api.github.com/users/testRepoUser')
      .get('/reposSSS')
      .reply(403, mocks.MOCKED_BADUSER_UNAUTHORIZED);

    nock('https://api.github.com/users/testRepoUser')
      .get('/issues')
      .reply(200, mocks.MOCKED_GOODUSER_ISSUES);

    nock('https://api.github.com/users/testRepoUser2')
      .get('/issues')
      .reply(200, mocks.MOCKED_GOODUSER_ISSUES_EMPTY);

    nock('https://api.github.com/users/testRepoUser3')
      .get('/issues')
      .reply(403, mocks.MOCKED_BADUSER_UNAUTHORIZED);
  });

  afterEach(() => {
    nock.cleanAll();
    serviceAPI = null;
  });

  describe('getUserInfos function', () => {
    it('should return a json containing error', () => expect(serviceAPI.getUserInfos('BadUser')).to.eventually.deep.equal(mocks.MOCKED_BADUSER_INFOS));

    it('should return the wanted infos', () => expect(serviceAPI.getUserInfos('GoodUser')).to.eventually.deep.equal(mocks.MOCKED_GOODUSER_INFOS));

    it('should crash if something unexpected arrive', () => expect(serviceAPI.getUserInfos('BadUser2')).to.be.rejectedWith(mocks.MOCKED_BADUSER_UNAUTHORIZED));
  });

  describe('getUserRepos function', () => {
    it('should return a list of repos', () => expect(serviceAPI.getUserRepos('https://api.github.com/users/testRepoUser/repos')).to.eventually.deep.equal(mocks.MOCKED_BADUSER_INFOS));

    it('should return a empty list', () => expect(serviceAPI.getUserRepos('https://api.github.com/users/testRepoUser2/repos')).to.eventually.deep.equal(mocks.MOCKED_GOODUSER_REPOS_EMPTY));

    it('should crash if something unexpected arrive', () => expect(serviceAPI.getUserRepos('https://api.github.com/users/testRepoUser/reposSSS'))
      .to.be.rejectedWith(mocks.MOCKED_BADUSER_UNAUTHORIZED));
  });

  describe('getIssues function', () => {
    it('should return a list of repos', () => expect(serviceAPI.getIssues('https://api.github.com/users/testRepoUser')).to.eventually.deep.equal(mocks.MOCKED_BADUSER_INFOS));

    it('should return a empty list', () => expect(serviceAPI.getIssues('https://api.github.com/users/testRepoUser2')).to.eventually.deep.equal(mocks.MOCKED_GOODUSER_REPOS_EMPTY));

    it('should crash if something unexpected arrive', () => expect(serviceAPI.getIssues('https://api.github.com/users/testRepoUser3'))
      .to.be.rejectedWith(mocks.MOCKED_BADUSER_UNAUTHORIZED));
  });
});
