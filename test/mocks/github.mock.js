const MOCKED_GOODUSER_INFOS = {
  login: 'testRepoUser',
  id: 18487506,
  avatar_url: 'https://avatars2.githubusercontent.com/u/18487506?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/testRepoUser',
  html_url: 'https://github.com/testRepoUser',
  followers_url: 'https://api.github.com/users/testRepoUser/followers',
  following_url: 'https://api.github.com/users/testRepoUser/following{/other_user}',
  gists_url: 'https://api.github.com/users/testRepoUser/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/testRepoUser/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/testRepoUser/subscriptions',
  organizations_url: 'https://api.github.com/users/testRepoUser/orgs',
  repos_url: 'https://api.github.com/users/testRepoUser/repos',
  events_url: 'https://api.github.com/users/testRepoUser/events{/privacy}',
  received_events_url: 'https://api.github.com/users/testRepoUser/received_events',
  type: 'Organization',
  site_admin: false,
  name: 'testRepoUser',
  company: null,
  blog: 'http://www.testRepoUser.org/',
  location: 'Worldwide',
  email: 'testRepoUser.npm@gmail.com',
  hireable: null,
  bio: 'testRepoUser - npm proxy private registry',
  public_repos: 15,
  public_gists: 0,
  followers: 0,
  following: 0,
  created_at: '2016-04-15T16:20:38Z',
  updated_at: '2018-01-07T12:12:49Z'
}
const MOCKED_BADUSER_INFOS = {
  "name":"StatusCodeError","statusCode":404,"message":"404 - {\"message\":\"Not Found\",\"documentation_url\":\"https://developer.github.com/v3/users/#get-a-single-user\"}","error":{"message":"Not Found","documentation_url":"https://developer.github.com/v3/users/#get-a-single-user"},"options":{"json":true,"headers":{"User-Agent":"Issues Grabber Test","Authorization":"Basic XXXX="},"uri":"https://api.github.com/users/testRepoUser22","method":"GET","simple":true,"resolveWithFullResponse":false,"transform2xxOnly":false},"response":{"statusCode":404,"body":{"$ref":"$[\"meta\"][\"error\"]"},"headers":{"server":"GitHub.com","date":"Sun, 04 Feb 2018 22:46:57 GMT","content-type":"application/json; charset=utf-8","content-length":"102","connection":"close","status":"404 Not Found","x-ratelimit-limit":"5000","x-ratelimit-remaining":"4999","x-ratelimit-reset":"1517788017","x-github-media-type":"github.v3","access-control-expose-headers":"ETag, Link, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval","access-control-allow-origin":"*","content-security-policy":"default-src 'none'","strict-transport-security":"max-age=31536000; includeSubdomains; preload","x-content-type-options":"nosniff","x-frame-options":"deny","x-xss-protection":"1; mode=block","x-runtime-rack":"0.042856","x-github-request-id":"91B0:016B:1E0DB13:40614ED:5A778D61"},"request":{"uri":{"protocol":"https:","slashes":true,"auth":null,"host":"api.github.com","port":443,"hostname":"api.github.com","hash":null,"search":null,"query":null,"pathname":"/users/testRepoUser22","path":"/users/testRepoUser22","href":"https://api.github.com/users/testRepoUser22"},"method":"GET","headers":{"User-Agent":"Issues Grabber Test","Authorization":"Basic VVVVVV","accept":"application/json"}}}
}
const MOCKED_BADUSER_UNAUTHORIZED = {
  "name":"StatusCodeError",
  "statusCode":401,
  "message":"401 - {\"message\":\"Bad credentials\",\"documentation_url\":\"https://developer.github.com/v3\"}",
  "error":{"message":"Bad credentials","documentation_url":"https://developer.github.com/v3"},
  "options":{"json":true,"headers":{"User-Agent":"Issues Grabber Test","Authorization":"Basic XXXXXXX"},"uri":"https://api.github.com/users/testRepoUser22","method":"GET","simple":true,"resolveWithFullResponse":false,"transform2xxOnly":false},"response":{"statusCode":401,"body":{"$ref":"$[\"meta\"][\"error\"]"},"headers":{"server":"GitHub.com","date":"Sun, 04 Feb 2018 22:47:50 GMT","content-type":"application/json; charset=utf-8","content-length":"83","connection":"close","status":"401 Unauthorized","x-github-media-type":"github.v3","x-ratelimit-limit":"60","x-ratelimit-remaining":"59","x-ratelimit-reset":"1517788070","access-control-expose-headers":"ETag, Link, Retry-After, X-GitHub-OTP, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset, X-OAuth-Scopes, X-Accepted-OAuth-Scopes, X-Poll-Interval","access-control-allow-origin":"*","content-security-policy":"default-src 'none'","strict-transport-security":"max-age=31536000; includeSubdomains; preload","x-content-type-options":"nosniff","x-frame-options":"deny","x-xss-protection":"1; mode=block","x-runtime-rack":"0.031128","x-github-request-id":"AA98:016A:2D662F2:59FD3FF:5A778D96"},"request":{"uri":{"protocol":"https:","slashes":true,"auth":null,"host":"api.github.com","port":443,"hostname":"api.github.com","hash":null,"search":null,"query":null,"pathname":"/users/testRepoUser22","path":"/users/testRepoUser22","href":"https://api.github.com/users/testRepoUser22"},"method":"GET","headers":{"User-Agent":"Issues Grabber Test","Authorization":"Basic XXXXX","accept":"application/json"}}}
}

const MOCKED_GOODUSER_REPOS = [{

}];

const MOCKED_GOODUSER_REPOS_EMPTY = [];

const MOCKED_GOODUSER_ISSUES = [
  {
    "url": "https://api.github.com/repos/testRepoUser/myrepo1/issues/555",
    "repository_url": "https://api.github.com/repos/testRepoUser/myrepo1",
    "labels_url": "https://api.github.com/repos/testRepoUser/myrepo1/issues/555/labels{/name}",
    "comments_url": "https://api.github.com/repos/testRepoUser/myrepo1/issues/555/comments",
    "events_url": "https://api.github.com/repos/testRepoUser/myrepo1/issues/555/events",
    "html_url": "https://github.com/testRepoUser/myrepo1/pull/555",
    "id": 294124145,
    "number": 555,
    "title": "This is my title",
    "user": {
      "login": "renovate[bot]",
      "id": 29139614,
      "avatar_url": "https://avatars1.githubusercontent.com/in/2740?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/renovate%5Bbot%5D",
      "html_url": "https://github.com/apps/renovate",
      "followers_url": "https://api.github.com/users/renovate%5Bbot%5D/followers",
      "following_url": "https://api.github.com/users/renovate%5Bbot%5D/following{/other_user}",
      "gists_url": "https://api.github.com/users/renovate%5Bbot%5D/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/renovate%5Bbot%5D/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/renovate%5Bbot%5D/subscriptions",
      "organizations_url": "https://api.github.com/users/renovate%5Bbot%5D/orgs",
      "repos_url": "https://api.github.com/users/renovate%5Bbot%5D/repos",
      "events_url": "https://api.github.com/users/renovate%5Bbot%5D/events{/privacy}",
      "received_events_url": "https://api.github.com/users/renovate%5Bbot%5D/received_events",
      "type": "Bot",
      "site_admin": false
    },
    "labels": ["ZZZZ", "YYYYY", "bbbb", "45678"],
    "state": "open",
    "locked": false,
    "assignee": null,
    "assignees": [],
    "milestone": null,
    "comments": 0,
    "created_at": "2018-02-03T16:29:02Z",
    "updated_at": "2018-02-04T14:28:03Z",
    "closed_at": null,
    "author_association": "NONE",
    "pull_request": {
      "url": "https://api.github.com/repos/testRepoUser/myrepo1/pulls/555",
      "html_url": "https://github.com/testRepoUser/myrepo1/pull/555",
      "diff_url": "https://github.com/testRepoUser/myrepo1/pull/555.diff",
      "patch_url": "https://github.com/testRepoUser/myrepo1/pull/555.patch"
    },
    "body": "This PR is for XX"
  }
];
const MOCKED_GOODUSER_ISSUES_EMPTY = [];

const REQUEST = {
  params: {
    username: 'test'
  }
};

const ISSUES_LIST = {
  issues: [
    {
      title: "test",
      url: "there",
      tags: ['aaa', 'bbbb', 'cccc']
    }
  ]
};

const ISSUES_LIST_ERRORS = {
  code: 404,
  message: 'This is an error'
}

module.exports = {
  MOCKED_GOODUSER_INFOS,
  MOCKED_BADUSER_INFOS,
  MOCKED_BADUSER_UNAUTHORIZED,
  MOCKED_GOODUSER_REPOS,
  MOCKED_GOODUSER_REPOS_EMPTY,
  MOCKED_GOODUSER_ISSUES,
  MOCKED_GOODUSER_ISSUES_EMPTY,
  REQUEST,
  ISSUES_LIST,
  ISSUES_LIST_ERRORS,
};
