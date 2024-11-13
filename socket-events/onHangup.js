import { io } from "../server.js";

const onHangup = async (data) => {
  let socketIdToEmitItTo;
  if (data.ongoingCall.participants.caller.userId === data.userHangingupId) {
    socketIdToEmitItTo = data.ongoingCall.participants.receiver.socketId;
  } else {
    socketIdToEmitItTo = data.ongoingCall.participants.caller.socketId;
  }

  if (socketIdToEmitItTo) {
    io.to(socketIdToEmitItTo).emit("hangup");
  }
};

export default onHangup;
