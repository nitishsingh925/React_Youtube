import CommentsList from "./CommentsList";
const commentsData = [
  {
    name: "Nitish Singh",
    text: "Lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Nitish Singh",
        text: "Lorem ipsum dolor sit amet",
        replies: [
          {
            name: "Nitish Singh",
            text: "Lorem ipsum dolor sit amet",
            replies: [
              {
                name: "Nitish Singh",
                text: "Lorem ipsum dolor sit amet",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Nitish Singh",
    text: "Lorem ipsum dolor sit amet",
    replies: [
      {
        name: "Nitish Singh",
        text: "Lorem ipsum dolor sit amet",
        replies: [
          {
            name: "Nitish Singh",
            text: "Lorem ipsum dolor sit amet",
            replies: [
              {
                name: "Nitish Singh",
                text: "Lorem ipsum dolor sit amet",
                replies: [
                  {
                    name: "Nitish Singh",
                    text: "Lorem ipsum dolor sit amet",
                    replies: [
                      {
                        name: "Nitish Singh",
                        text: "Lorem ipsum dolor sit amet",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Nitish Singh",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Nitish Singh",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Nitish Singh",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Nitish Singh",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Nitish Singh",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Nitish Singh",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
  {
    name: "Nitish Singh",
    text: "Lorem ipsum dolor sit amet",
    replies: [],
  },
];

function CommentsContainer() {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
}

export default CommentsContainer;
