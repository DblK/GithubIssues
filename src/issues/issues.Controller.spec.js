/* global loggerForTests expect mocks */
const sinon = require('sinon');
const chai = require('chai');

chai.use(require('chai-as-promised'));
chai.use(require('sinon-chai'));

const Issues = require('./Issues.Service');
const IssuesController = require('./Issues.Controller');

describe('Issues Controller', () => {
  let issuesController;
  let response;
  let request;
  let issuesServiceStub;
  let responseSpy;

  describe('new', () => {
    it('should create a new instance', () => {
      expect(new IssuesController({ logger: loggerForTests, issuesService: {} })).not.to.be.null();
    });
  });

  describe('getIssues function tests', () => {
    beforeEach(() => {
      issuesServiceStub = sinon.createStubInstance(Issues);
      response = new mocks.express.ResponseMock();
      issuesController = new IssuesController({
        logger: loggerForTests,
        issuesService: issuesServiceStub,
      });

      request = mocks.github.REQUEST;
    });

    afterEach(() => {
      issuesServiceStub = sinon.createStubInstance(Issues);
      response = new mocks.express.ResponseMock();
      issuesController = new IssuesController({
        logger: loggerForTests,
        issuesService: issuesServiceStub,
      });

      request = mocks.github.REQUEST;
    });

    it('should return the list of issues', () => {
      responseSpy = sinon.spy(response, 'json');
      issuesServiceStub.getIssues.returns(Promise.resolve(mocks.github.ISSUES_LIST.issues));

      return expect(issuesController.getIssues(request, response)).to.be.fulfilled().then(() => {
        expect(responseSpy).to.have.been.calledWith(mocks.github.ISSUES_LIST);
      });
    });

    it('should return an error 404 if something goes wrong', () => {
      responseSpy = sinon.spy(response, 'json');
      issuesServiceStub.getIssues.returns(Promise.reject(mocks.github.ISSUES_LIST_ERRORS));

      return expect(issuesController.getIssues(request, response)).to.be.fulfilled().then(() => {
        expect(responseSpy).to.have.been.calledWith(mocks.github.ISSUES_LIST_ERRORS);
      });
    });
  });
});
