// @flow
import type Account from "../account";

module.exports = (
  account: Account,
  req: http$IncomingMessage,
  res: http$ServerResponse,
  { dbId, collId, docId }: { dbId: string, collId: string, docId: string }
) => {
  const data = account
    .database(dbId)
    .collection(collId)
    .document(docId)
    .read();
  if (!data) {
    res.statusCode = 404;
    return {};
  }

  return data;
};
