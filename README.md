# Simple Graphl demo with Express

## Run
- npm install
- npm start

## Action List Demo: 1
```
{
  list { 
		id
		title
		author
		description
		topic
		url
  }
}
```

## Action List Demo: 2 on Postman
```
POST http://localhost:4000/graphql
```
```json
{
    "query": "{  list { id title description }  }"
}
```

## Action Select Demo: 1
```
query CourseQuery($courseID: Int!) {
    select(id: $courseID) {
        title
        author
        description
        topic
        url
    }
}
```
Query variables
```
{ 
    "courseID":1
}
```

## Action Select Demo: 2
```
{
  select (id: 3) {
        title
        author
        description
        topic
        url
    }
}
```

## Action Update Demo: 1
```
mutation CourseMutation($id: Int!, $topic: String!) {
  update(id: $id, topic: $topic) {
    ... courseFields
  }
}

fragment courseFields on Course {
  title
  author
  description
  topic
  url
}
```
Query variables
```json
{
  "id": 1,
  "topic": "JavaScript"
}
```

## Action Update Demo: 2
```
mutation {
  update(id: 2, topic: "TIESO") {
		title
		author
		description
		topic
		url
  }
}
```

## Action Create
```
mutation {
  create(payload: {
		title: "mine",
		author: "andy",
		description: "hope is a good thing",
		topic: "nodejs",
		url: "http://my.url.com"
  }) {
		id
		title
		author
		description
		topic
		url
  }
}
```

## Action Delete
```
mutation {
  delete(id: 4) {
		id
		title
		author
		description
		topic
		url
  }
}
```