# Technical recruitment exercise

## Specifications

Create web server hosting the following API:
```http
GET /issues/{username}
```

Should return a `200` response with a JSON formatted body containing all open issues for the given Github username.

Like so:
```JSON
{
  "issues": [
    {
      "title": "title of issue",
      "url": "http://github.com/url/to/issue",
      "tags": ["tag-name-1", "tag-name-2"]
    },
    ...
  ]
}
```

## Acceptance Criteria
- [X] We should be able to make more than 60 requests per hour.
- [X] The JSON body should have the structure similar to the example above.
- [X] Include the necessary headers in the response (for JSON).
- [X] Return 404 status code for for all other routes (URLs).
- [X] When requesting invalid git usernames, the API should return a logical error message and status code (i.e. prefer 404 to 500).
- [X] Tag names within each issue should be sorted alphabetically.
- [X] Issues should be sorted (alphabetically) by the first tag.
- [X] Issues with no tags should come first.

## Technology
- [X] Add whatever npm scripts and tests you think are helpful.
- [X] Use whatever libraries you want (open bar ðž).
- [X] BONUS: Ship your API inside a Docker image.

## Timing
Please take 6 hours maximum to complete the exercise.
Use git and push your changes back to this repository when you are finished.
We are interested in seeing your work process.
Commiting often (i.e. after 2 hours, after 4 hours, etc.) is encouraged!

## Usage

Fill information about the github account to avoid limit of query (If you have 2FA then disable it for testing this script)
