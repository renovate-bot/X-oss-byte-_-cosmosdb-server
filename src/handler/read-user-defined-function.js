// @flow
import type Account from "../account";

module.exports = (
  account: Account,
  req: http$IncomingMessage,
  res: http$ServerResponse,
  { dbId, collId, udfId }: { dbId: string, collId: string, udfId: string }
) => {
  const data = account
    .database(dbId)
    .collection(collId)
    .userDefinedFunction(udfId)
    .read();
  if (!data) {
    res.statusCode = 404;
    return {};
  }

  return data;
};
