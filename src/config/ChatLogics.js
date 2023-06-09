export const isSameSenderMargin = (messages, m, i, userId) => {
  // console.log(i === messages.length - 1);

  if (
    i < messages.length - 1 &&
    messages[i + 1].sender._id === m.sender._id &&
    messages[i].sender._id !== userId
  )
    return 33;
  else if (
    (i < messages.length - 1 &&
      messages[i + 1].sender._id !== m.sender._id &&
      messages[i].sender._id !== userId) ||
    (i === messages.length - 1 && messages[i].sender._id !== userId)
  )
    return 0;
  else return "auto";
};

export const isSameSender = (messages, m, i, userId) => {
  // console.log("is same sender ");
  // console.log("messages ", messages[0].sender);
  // console.log("m ", m);
  // console.log("i ", i);
  // console.log("userID ", userId);
  const value =
    i < messages.length - 1 &&
    (messages[i + 1].sender._id !== m.sender._id ||
      messages[i + 1].sender._id === undefined) &&
    messages[i].sender._id !== userId;
  // console.log("value1 ", value);
  return value;
};

export const isLastMessage = (messages, i, userId) => {
  const value =
    i === messages.length - 1 &&
    messages[messages.length - 1].sender._id !== userId;
  // console.log("value2 ", value);
  return value;
};

export const isSameUser = (messages, m, i) => {
  return i > 0 && messages[i - 1].sender._id === m.sender._id;
};

export const getSender = (loggedUser, users) => {
  // console.log("user1 " + users[0].name);
  // console.log("user2 " + users[1].name);
  const senderName =
    users[0]._id === loggedUser._id ? users[1].name : users[0].name;
  return senderName;
};

export const getSenderFull = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};
