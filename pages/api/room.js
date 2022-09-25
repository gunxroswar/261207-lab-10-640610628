import { readDB } from "../../backendLibs/dbLib";

export default function roomRoute(req, res) {
  const rooms = readDB();
  // const result = [];

  // for (const room in rooms) {
  //   result.push({
  //     roomId: room.roomid,
  //     roomName: room.roomName,
  //   });
  // }

  const resultx = rooms.map((x) => ({
    roomId: x.roomId,
    roomName: x.roomName,
  }));

  return res.json({ ok: true, rooms: resultx });
}
