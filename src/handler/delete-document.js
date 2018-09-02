// @flow
import type Account from "../account";

module.exports = (
  account: Account,
  req: http$IncomingMessage,
  res: http$ServerResponse,
  { dbId, collId, docId }: { dbId: string, collId: string, docId: string }
) => {
  const collection = account.database(dbId).collection(collId);
  if (!collection.document(docId).read()) {
    res.statusCode = 404;
    return {};
  }

  return collection.documents.delete(docId);
};
