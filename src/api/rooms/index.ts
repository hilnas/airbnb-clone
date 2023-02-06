// https://service-ase3oocp-1302839645.sh.apigw.tencentcs.com/api/room/room/getRoomList?pageNo=1&pageSize=3
import { http } from '@/utils/http';
import { IResult, IRoomDetailsParams, IRoomListParams } from '../interface';

// 真实接口：Fetch rom list
export function fetchRoomListAPI(params: IRoomListParams): Promise<IResult> {
  return http.get('/api/room/room/getRoomList', { params });
}

// Fetch single room info
export function fetchRoomDetailsAPI(
  params: IRoomDetailsParams
): Promise<IResult> {
  return http.get('/api/room/room/getRoomDetail', { params });
}
